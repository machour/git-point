/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text,
  Platform,
} from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import {
  ViewContainer,
  IssueListItem,
  LoadingContainer,
  SearchBar,
} from 'components';

import { t, toOldIssueFormat } from 'utils';
import { colors, fonts, normalize } from 'config';
import { RestClient } from 'api';

const NAV_SEARCH_PARAMS = 'searchParams';

const mapStateToProps = (state, ownProps) => {
  const {
    auth: { locale },
    pagination: { SEARCH_ISSUES },
    entities: { issues },
  } = state;

  const repoId = ownProps.navigation.getParam('repoId');
  const searchQuery =
    ownProps.navigation.getParam(NAV_SEARCH_PARAMS) ||
    `repo:${repoId}+type:issue+state:open`;

  const issuesPagination = SEARCH_ISSUES[searchQuery] || {
    ids: [],
    isFetching: false,
  };

  return {
    repoId,
    locale,
    issuesPagination,
    issues: issuesPagination.ids.map(id => toOldIssueFormat(issues[id])),
    searchQuery,
  };
};

const mapDispatchToProps = {
  searchIssues: RestClient.search.issues,
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  searchContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: colors.white,
    flex: 1,
  },
  list: {
    marginTop: 0,
  },
  buttonGroupContainer: {
    height: 30,
    ...Platform.select({
      ios: {
        marginTop: 5,
        marginBottom: 10,
      },
      android: {
        marginTop: 5,
        marginBottom: 12,
      },
    }),
  },
  buttonGroupText: {
    ...fonts.fontPrimaryBold,
  },
  buttonGroupTextSelected: {
    color: colors.black,
  },
  loadingIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginSpacing: {
    marginTop: 40,
  },
  searchTitle: {
    fontSize: normalize(18),
    textAlign: 'center',
  },
  searchCancelButton: {
    color: colors.black,
  },
});

const SearchType = {
  OPEN: 0,
  CLOSED: 1,
};

class IssueList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    const repoId = state.params.repoId;

    return {
      headerRight: (
        <Icon
          name="plus"
          color={colors.primaryDark}
          type="octicon"
          containerStyle={{ marginRight: 5 }}
          underlayColor={colors.transparent}
          onPress={() =>
            navigate('NewIssue', {
              title: t('New Issue', state.params.locale),
              repoId,
            })
          }
        />
      ),
    };
  };

  props: {
    repoId: string,
    locale: string,
    navigation: Object,
    searchIssues: Function,
    issuesPagination: Object,
    issues: Array,
  };

  state: {
    query: string,
    searchType: number,
    searchStart: boolean,
    searchFocus: boolean,
  };

  constructor() {
    super();

    this.state = {
      query: '',
      searchType: SearchType.OPEN,
      keyword: false,
      searchStart: false,
      searchFocus: false,
    };
  }

  componentDidMount() {
    const { locale, navigation } = this.props;

    this.props.searchIssues(this.getSearchString());

    navigation.setParams({
      locale,
    });
  }

  getSearchString(keyword = null) {
    const { repoId } = this.props;
    const { searchType } = this.state;

    return `repo:${repoId}+type:issue+state:${
      searchType === SearchType.OPEN ? 'open' : 'closed'
    }${keyword ? `+${keyword}` : ''}`;
  }

  switchQueryType = selectedType => {
    if (this.state.searchType !== selectedType) {
      this.setState(
        {
          searchType: selectedType,
        },
        () => {
          const searchString = this.getSearchString(this.state.keyword);

          this.props.navigation.setParams({
            [NAV_SEARCH_PARAMS]: searchString,
          });
          this.props.searchIssues(searchString);
        }
      );
    }
  };

  search = keyword => {
    const { searchIssues } = this.props;

    if (keyword !== '') {
      this.setState({
        keyword,
      });

      const searchString = this.getSearchString(keyword);

      this.props.navigation.setParams({
        [NAV_SEARCH_PARAMS]: searchString,
        keyword,
      });

      searchIssues(searchString);
    }
  };

  keyExtractor = item => {
    return item.id;
  };

  renderItem = ({ item }) => (
    <IssueListItem
      type={this.props.navigation.state.params.type}
      issue={item}
      repoId={this.props.navigation.state.params.repoId}
      navigation={this.props.navigation}
      locale={this.props.locale}
    />
  );

  renderFooter() {
    if (this.props.issuesPagination.nextPageUrl === null) {
      return null;
    }

    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  render() {
    const { locale, issues, issuesPagination } = this.props;
    const { query, searchType, keyword, searchFocus } = this.state;

    const isPendingSearch = issuesPagination.isFetching && issues.length === 0;

    return (
      <ViewContainer>
        <View style={styles.header}>
          <View style={styles.searchBarWrapper}>
            <View style={styles.searchContainer}>
              <SearchBar
                textColor={colors.primaryDark}
                textFieldBackgroundColor={colors.greyLight}
                showsCancelButton={searchFocus}
                onFocus={() => this.setState({ searchFocus: true })}
                onCancelButtonPress={() =>
                  this.setState({ searchStart: false, query: '' })
                }
                onSearchButtonPress={text => {
                  this.search(text);
                }}
                hideBackground
              />
            </View>
          </View>

          <ButtonGroup
            onPress={this.switchQueryType}
            selectedIndex={searchType}
            buttons={[t('Open', locale), t('Closed', locale)]}
            textStyle={styles.buttonGroupText}
            selectedTextStyle={styles.buttonGroupTextSelected}
            containerStyle={styles.buttonGroupContainer}
          />
        </View>

        <Text>${`Query is ${query}`}</Text>

        {isPendingSearch && (
          <LoadingContainer
            animating={isPendingSearch && searchType === SearchType.OPEN}
            text={
              keyword
                ? t('Searching for {query}', locale, {
                    query: keyword,
                  })
                : t('Loading issues ...')
            }
            style={styles.marginSpacing}
          />
        )}

        {!isPendingSearch &&
          issues.length > 0 && (
            <FlatList
              ref={ref => {
                this.issueList = ref;
              }}
              removeClippedSubviews={false}
              data={issues}
              onEndReached={() =>
                this.props.searchIssues(this.getSearchString(), {
                  loadMore: true,
                })
              }
              onEndReachedThreshold={0.5}
              ListFooterComponent={() => this.renderFooter()}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          )}

        {!isPendingSearch &&
          issues.length === 0 && (
            <View style={styles.marginSpacing}>
              <Text style={styles.searchTitle}>
                {searchType === SearchType.OPEN
                  ? t('No open issues found!', locale)
                  : t('No closed issues found!', locale)}
              </Text>
            </View>
          )}
      </ViewContainer>
    );
  }
}

export const IssueListScreen = connect(mapStateToProps, mapDispatchToProps)(
  IssueList
);
