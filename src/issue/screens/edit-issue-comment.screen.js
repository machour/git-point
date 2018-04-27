// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import { ViewContainer, SectionList, LoadingModal } from 'components';
import { t } from 'utils';
import { RestClient } from 'api';
import { colors, fonts, normalize } from 'config';

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 10,
    fontSize: normalize(12),
    marginHorizontal: 15,
    flex: 1,
    color: colors.black,
    ...fonts.fontPrimary,
  },
  submitTitle: {
    color: colors.green,
    ...fonts.fontPrimary,
  },
  listItemContainer: {
    flex: 1,
  },
  titleSmall: {
    color: colors.primaryDark,
    ...fonts.fontPrimarySemiBold,
    fontSize: normalize(10),
  },
});

const mapStateToProps = state => ({
  locale: state.auth.locale,
  issue: state.issue.issue,
  repository: state.repository.repository,
  isEditingComment: state.issue.isEditingComment,
});

const mapDispatchToProps = {
  editIssueBody: RestClient.issues.edit,
  editIssueComment: RestClient.issues.editComment,
};

class EditIssueComment extends Component {
  props: {
    isIssueDescription: boolean,
    locale: string,
    navigation: Object,
    issue: Object,
    isEditingComment: boolean,
    editIssueBody: Function,
    editIssueComment: Function,
  };

  state: {
    issueComment: string,
    issueCommentHeight: number,
  };

  constructor(props) {
    super(props);

    this.state = {
      issueComment: this.props.navigation.state.params.comment.body,
      issueCommentHeight: 0,
    };
  }

  editComment = () => {
    const { issue, isIssueDescription, navigation } = this.props;
    const commentId = navigation.state.params.comment.id;
    const repoId = navigation.state.params.repoId;

    console.log('repoId is ' + repoId);

    const text = this.state.issueComment;
    const action = isIssueDescription
      ? this.props.editIssueBody(repoId, issue.number, text)
      : this.props.editIssueComment(repoId, issue.number, commentId, text);

    action.then(() => navigation.goBack());
  };

  render() {
    const { locale, isEditingComment } = this.props;
    const { issueComment } = this.state;

    return (
      <ViewContainer>
        {isEditingComment && <LoadingModal />}
        <ScrollView>
          <SectionList title={t('Issue Comment', locale)}>
            <TextInput
              underlineColorAndroid={'transparent'}
              placeholder={t('Write a comment for your issue here', locale)}
              multiline
              onChangeText={text => this.setState({ issueComment: text })}
              onContentSizeChange={event =>
                this.setState({
                  issueCommentHeight: event.nativeEvent.contentSize.height,
                })
              }
              placeholderTextColor={colors.grey}
              style={[
                styles.textInput,
                {
                  height: this.state.issueCommentHeight,
                  maxHeight: Dimensions.get('window').height / 2,
                },
              ]}
              value={issueComment}
            />
          </SectionList>

          <SectionList>
            <View style={styles.listItemContainer}>
              <ListItem
                title={t('Submit', locale)}
                hideChevron
                underlayColor={colors.greyLight}
                titleStyle={styles.submitTitle}
                onPress={this.editComment}
              />
            </View>
          </SectionList>
        </ScrollView>
      </ViewContainer>
    );
  }
}

export const EditIssueCommentScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditIssueComment);
