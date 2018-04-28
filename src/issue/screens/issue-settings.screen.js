import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet';

import {
  ViewContainer,
  SectionList,
  UserListItem,
  LabelListItem,
} from 'components';
import { emojifyText, t, openURLInView } from 'utils';
import { colors, fonts } from 'config';
import { getLabels } from 'repository';
import { RestClient } from 'api';

const getRepoAndIssueFromUrl = url => {
  const re = /https:\/\/api.github.com\/repos\/(.*)\/issues\/(\d+)$/;
  const matches = re.exec(url);

  return { repoId: matches[1], issueNumber: matches[2] };
};
const mapStateToProps = (state, ownProps) => {
  const {
    entities: { issues, users, repos },
    gqlPagination: {
      GRAPHQL_ISSUES_LABELS_PAGINATION,
      GRAPHQL_GQLREPOS_LABELS_PAGINATION,
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

  console.log('issueFGQ', issueFQN);
  const issue = issues[issueFQN] || false;

  const repoLabelsPagination = GRAPHQL_GQLREPOS_LABELS_PAGINATION[repoId] || {
    isFetching: true,
    ids: [],
    pageInfo: {},
  };
  const repoLabels = repoLabelsPagination.ids.map(item => item.node);

  const labelsPagination = GRAPHQL_ISSUES_LABELS_PAGINATION[issueFQN] || {
    isFetching: true,
    ids: [],
    pageInfo: {},
  };
  const labels = labelsPagination.ids.map(item => item.node);

  if (issue && issue.viewerCanUpdate && !navigationParams.viewerCanUpdate) {
    ownProps.navigation.setParams({ viewerCanUpdate: true });
  }

  return {
    issue,
    labels,
    labelsPagination,
    repoLabels,
    repoLabelsPagination,
    repoId,
    repository,
    issueNumber,
  };
};

const mapDispatchToProps = {
  editIssue: RestClient.issues.edit,
  lockIssue: RestClient.issues.lock,
  unlockIssue: RestClient.issues.unlock,
};

const styles = StyleSheet.create({
  listItemTitle: {
    color: colors.black,
    ...fonts.fontPrimary,
  },
  closeActionTitle: {
    color: colors.red,
    ...fonts.fontPrimary,
  },
  openActionTitle: {
    color: colors.green,
    ...fonts.fontPrimary,
  },
});

class IssueSettings extends Component {
  props: {
    issueNumber: number,
    repoId: string,
    editIssue: Function,
    lockIssue: Function,
    unlockIssue: Function,
    locale: string,
    authUser: Object,
    repository: Object,
    labels: Array,
    issue: Object,
    repoLabels: Array,
    // isEditingIssue: boolean,
    isPendingLabels: boolean,
    navigation: Object,
  };

  componentDidMount() {
    /*this.props.getLabels(
      this.props.repository.labels_url.replace('{/name}', '')
    );*/
  }

  showChangeIssueStateActionSheet = () => {
    this.IssueActionSheet.show();
  };

  showLockIssueActionSheet = () => {
    this.LockIssueActionSheet.show();
  };

  showAddLabelActionSheet = () => {
    if (!this.props.isPendingLabels) {
      this.AddLabelActionSheet.show();
    }
  };

  handleIssueActionPress = index => {
    const { issue, navigation } = this.props;
    const newState = issue.state === 'open' ? 'close' : 'open';

    if (index === 0) {
      this.editIssue({ state: newState }).then(() => {
        navigation.goBack();
      });
    }
  };

  handleLockIssueActionPress = () => {
    const { issue, issueNumber, repoId } = this.props;

    if (issue.locked) {
      this.props.unlockIssue(repoId, issueNumber);
    } else {
      this.props.lockIssue(repoId, issueNumber);
    }
  };

  handleAddLabelActionPress = index => {
    const { issue, labels, repoLabels } = this.props;
    const labelChoices = [...repoLabels.map(label => label.name)];

    console.log('labelChoice', labelChoices, index, repoLabels, labels);

    if (
      index !== labelChoices.length &&
      !labels.some(label => label.name === labelChoices[index])
    ) {
      this.editIssue(
        {
          labels: [...labels.map(label => label.name), labelChoices[index]],
        },
        { labels: [...labels, repoLabels[index]] }
      );
    }
  };

  editIssue = (editParams, stateChangeParams) => {
    const { repoId, issueNumber } = this.props;

    const updateStateParams = stateChangeParams || editParams;

    return this.props.editIssue(
      repoId,
      issueNumber,
      editParams,
      updateStateParams
    );
  };

  openURLInBrowser = () => openURLInView(this.props.issue.webUrl);

  render() {
    const { issue, locale, labels, authUser, navigation } = this.props;
    const issueType = issue.pull_request
      ? t('Pull Request', locale)
      : t('Issue', locale);

    console.log('labels', labels);

    console.log('issue', issue);

    return (
      <ViewContainer>
        <ScrollView>
          <SectionList
            showButton
            buttonTitle={t('Apply Label', locale)}
            buttonAction={this.showAddLabelActionSheet}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.grey,
            }}
            noItems={labels.length === 0}
            noItemsMessage={t('None yet', locale)}
            title={t('LABELS', locale)}
          >
            {labels.map(item => (
              <LabelListItem
                label={item}
                key={item.id}
                removeLabel={labelToRemove =>
                  this.editIssue(
                    {
                      labels: [
                        ...labels
                          .map(label => label.name)
                          .filter(
                            labelName => labelName !== labelToRemove.name
                          ),
                      ],
                    },
                    {
                      labels: labels.filter(
                        label => label.name !== labelToRemove.name
                      ),
                    }
                  )
                }
              />
            ))}
          </SectionList>

          {/* <SectionList
            showButton={
              !issue.assignees.some(
                assignee => assignee.login === authUser.login
              )
            }
            buttonTitle={t('Assign Yourself', locale)}
            buttonAction={() =>
              this.editIssue(
                {
                  assignees: [
                    ...issue.assignees.map(user => user.login),
                    authUser.login,
                  ],
                },
                { assignees: [...issue.assignees, authUser] }
              )
            }
            noItems={issue.assignees.length === 0}
            noItemsMessage={t('None yet', locale)}
            title={t('ASSIGNEES', locale)}
          >
            {issue.assignees.map(item => (
              <UserListItem
                user={item}
                key={item.id}
                navigation={navigation}
                icon="x"
                iconAction={userToRemove =>
                  this.editIssue(
                    {
                      assignees: [
                        ...issue.assignees
                          .map(user => user.login)
                          .filter(user => user !== userToRemove),
                      ],
                    },
                    {
                      assignees: issue.assignees.filter(
                        assignee => assignee.login !== userToRemove
                      ),
                    }
                  )
                }
              />
            ))}
          </SectionList>
*/}
          <SectionList title={t('ACTIONS', locale)}>
            <ListItem
              title={
                issue.locked
                  ? t('Unlock {issueType}', locale, {
                      issueType,
                    })
                  : t('Lock {issueType}', locale, {
                      issueType,
                    })
              }
              hideChevron
              underlayColor={colors.greyLight}
              titleStyle={styles.listItemTitle}
              onPress={this.showLockIssueActionSheet}
            />

            <ListItem
              title={
                issue.state === 'open'
                  ? t('Close {issueType}', locale, {
                      issueType,
                    })
                  : t('Reopen {issueType}', locale, {
                      issueType,
                    })
              }
              hideChevron
              underlayColor={colors.greyLight}
              titleStyle={
                issue.state === 'open'
                  ? styles.closeActionTitle
                  : styles.openActionTitle
              }
              onPress={this.showChangeIssueStateActionSheet}
            />
          </SectionList>

          <SectionList>
            <ListItem
              title={t('Open in Browser', locale)}
              hideChevron
              underlayColor={colors.greyLight}
              titleStyle={styles.listItemTitle}
              onPress={this.openURLInBrowser}
            />
          </SectionList>
        </ScrollView>

        <ActionSheet
          ref={o => {
            this.IssueActionSheet = o;
          }}
          title={t('Are you sure?', locale)}
          options={[t('Yes', locale), t('Cancel', locale)]}
          cancelButtonIndex={1}
          onPress={this.handleIssueActionPress}
        />
        <ActionSheet
          ref={o => {
            this.LockIssueActionSheet = o;
          }}
          title={t('Are you sure?', locale)}
          options={[t('Yes', locale), t('Cancel', locale)]}
          cancelButtonIndex={1}
          onPress={this.handleLockIssueActionPress}
        />
        <ActionSheet
          ref={o => {
            this.AddLabelActionSheet = o;
          }}
          title={t('Apply a label to this issue', locale)}
          options={[
            ...this.props.repoLabels.map(label => emojifyText(label.name)),
            t('Cancel', locale),
          ]}
          cancelButtonIndex={this.props.repoLabels.length}
          onPress={this.handleAddLabelActionPress}
        />
      </ViewContainer>
    );
  }
}

export const IssueSettingsScreen = connect(mapStateToProps, mapDispatchToProps)(
  IssueSettings
);
