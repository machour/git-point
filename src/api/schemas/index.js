import { eventSchema } from './events';
import { repoSchema } from './repos';
import { orgSchema } from './orgs';
import { userSchema } from './users';
import { gqlRepoSchema } from './gql-repos';
import { gqlIssueSchema } from './gql-issues';
import { issueCommentSchema } from './issue-comments';
import { issueSchema } from './issue';
import { gqlRepoWithIssueSchema } from './gql-repo-with-issue';

export default {
  EVENT: eventSchema,
  EVENT_ARRAY: [eventSchema],
  REPO: repoSchema,
  REPO_ARRAY: [repoSchema],
  USER: userSchema,
  USER_ARRAY: [userSchema],
  ORG: orgSchema,
  ORG_ARRAY: [orgSchema],
  GQL_REPO: gqlRepoSchema,
  GQL_ISSUE: gqlIssueSchema,
  GQL_REPO_WITH_ISSUE: gqlRepoWithIssueSchema,
  ISSUE_COMMENT: issueCommentSchema,
  ISSUE: issueSchema,
  ISSUE_ARRAY: [issueSchema],
};
