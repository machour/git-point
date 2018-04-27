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
import { RestClient, v3 } from 'api';
import { t, formatEventsToRender, openURLInView } from 'utils';
import { colors } from 'config';
import { getRepository, getContributors } from 'repository';
import {
  getIssueComments,
  postIssueComment,
  getIssueFromUrl,
  deleteIssueComment,
  getIssueEvents,
} from '../issue.action';

const getRepoAndIssueFromUrl = url => {
  const re = /https:\/\/api.github.com\/repos\/(.*)\/issues\/(\d+)$/;
  const matches = re.exec(url);

  return { repoId: matches[1], issueNumber: matches[2] };
};
/*
const mapStateToProps = state => ({
  locale: state.auth.locale,
  authUser: state.auth.user,
  repository: state.repository.repository,
  contributors: state.repository.contributors,
  issue: state.issue.issue,
  diff: state.issue.diff,
  pr: state.issue.pr,
  isMerged: state.issue.isMerged,
  comments: state.issue.comments,
  events: state.issue.events,
  isPendingDiff: state.issue.isPendingDiff,
  isPendingCheckMerge: state.issue.isPendingCheckMerge,
  isPendingComments: state.issue.isPendingComments,
  isPendingEvents: state.issue.isPendingEvents,
  isPostingComment: state.issue.isPostingComment,
  isPendingContributors: state.repository.isPendingContributors,
  isDeletingComment: state.issue.isDeletingComment,
});*/

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { issues, users, repos },
    pagination: { ISSUES_GET_COMMENTS, ISSUES_GET_EVENTS, REPOS_GET_LABELS },
  } = state;

  const { repoId, issueNumber } = getRepoAndIssueFromUrl(
    ownProps.navigation.state.params.issue.url
  );

  const repository = repos[repoId];

  const issueFQN = `${repoId}-${issueNumber}`;
  const issue = issues[issueFQN] || ownProps.navigation.state.params.issue;

  return {
    issue,
    repoId,
    repository,
    issueNumber,
  };
};

const mapDispatchToProps = {
  getIssue: RestClient.graphql.getIssue,
};

/*
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIssueComments,
      getRepository,
      getContributors,
      postIssueComment,
      getIssueFromUrl,
      deleteIssueComment,
      getIssueEvents,
    },
    dispatch
  );*/

const compareCreatedAt = (a, b) => {
  if (a.created_at < b.created_at) {
    return -1;
  } else if (a.created_at > b.created_at) {
    return 1;
  }

  return 0;
};

