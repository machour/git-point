import { schema } from 'normalizr';
import { omit } from 'lodash';

const labelSchema = new schema.Entity(
  'issues_labels',
  {},
  {
    idAttribute: (value, parent, key) => {
      console.log('idAttribute', value, parent, key);

      return `${parent.repoId}-${value.name}`;
    },
  }
);

const issueTimelineItemSchema = new schema.Entity(
  'issueTimelineItems',
  {},
  {
    idAttribute: edge => edge.node.id,
    processStrategy: ({ node }) => ({
      ...node,
    }),
  }
);

export const gqlIssueSchema = new schema.Entity(
  'issues',
  {
    timeline: {
      edges: [issueTimelineItemSchema],
    },
  },
  {
    idAttribute: (issue, repository) => {
      return `${repository.nameWithOwner}-${issue.number}`;
    },
    processStrategy: (issue, repository) => ({
      ...issue,

      state: issue.state.toLowerCase(),
      webUrl: `https://github.com/${repository.nameWithOwner}/issues/${
        issue.number
      }`,
    }),
  }
);
