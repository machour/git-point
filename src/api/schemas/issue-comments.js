import { schema } from 'normalizr';

export const issueCommentSchema = new schema.Entity(
  'issueTimelineItems',
  {},
  {
    idAttribute: comment => comment.id,
    processStrategy: comment => ({
      __typename: 'IssueComment',
      id: comment.id,
      createdAt: comment.created_at,
      bodyHTML: comment.body_html,
      body: comment.body,
      author: {
        login: comment.user.login,
        avatarUrl: comment.user.avatar_url,
      },
      reactionGroups: [],
    }),
  }
);
