import { combineReducers } from 'redux';
import { union } from 'lodash';

import * as Actions from '../actions';

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
const paginate = types => {
  if (typeof types !== 'object' || Object.keys(types).length !== 7) {
    throw new Error('Expected types to be an object of 7 props.');
  }

  const updatePagination = (
    state = {
      isFetching: false,
      nextPageUrl: undefined,
      pageCount: 0,
      ids: [],
    },
    action
  ) => {
    switch (action.type) {
      case types.PENDING:
        return {
          ...state,
          isFetching: true,
        };
      case types.RESET:
        return {
          isFetching: false,
          pageCount: 0,
          ids: [],
        };
      case types.APPEND:
        return {
          ...state,
          ids: union(state.ids, action.pagination.ids),
        };
      case types.REMOVE:
        return {
          ...state,
          ids: state.ids.filter(id => id !== action.pagination.entityId),
        };
      case types.SUCCESS:
        return {
          ...state,
          pageInfo: action.pagination.pageInfo,
          isFetching: false,
          ids: union(state.ids, action.pagination.edges),
          pageCount: state.pageCount + 1,
        };
      case types.ERROR:
        return {
          ...state,
          isFetching: false,
        };
      default:
        return state;
    }
  };

  /* eslint-disable no-case-declarations */
  return (state = {}, action) => {
    // Update pagination by key
    switch (action.type) {
      case types.PENDING:
      case types.RESET:
      case types.APPEND:
      case types.REMOVE:
      case types.SUCCESS:
      case types.ERROR:
        const key = action.id;

        console.log('GQL_PAGINATE', action, key);
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.');
        }

        return {
          ...state,
          [key]: updatePagination(state[key], action),
        };
      default:
        return state;
    }
  };
};

// Updates the pagination data for different actions.
export const gqlPagination = combineReducers({
  GRAPHQL_ISSUES_TIMELINE_PAGINATION: paginate(
    Actions.GRAPHQL_ISSUES_TIMELINE_PAGINATION
  ),
  GRAPHQL_ISSUES_LABELS_PAGINATION: paginate(
    Actions.GRAPHQL_ISSUES_LABELS_PAGINATION
  ),
  GRAPHQL_GQLREPOS_ASSIGNABLEUSERS_PAGINATION: paginate(
    Actions.GRAPHQL_GQLREPOS_ASSIGNABLEUSERS_PAGINATION
  ),
  GRAPHQL_GQLREPOS_LABELS_PAGINATION: paginate(
    Actions.GRAPHQL_GQLREPOS_LABELS_PAGINATION
  ),
});
