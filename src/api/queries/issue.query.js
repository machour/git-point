const timelineEventCommonFields = `
id
createdAt
actor {
  login
  avatarUrl
}
`;

export const issueQuery = `
query ($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
    assignableUsers(first: 50) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          login
          avatarUrl
        }
      }
    }
    labels(first: 50) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          name
          color
        }
      }
    }
    issue(number: $number) {
      number
      state
      locked
      createdAt
      closedAt
      title
      body
      bodyHTML
      viewerCanUpdate
      labels(first: 50) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            color
            name
          }
        }
      }
      authorAssociation
      author {
        login
        avatarUrl
      }
      timeline(first: 10) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            __typename
            ... on IssueComment {
              id: databaseId
              createdAt
              viewerCanUpdate
              viewerCanDelete
              viewerDidAuthor
              authorAssociation
              author {
                login
                avatarUrl
              }
              body
              bodyHTML
              reactionGroups {
                content
                users {
                  totalCount
                }
              }
            }
            ... on CrossReferencedEvent {
              ${timelineEventCommonFields}
              isCrossRepository
              source {
                __typename
                ... on Issue {
                  title
                  number
                  state
                  repository {
                    nameWithOwner
                  }
                }
                ... on PullRequest {
                  title
                  number
                  state
                  repository {
                    nameWithOwner
                  }
                }
              }
            }
            ... on ClosedEvent {
              ${timelineEventCommonFields}
              closer {
                __typename
                ... on Commit {
                  abbreviatedOid
                }
              }
            }
            ... on ReopenedEvent {
              ${timelineEventCommonFields}
            }
            ... on SubscribedEvent {
              ${timelineEventCommonFields}
            }
            ... on UnsubscribedEvent {
              ${timelineEventCommonFields}
            }
            ... on ReferencedEvent {
              ${timelineEventCommonFields}
              commitRepository {
                nameWithOwner
              }
              commit {
                abbreviatedOid
              }
            }
            ... on AssignedEvent {
              ${timelineEventCommonFields}
              assignee: user {
                login
              }
            }
            ... on UnassignedEvent {
              ${timelineEventCommonFields}
              assignee: user {
                login
              }
            }
            ... on LabeledEvent {
              ${timelineEventCommonFields}
              label {
                name
                color
              }
            }
            ... on UnlabeledEvent {
              ${timelineEventCommonFields}
              label {
                name
                color
              }
            }
            ... on MilestonedEvent {
              ${timelineEventCommonFields}
              milestoneTitle
            }
            ... on DemilestonedEvent {
              ${timelineEventCommonFields}
              milestoneTitle
            }
            ... on RenamedTitleEvent {
              ${timelineEventCommonFields}
              previousTitle
              currentTitle
              subject {
                __typename
              }
            }
            ... on LockedEvent {
              ${timelineEventCommonFields}
              lockReason
            }
            ... on UnlockedEvent {
              ${timelineEventCommonFields}
            }
          }
        }
      }
    }
  }
}

`;