class Issue extends Component {
  static navigationOptions = ({ navigation }) => {
    const getHeaderIcon = () => {
      const { state, navigate } = navigation;

      if (state.params.userHasPushPermission) {
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
    getIssueComments: Function,
    getRepository: Function,
    getContributors: Function,
    postIssueComment: Function,
    getIssueFromUrl: Function,
    getIssueEvents: Function,
    deleteIssueComment: Function,
    diff: string,
    issue: Object,
    pr: Object,
    isMerged: boolean,
    authUser: Object,
    repository: Object,
    contributors: Array,
    comments: Array,
    events: Array,
    isPendingIssue: boolean,
    isPendingDiff: boolean,
    isPendingCheckMerge: boolean,
    isPendingComments: boolean,
    isPendingEvents: boolean,
    isDeletingComment: boolean,
    isPendingContributors: boolean,
    // isPostingComment: boolean,
    locale: string,
    navigation: Object,
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
      navigation.navigate('Issue', {
        issueURL: node.attribs.href
          .replace('https://github.com', `${v3.root}/repos`)
          .replace(/pull\/([0-9]+)$/, 'issues/$1'),
      });
    } else {
      Linking.openURL(node.attribs.href);
    }
  };

  onRepositoryPress = repoId => {
    const { navigation } = this.props;

    navigation.navigate('Repository', {
      repoId,
    });
  };

  getIssueInformation = () => {
    const {
      repoId,
      issueNumber,
      navigation,
      repository,
      getIssueComments,
      getRepository,
      getContributors,
      getIssueFromUrl,
      getIssueEvents,
      getIssue,
    } = this.props;

    const params = navigation.state.params;
    const issueURL = params.issueURL || params.issue.url;

    getIssue(repoId, issueNumber);

    return Promise.resolve(true);

    Promise.all([
      getIssueFromUrl(issueURL),
      getIssueComments(`${issueURL}/comments`),
    ])
      .then(() => {
        const issue = this.props.issue;

        if (repository.full_name !== issueRepository) {
          return Promise.all([
            getRepository(issue.repository_url),
            getContributors(this.getContributorsLink(issue.repository_url)),
          ]);
        }

        return [];
      })
      .then(() => {
        const { issue, repository } = this.props;

        this.setNavigationParams();

        return getIssueEvents(
          repository.owner.login,
          repository.name,
          issue.number
        );
      });
  };

  getContributorsLink = repository => `${repository}/contributors`;

  setNavigationParams = () => {
    const { navigation, locale, repository } = this.props;

    navigation.setParams({
      locale,
      userHasPushPermission:
        repository.permissions.admin || repository.permissions.push,
    });
  };

  showActionSheet = () => this.ActionSheet.show();

  handleActionSheetPress = index => {
    if (index === 0) {
      openURLInView(this.props.issue.html_url);
    }
  };

  postComment = body => {
    const { issue, repository } = this.props;

    const repoName = repository.name;
    const owner = repository.owner.login;
    const issueNum = issue.number;

    this.props.postIssueComment(body, owner, repoName, issueNum).then(() => {
      this.commentsList.scrollToEnd();
    });
    Keyboard.dismiss();
  };

  deleteComment = comment => {
    const { repository } = this.props;
    const repoName = repository.name;
    const owner = repository.owner.login;

    this.props.deleteIssueComment(comment.id, owner, repoName);
  };

  editComment = comment => {
    const { state, navigate } = this.props.navigation;
    const { repository } = this.props;

    navigate('EditIssueComment', {
      title: t('Edit Comment', state.params.locale),
      comment,
      repository,
    });
  };

  keyExtractor = (item, index) => {
    return index;
  };

  renderHeader = () => {
    const {
      issue,
      pr,
      diff,
      isMerged,
      isPendingDiff,
      isPendingCheckMerge,
      locale,
      navigation,
    } = this.props;

    return (
      <IssueDescription
        issue={issue}
        diff={diff}
        isMergeable={pr.mergeable}
        isMerged={isMerged}
        isPendingDiff={isPendingDiff}
        isPendingCheckMerge={isPendingCheckMerge}
        onRepositoryPress={url => this.onRepositoryPress(url)}
        onLinkPress={node => this.onLinkPress(node)}
        userHasPushPermission={navigation.state.params.userHasPushPermission}
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
    const { issue, locale, navigation, repoId } = this.props;

    const isLoading = !issue;

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
          <FlatList
            ref={ref => {
              this.commentsList = ref;
            }}
            refreshing={isLoading}
            onRefresh={this.getIssueInformation}
            contentContainerStyle={{ flexGrow: 1 }}
            removeClippedSubviews={false}
            data={[
              <IssueDescription
                issue={issue}
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
                onEditPress={this.editComment}
                locale={locale}
                navigation={navigation}
              />,
              ...(issue && issue.timeline
                ? formatEventsToRender(issue.timeline.nodes)
                : []),
            ]}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </KeyboardAvoidingView>
      </ViewContainer>
    );
  }

  oldrender() {
    const {
      issue,
      comments,
      contributors,
      isPendingComments,
      isPendingEvents,
      isPendingContributors,
      isPendingIssue,
      isDeletingComment,
      locale,
      navigation,
    } = this.props;

    console.log(this.props);

    const a = true;
    return (
      <ViewContainer>
        {a && <LoadingContainer animating={a} center />}
      </ViewContainer>
    );

    const isLoadingData = !!(
      isPendingComments ||
      isPendingIssue ||
      isDeletingComment
    );
    const isShowLoadingContainer =
      isPendingComments || isPendingIssue || isPendingEvents;
    const header = { header: true, created_at: '' };
    const events = formatEventsToRender([...this.props.events]);
    const conversation = !isPendingComments
      ? [header, issue, ...comments, ...events].sort(compareCreatedAt)
      : [header];

    const participantNames = !isPendingComments
      ? conversation.map(item => item && item.user && item.user.login)
      : [];
    const contributorNames = !isPendingContributors
      ? contributors.map(item => item && item.login)
      : [];
    const fullUsers = [
      ...new Set([...participantNames, ...contributorNames]),
    ].filter(item => !!item);

    const issuesActions = [t('Open in Browser', locale)];

    return (
      <ViewContainer>
        {isShowLoadingContainer && (
          <LoadingContainer animating={isShowLoadingContainer} center />
        )}

        {!isPendingComments &&
          !isPendingIssue &&
          issue && (
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={'padding'}
              keyboardVerticalOffset={Platform.select({
                ios: 65,
                android: -200,
              })}
            >
              <FlatList
                ref={ref => {
                  this.commentsList = ref;
                }}
                refreshing={isLoadingData}
                onRefresh={this.getIssueInformation}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={false}
                data={conversation}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
              />

              <CommentInput
                users={fullUsers}
                userHasPushPermission={
                  navigation.state.params.userHasPushPermission
                }
                issueLocked={issue.locked}
                locale={locale}
                onSubmit={this.postComment}
              />
            </KeyboardAvoidingView>
          )}

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
