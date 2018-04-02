import { schema } from 'normalizr';

export const issueSchema = new schema.Entity(
  'issues',
  {},
  {
    // id: repoFullName-issueNumber
    idAttribute: issue =>
      `${issue.repository_url.replace('https://api.github.com/repos/', '')}-${
        issue.number
      }`,
  }
);

export const issueCommentSchema = new schema.Entity(
  'issue_comments',
  {},
  {
    // id: repoFullName-issueNumber
    idAttribute: issue =>
      `${issue.repository_url.replace('https://api.github.com/repos/', '')}-${
        issue.number
      }`,
  }
);

export const issueEventSchema = new schema.Entity(
  'issue_events',
  {},
  {
    // id: repoFullName-issueNumber
    idAttribute: issue =>
      `${issue.repository_url.replace('https://api.github.com/repos/', '')}-${
        issue.number
      }`,
  }
);
