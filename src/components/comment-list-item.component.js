// @flow
/* eslint-disable no-nested-ternary */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GithubHtmlView } from 'components';
import { Icon } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet';

import { t, relativeTimeToNow } from 'utils';
import { colors, fonts, normalize } from 'config';

const Container = styled.View`
  padding: 10px 10px 0 0;
  background-color: transparent;
`;

const Header = styled.View`
  flex-direction: row;
  margin-left: 10;
  align-items: center;
`;

const AvatarContainer = styled.TouchableOpacity`
  background-color: ${colors.greyLight};
  border-radius: 17;
  width: 34;
  height: 34;
`;

const Avatar = styled.Image`
  border-radius: 17;
  width: 34;
  height: 34;
`;

const TitleSubtitleContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin-left: 10;
`;

const DateContainer = styled.View`
  flex: 0.15;
  align-items: flex-end;
  justify-content: center;
`;

const Author = styled.Text`
  margin-left: 5;
  margin-right: 10;
`;

const AuthorAssociation = styled.Text`
  background-color: ${colors.greyVeryLight};
  color: ${colors.greyDark};
  ${fonts.fontPrimaryLight};
  padding-left: 5;
  padding-right: 5;
  min-width: 50;
  text-align: center;
  overflow: hidden;
  margin: 2px;
  font-size: ${normalize(10)};
`;

const LinkDescription = styled.Text`
  ${{ ...fonts.fontPrimaryBold }};
  font-size: ${normalize(13)};
  color: ${colors.primaryDark};
`;

const DateLabel = styled.Text`
  color: ${colors.greyDark};
`;

const CommentContainer = styled.View`
  padding-top: 5;
  margin-left: 54;
  border-bottom-color: ${colors.greyLight};
  border-bottom-width: 1;
  padding-bottom: ${props => (props.bottomPadding ? 15 : 0)};
`;

const CommentTextNone = styled.Text`
  ${{ ...fonts.fontPrimary }};
  color: ${colors.primaryDark};
  font-style: italic;
`;

const ActionButtonIconContainer = styled.View`
  padding: 5px 0 10px;
  align-items: flex-end;
  justify-content: center;
`;

const mapStateToProps = state => ({
  authUser: state.auth.user,
});

class CommentListItemComponent extends Component {
  props: {
    comment: Object,
    onLinkPress: Function,
    onEditPress: Function,
    onDeletePress: Function,
    locale: string,
    navigation: Object,
  };

  ActionSheet: ActionSheet;

  handlePress = (index: number) => {
    const { onDeletePress, onEditPress, comment } = this.props;

    if (index === 0) {
      onEditPress(comment);
    } else if (index === 1) {
      onDeletePress(comment);
    }
  };

  showMenu = () => {
    this.ActionSheet.show();
  };

  isIssueDescription = () =>
    Object.prototype.hasOwnProperty.call(this.props.comment, 'repository_url');

  commentActionSheetOptions = comment => {
    const { locale } = this.props;
    const actions = [];

    if (comment.viewerCanUpdate) {
      actions.push(t('Edit', locale));
    }

    if (comment.viewerCanDelete) {
      actions.push(t('Delete', locale));
    }

    return actions;
  };

  renderAuthorAssociation(association) {
    const { locale } = this.props;
    const labels = {
      COLLABORATOR: t('Collaborator', locale),
      CONTRIBUTOR: t('Contriburor', locale),
      FIRST_TIMER: t('First timer', locale),
      FIRST_TIME_CONTRIBUTOR: t('First time contributor', locale),
      MEMBER: t('Member', locale),
      OWNER: t('Owner', locale),
    };

    return labels[association] ? (
      <AuthorAssociation> {labels[association]} </AuthorAssociation>
    ) : null;
  }

  render() {
    const { comment, locale, navigation, onLinkPress } = this.props;

    const commentPresent = comment.bodyHTML && comment.bodyHTML !== '';
    const commentActions = this.commentActionSheetOptions(comment);
    const isActionMenuEnabled = commentActions.length > 0;

    return (
      <Container>
        <Header>
          {comment.author && (
            <AvatarContainer
              onPress={() =>
                navigation.navigate(
                  comment.viewerDidAuthor ? 'AuthProfile' : 'Profile',
                  {
                    user: comment.author,
                  }
                )
              }
            >
              <Avatar
                source={{
                  uri: comment.author.avatarUrl,
                }}
              />
            </AvatarContainer>
          )}

          {comment.author && (
            <TitleSubtitleContainer>
              <LinkDescription
                onPress={() =>
                  navigation.navigate(
                    comment.viewerDidAuthor ? 'AuthProfile' : 'Profile',
                    {
                      user: comment.author,
                    }
                  )
                }
              >
                <Author>{comment.author.login}</Author>{' '}
                {this.renderAuthorAssociation(comment.authorAssociation)}
              </LinkDescription>
            </TitleSubtitleContainer>
          )}

          <DateContainer>
            <DateLabel>{relativeTimeToNow(comment.createdAt)}</DateLabel>
          </DateContainer>
        </Header>

        <CommentContainer bottomPadding={isActionMenuEnabled}>
          {commentPresent ? (
            <GithubHtmlView
              source={comment.bodyHTML}
              onLinkPress={onLinkPress}
            />
          ) : (
            <CommentTextNone>
              {t('No description provided.', locale)}
            </CommentTextNone>
          )}

          {isActionMenuEnabled && (
            <ActionButtonIconContainer>
              <Icon
                color={colors.grey}
                size={20}
                name={'ellipsis-h'}
                type={'font-awesome'}
                onPress={this.showMenu}
              />
            </ActionButtonIconContainer>
          )}
        </CommentContainer>

        <ActionSheet
          ref={o => {
            this.ActionSheet = o;
          }}
          title={t('Comment Actions', locale)}
          options={[...commentActions, t('Cancel', locale)]}
          cancelButtonIndex={this.commentActionSheetOptions(comment).length}
          onPress={this.handlePress}
        />
      </Container>
    );
  }
}

export const CommentListItem = connect(mapStateToProps)(
  CommentListItemComponent
);
