import { schema } from 'normalizr';

export const gqlIssueSchema = new schema.Entity(
  'issues',
  {},
  {
    idAttribute: ({ repository, repository: { issue } }) => {
      return `${repository.nameWithOwner}-${issue.number}`;
    },
    processStrategy: ({ repository, repository: { issue } }) => ({
      ...issue,
      state: issue.state.toLowerCase(),
      webUrl: `https://github.com/${repository.nameWithOwner}/issues/${
        issue.number
      }`,
    }),
  }
);
