import { schema } from 'normalizr';
import { gqlIssueSchema } from './gql-issues';

export const gqlRepoWithIssueSchema = new schema.Entity(
  'gqlRepos',
  {
    issue: gqlIssueSchema,
  },
  {
    idAttribute: ({ repository }) => {
      return `${repository.nameWithOwner.toLowerCase()}`;
    },
    processStrategy: ({ repository }) => ({
      ...repository,
      labels: {
        ...repository.labels,
        repoId: repository.nameWithOwner.toLowerCase(),
      },
      webUrl: `https://github.com/${repository.nameWithOwner}`,
    }),
  }
);
