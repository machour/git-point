export const issueQuery = `
query ($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
    assignableUsers(first: 50) {
      nodes {
        login
        avatarUrl
      }
    }
    labels(first: 50) {
      nodes {
        name
      }
    }
    issue(number: $number) {
      number
      state
      locked
      createdAt
      closedAt
      title
      bodyHTML
      labels(first: 50) {
        nodes {
          color
          name
        }
      }
      author {
        login
        avatarUrl
      }
      timeline(first: 50) {
        nodes {
          __typename
          ... on IssueComment {
            bodyHTML
            createdAt
            author {
              login
              avatarUrl
            }
            reactionGroups {
              content
              users {
                totalCount
              }
            }
          }
          ... on CrossReferencedEvent {
            createdAt
            actor {
              login
            }
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
            createdAt
            actor {
              login
            }
            closer {
              __typename
              ... on Commit {
                abbreviatedOid
              }
            }
          }
          ... on ReopenedEvent {
            createdAt
            actor {
              login
            }
          }
          ... on SubscribedEvent {
            createdAt
            actor {
              login
            }
          }
          ... on UnsubscribedEvent {
            createdAt
            actor {
              login
            }
          }
          ... on ReferencedEvent {
            createdAt
            actor {
              login
            }
            commitRepository {
              nameWithOwner
            }
            commit {
              abbreviatedOid
            }
          }
          ... on AssignedEvent {
            createdAt
            actor {
              login
            }
            assignee: user {
              login
            }
          }
          ... on UnassignedEvent {
            createdAt
            actor {
              login
            }
            assignee: user {
              login
            }
          }
          ... on LabeledEvent {
            createdAt
            actor {
              login
            }
            label {
              name
              color
            }
          }
          ... on UnlabeledEvent {
            createdAt
            actor {
              login
            }
            label {
              name
              color
            }
          }
          ... on MilestonedEvent {
            createdAt
            actor {
              login
            }
            milestoneTitle
          }
          ... on DemilestonedEvent {
            createdAt
            actor {
              login
            }
            milestoneTitle
          }
          ... on RenamedTitleEvent {
            createdAt
            actor {
              login
            }
            previousTitle
            currentTitle
            subject {
              __typename
            }
          }
          ... on LockedEvent {
            createdAt
            lockReason
            actor {
              login
            }
          }
          ... on UnlockedEvent {
            createdAt
            actor {
              login
            }
          }
        }
      }
    }
  }
}

`;
