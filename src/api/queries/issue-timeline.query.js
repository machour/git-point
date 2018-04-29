import { issueTimelineEdges } from './issue.query';

export const issueTimelineQuery = `
query ($owner: String!, $name: String!, $number: Int!, $cursor: String!) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
    issue(number: $number) {
      number
      state
      timeline(first: 10, after: $cursor) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        ${issueTimelineEdges}
      }
    }
  }
}

`;
