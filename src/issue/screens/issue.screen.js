/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Linking,
  Platform,
} from 'react-native';
import { Icon } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet';

import {
  ViewContainer,
  LoadingContainer,
  IssueDescription,
  CommentListItem,
  CommentInput,
  IssueEventListItem,
} from 'components';
import { RestClient } from 'api';
import {
  t,
  formatEventsToRender,
  openURLInView,
  getRepoIdFromUrl,
} from 'utils';
import { colors } from 'config';

const getRepoAndIssueFromUrl = url => {
  const re = /https:\/\/api.github.com\/repos\/(.*)\/issues\/(\d+)$/;
  const matches = re.exec(url);

  return { repoId: matches[1], issueNumber: matches[2] };
};

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { issues, issueTimelineItems, users, repos },
    gqlPagination: {
      GRAPHQL_ISSUES_LABELS_PAGINATION,
      GRAPHQL_ISSUES_TIMELINE_PAGINATION,
    },
  } = state;

  const navigationParams = ownProps.navigation.state.params;

  const { repoId, issueNumber } = navigationParams.repoId
    ? {
        repoId: navigationParams.repoId,
        issueNumber: navigationParams.issueNumber,
      }
    : getRepoAndIssueFromUrl(navigationParams.issue.url);

  const repository = repos[repoId];

  const issueFQN = `${repoId}-${issueNumber}`;
  const issue = issues[issueFQN] || false;

  const timelinePagination = GRAPHQL_ISSUES_TIMELINE_PAGINATION[issueFQN] || {
    isFetching: true,
    ids: [],
    pageInfo: {},
  };
  const timeline = timelinePagination.ids.map(id => issueTimelineItems[id]);

  const labelsPagination = GRAPHQL_ISSUES_LABELS_PAGINATION[issueFQN] || {
    isFetching: true,
    ids: [],
    pageInfo: {},
  };
  const labels = labelsPagination.ids.map(item => item.node);

  if (issue && !navigationParams.issue) {
    ownProps.navigation.setParams({ issue });
  }

  if (issue && issue.viewerCanUpdate && !navigationParams.viewerCanUpdate) {
    ownProps.navigation.setParams({ viewerCanUpdate: true });
  }

  return {
    issue,
    timeline,
    timelinePagination,
    labels,
    labelsPagination,
    repoId,
    repository,
    issueNumber,
  };
};

const mapDispatchToProps = {
  getIssue: RestClient.graphql.getIssue,
  postIssueComment: RestClient.issues.createComment,
  deleteIssueComment: RestClient.issues.deleteComment,
};

class Issue extends Component {
  static navigationOptions = ({ navigation }) => {
    const getHeaderIcon = () => {
      const { state, navigate } = navigation;

      console.log('nav state', state);

      if (state.params.viewerCanUpdate) {
        return (
          <Icon
            name="gear"
            color={colors.primaryDark}
            type="octicon"
            containerStyle={{ marginRight: 5 }}
            underlayColor={colors.transparent}
            onPress={() =>
              navigate('IssueSettings', {
                title: t('Settings', state.params.locale),
                issue: state.params.issue,
                repoId: state.params.repoId,
                issueNumber: state.params.issue.number,
              })
            }
          />
        );
      }

      return (
        <Icon
          name="ellipsis-h"
          color={colors.primaryDark}
          type="font-awesome"
          containerStyle={{ marginRight: 10 }}
          underlayColor={colors.transparent}
          onPress={state.params.showActionSheet}
        />
      );
    };

    return { headerRight: getHeaderIcon() };
  };

  props: {
    repoId: string,
    issueNumber: number,
    locale: string,
    navigation: Object,
    issue: Object,
    timeline: Array,
    timelinePagination: Object,
    labels: Array,
    labelsPagination: Object,

    getIssue: Function,
    postIssueComment: Function,
    deleteIssueComment: Function,

    // OLD
    getRepository: Function,
    getContributors: Function,
    authUser: Object,
    repository: Object,
    contributors: Array,
    isPendingContributors: boolean,
    // isPostingComment: boolean,
  };

  componentDidMount() {
    this.getIssueInformation();

    this.props.navigation.setParams({ showActionSheet: this.showActionSheet });
  }

  onLinkPress = node => {
    const { navigation, authUser } = this.props;

    if (node.attribs.class && node.attribs.class.includes('user-mention')) {
      const login = node.children[0].data.substring(1);

      navigation.navigate(
        authUser.login === login ? 'AuthProfile' : 'Profile',
        {
          user: { login },
        }
      );
    } else if (
      node.attribs.class &&
      node.attribs.class.includes('issue-link')
    ) {
      const re = /https:\/\/github.com\/(.*)\/issues\/(\d+)$/;
      const matches = re.exec(node.attribs.href);

      navigation.navigate('Issue', {
        repoId: matches[1],
        issueNumber: matches[2],
      });
    } else {
      Linking.openURL(node.attribs.href);
    }
  };

