import {
  createActionSet,
  createPaginationActionSet,
  createPaginationItemActionSet,
} from 'utils';

export const ACTIVITY_GET_EVENTS_RECEIVED = createPaginationActionSet(
  'ACTIVITY_GET_EVENTS_RECEIVED'
);
export const ACTIVITY_GET_STARRED_REPOS_FOR_USER = createPaginationActionSet(
  'ACTIVITY_GET_STARRED_REPOS_FOR_USER'
);
export const ACTIVITY_STAR_REPO = createActionSet('ACTIVITY_STAR_REPO');
export const ACTIVITY_UNSTAR_REPO = createActionSet('ACTIVITY_UNSTAR_REPO');
export const ACTIVITY_WATCH_REPO = createActionSet('ACTIVITY_WATCH_REPO');
export const ACTIVITY_UNWATCH_REPO = createActionSet('ACTIVITY_UNWATCH_REPO');
export const SEARCH_REPOS = createPaginationActionSet('SEARCH_REPOS');
export const SEARCH_USERS = createPaginationActionSet('SEARCH_USERS');
export const ORGS_GET_MEMBERS = createPaginationActionSet('ORGS_GET_MEMBERS');
export const ORGS_GET_BY_ID = createActionSet('ORGS_GET_BY_ID');

export const GRAPHQL_GET_REPO = createActionSet('GRAPHQL_GET_REPO');
export const GRAPHQL_GET_ISSUE = createActionSet('GRAPHQL_GET_ISSUE');

export const GRAPHQL_ISSUES_TIMELINE_PAGINATION = createPaginationActionSet(
  'GRAPHQL_ISSUES_TIMELINE_PAGINATION'
);
export const GRAPHQL_ISSUES_LABELS_PAGINATION = createPaginationActionSet(
  'GRAPHQL_ISSUES_LABELS_PAGINATION'
);
export const GRAPHQL_GQLREPOS_ASSIGNABLEUSERS_PAGINATION = createPaginationActionSet(
  'GRAPHQL_GQLREPOS_ASSIGNABLEUSERS_PAGINATION'
);
export const GRAPHQL_GQLREPOS_LABELS_PAGINATION = createPaginationActionSet(
  'GRAPHQL_GQLREPOS_LABELS_PAGINATION'
);

export const REPOS_GET_CONTRIBUTORS = createPaginationActionSet(
  'REPOS_GET_CONTRIBUTORS'
);
export const REPOS_FORK = createActionSet('REPOS_FORK');

export const ISSUES_GET = createActionSet('ISSUES_GET');
export const ISSUES_GET_EVENTS = createPaginationActionSet('ISSUES_GET_EVENTS');
export const ISSUES_GET_COMMENTS = createPaginationActionSet(
  'ISSUES_GET_COMMENTS'
);

export const ISSUES_CREATE_COMMENT = createPaginationItemActionSet(
  'ISSUE_CREATE_COMMENT',
  GRAPHQL_ISSUES_TIMELINE_PAGINATION
);
export const ISSUES_DELETE_COMMENT = createPaginationItemActionSet(
  'ISSUE_DELETE_COMMENT',
  GRAPHQL_ISSUES_TIMELINE_PAGINATION
);
export const ISSUES_EDIT_COMMENT = createPaginationItemActionSet(
  'ISSUE_EDIT_COMMENT',
  GRAPHQL_ISSUES_TIMELINE_PAGINATION
);

export const ISSUES_EDIT = createActionSet('ISSUE_EDIT');
export const ISSUES_LOCK = createActionSet('ISSUE_LOCK');
export const ISSUES_UNLOCK = createActionSet('ISSUE_UNLOCK');
