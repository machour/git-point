import { eventSchema } from './events';
import { repoSchema } from './repos';
import { orgSchema } from './orgs';
import { issueSchema, issueEventSchema, issueCommentSchema } from './issues';
import { userSchema } from './users';

export default {
  EVENT: eventSchema,
  EVENT_ARRAY: [eventSchema],
  REPO: repoSchema,
  REPO_ARRAY: [repoSchema],
  USER: userSchema,
  USER_ARRAY: [userSchema],
  ORG: orgSchema,
  ORG_ARRAY: [orgSchema],
  ISSUE: issueSchema,
  ISSUE_ARRAY: [issueSchema],
  ISSUE_EVENT: issueEventSchema,
  ISSUE_EVENT_ARRAY: [issueEventSchema],
  ISSUE_COMMENT: issueCommentSchema,
  ISSUE_COMMENT_ARRAY: [issueCommentSchema],
};
