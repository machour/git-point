import Schemas from './schemas';

export class Client {
  API_ROOT = 'https://api.github.com/';

  /**
   * Enum for HTTP methods.
   *
   * @enum {string}
   */
  Method = {
    GET: 'GET',
    HEAD: 'HEAD',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    POST: 'POST',
  };

  Accept = {
    DIFF: 'application/vnd.github.v3.diff+json',
    FULL: 'application/vnd.github.v3.full+json',
    HTML: 'application/vnd.github.v3.html+json',
    JSON: 'application/vnd.github.v3+json',
    MERCY_PREVIEW: 'application/vnd.github.mercy-preview+json',
    RAW: 'application/vnd.github.v3.raw+json',
  };

  authHeaders = {};

  call = async (
    url,
    params = {},
    {
      method = this.Method.GET,
      body = {},
      headers = { Accept: this.Accept.JSON },
    } = {}
  ) => {
    let finalUrl;

    if (params.url) {
      // a different url was provided, use it instead (paginated)
      finalUrl = params.url;
    } else {
      finalUrl = url;
      // add explicitely specified parameters
      if (params.per_page) {
        finalUrl = `${finalUrl}${finalUrl.includes('?') ? '&' : '?'}per_page=${
          params.per_page
        }`;
      }
    }

    if (!finalUrl.includes(this.API_ROOT)) {
      finalUrl = `${this.API_ROOT}${finalUrl}`;
    }

    const parameters = {
      method,
      headers: {
        'Cache-Control': 'no-cache',
        ...this.authHeaders,
        ...headers,
      },
    };

    const withBody = [this.Method.PUT, this.Method.PATCH, this.Method.POST];

    if (withBody.indexOf(method) !== -1) {
      parameters.body = JSON.stringify({ body });
      if (method === this.Method.PUT) {
        parameters.headers['Content-Length'] = 0;
      }
    }

    return fetch(finalUrl, parameters)
      .then(response => response)
      .catch(error => error);
  };

  /* eslint-disable no-unused-vars */

  /**
   * Sets the authorization headers given an access token.
   *
   * @abstract
   * @param {string} token The oAuth access token
   */
  setAuthHeaders = token => {
    this.authHeaders = { Authorization: `token ${token}` };
  };

  /**
   * Counts the entities available by analysing the Response object
   *
   * @async
   * @param {Response} response
   */
  getCount = async response => {
    if (!response.ok) {
      return 0;
    }

    let linkHeader = response.headers.get('Link');

    if (linkHeader !== null) {
      linkHeader = linkHeader.match(/page=(\d)+/g).pop();

      return linkHeader.split('=').pop();
    }

    return response
      .json()
      .then(data => data.length)
      .catch(() => {
        // TODO: Properly handle the error and show it if needed.
        return 0;
      });
  };

  getNextPageUrl = response => {
    const { headers } = response;
    const link = headers.get('link');
    const nextLink = link
      ? link.split(',').find(s => s.indexOf('rel="next"') > -1)
      : null;

    if (!nextLink) {
      return null;
    }

    return nextLink
      .trim()
      .split(';')[0]
      .slice(1, -1);
  };

  /**
   * The activity endpoint
   */
  activity = {
    /**
     * Gets received events
     *
     * @param {string} userId
     */
    getEventsReceived: async (userId, params) => {
      return this.call(`users/${userId}/received_events`, params).then(
        response => ({
          response,
          nextPageUrl: this.getNextPageUrl(response),
          schema: Schemas.EVENT_ARRAY,
        })
      );
    },
    getStarredReposForUser: async (userId, params) => {
      return this.call(`users/${userId}/starred`, params).then(response => ({
        response,
        nextPageUrl: this.getNextPageUrl(response),
        schema: Schemas.REPO_ARRAY,
      }));
    },
  };

  orgs = {
    getById: async (orgId, params) => {
      return this.call(`orgs/${orgId}`, params).then(response => ({
        response,
        schema: Schemas.ORG,
      }));
    },
    getMembers: async (orgId, params) => {
      return this.call(`orgs/${orgId}/members`, params).then(response => ({
        response,
        nextPageUrl: this.getNextPageUrl(response),
        schema: Schemas.USER_ARRAY,
      }));
    },
  };

  issues = {
    get: async (repoId, number, params) => {
      return this.call(`repos/${repoId}/issues/${number}`, params, {
        headers: { Accept: this.Accept.HTML },
      }).then(response => ({
        response,
        schema: Schemas.ISSUE,
      }));
    },
    getComments: async (repoId, number, params) => {
      return this.call(`repos/${repoId}/issues/${number}/comments`, params, {
        headers: { Accept: this.Accept.HTML },
      }).then(response => ({
        response,
        nextPageUrl: this.getNextPageUrl(response),
        // schema: Schemas.ISSUE_COMMENT_ARRAY,
      }));
    },
    getEvents: async (repoId, number, params) => {
      return this.call(`repos/${repoId}/issues/${number}/events`, params).then(
        response => ({
          response,
          nextPageUrl: this.getNextPageUrl(response),
          //  schema: Schemas.ISSUE_EVENT_ARRAY,
        })
      );
    },
    createComment: async (repoId, number, body, params) => {
      return this.call(`repos/${repoId}/issues/${number}/comments`, params, {
        method: this.Method.POST,
        headers: { Accept: this.Accept.FULL },
        body,
      }).then(response => ({
        response,
        paginationParams: [repoId, number],
      }));
    },
    editComment: async (repoId, number, id, body, params) => {
      return this.call(`repos/${repoId}/issues/${number}/comments`, params, {
        method: this.Method.PATCH,
        headers: { Accept: this.Accept.FULL },
        body,
      }).then(response => ({
        response,
        paginationParams: [repoId, number],
        updatedId: id,
      }));
    },
    deleteComment: async (repoId, number, id, params) => {
      return this.call(`repos/${repoId}/issues/comments/${id}`, params, {
        method: this.Method.DELETE,
      }).then(response => ({
        response,
        paginationParams: [repoId, number],
        removedId: id,
      }));
    },
  };
}