  onRepositoryPress = repoId => {
    const { navigation } = this.props;

    navigation.navigate('Repository', {
      repoId: getRepoIdFromUrl(url),
    });
  };

  getIssueInformation = () => {
    const { repoId, issueNumber, getIssue } = this.props;

    getIssue(repoId, issueNumber);

    return Promise.resolve(true);
  };

  getContributorsLink = repository => `${repository}/contributors`;
  getData() {
    const { issue, labels, timeline, locale, navigation, repoId } = this.props;

    return [
      <IssueDescription
        issue={issue}
        labels={labels}
        repoId={repoId}
        onRepositoryPress={repoId => this.onRepositoryPress(repoId)}
        onLinkPress={node => this.onLinkPress(node)}
        locale={locale}
        navigation={navigation}
      />,
      <CommentListItem
        comment={issue}
        onLinkPress={node => this.onLinkPress(node)}
        onDeletePress={this.deleteComment}
        onEditPress={comment => this.editComment(comment, true)}
        locale={locale}
        navigation={navigation}
      />,
      ...formatEventsToRender(timeline),
    ];
  }
  setNavigationParams = () => {
    const { navigation, locale } = this.props;

    navigation.setParams({
      locale,
    });
  };

  handleActionSheetPress = index => {
    if (index === 0) {
      openURLInView(this.props.issue.webUrl);
    }
  };

  postComment = body => {
    const { issueNumber, repoId } = this.props;

    this.props.postIssueComment(repoId, issueNumber, body).then(() => {
      this.commentsList.scrollToEnd();
    });
    Keyboard.dismiss();
  };

  deleteComment = comment => {
    const { repoId, issueNumber } = this.props;

    this.props.deleteIssueComment(repoId, issueNumber, comment.id);
  };

  editComment = (comment, isIssueDescription) => {
    const { state, navigate } = this.props.navigation;
    const { repoId, issueNumber } = this.props;

    navigate('EditIssueComment', {
      title: t('Edit Comment', state.params.locale),
      repoId,
      issueNumber,
      comment,
      isIssueDescription,
    });
  };

  showActionSheet = () => this.ActionSheet.show();

  keyExtractor = (item, index) => {
    return index;
  };

  renderHeader = () => {
    const { issue, labels, locale, navigation } = this.props;

    return (
      <IssueDescription
        issue={issue}
        labels={labels}
        onRepositoryPress={url => this.onRepositoryPress(url)}
        onLinkPress={node => this.onLinkPress(node)}
        locale={locale}
        navigation={navigation}
      />
    );
  };

  renderItem = ({ item }) => {
    const { repository, locale, navigation } = this.props;

    if (!item.__typename) {
      return item;
    }

    if (item.__typename === 'IssueComment') {
      return (
        <CommentListItem
          comment={item}
          onLinkPress={node => this.onLinkPress(node)}
          onDeletePress={this.deleteComment}
          onEditPress={this.editComment}
          locale={locale}
          navigation={navigation}
        />
      );
    }

    return (
      <IssueEventListItem
        repository={repository}
        event={item}
        navigation={navigation}
      />
    );
  };

  render() {
    const {
      issue,
      timelinePagination,
      issueNumber,
      locale,
      navigation,
      repoId,
    } = this.props;

    const isLoading = !issue;

    const timelineCursor = timelinePagination
      ? timelinePagination.pageInfo.endCursor
      : '';
    const issuesActions = [t('Open in Browser', locale)];

    return (
      <ViewContainer>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'padding'}
          keyboardVerticalOffset={Platform.select({
            ios: 65,
            android: -200,
          })}
        >
          {issue && (
            <FlatList
              ref={ref => {
                this.commentsList = ref;
              }}
              refreshing={isLoading}
              onRefresh={this.getIssueInformation}
              contentContainerStyle={{ flexGrow: 1 }}
              removeClippedSubviews={false}
              onEndReached={() =>
                timelineCursor &&
                this.props.getIssue(repoId, issueNumber, timelineCursor)
              }
              data={this.getData()}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          )}
          <CommentInput
            users={[]}
            viewerCanUpdate={issue && issue.viewerCanUpdate}
            issueLocked={issue && issue.locked}
            locale={locale}
            onSubmit={this.postComment}
          />
        </KeyboardAvoidingView>

        <ActionSheet
          ref={o => {
            this.ActionSheet = o;
          }}
          title={t('Issue Actions', locale)}
          options={[...issuesActions, t('Cancel', locale)]}
          cancelButtonIndex={1}
          onPress={this.handleActionSheetPress}
        />
      </ViewContainer>
    );
  }
}

export const IssueScreen = connect(mapStateToProps, mapDispatchToProps)(Issue);
