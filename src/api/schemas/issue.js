import { schema } from 'normalizr';

const getRepoAndIssueFromUrl = url => {
  const re = /https:\/\/api.github.com\/repos\/(.*)\/issues\/(\d+)$/;
  const matches = re.exec(url);

  return { repoId: matches[1], issueNumber: matches[2] };
};

/*

url:https://api.github.com/repos/machour2/test/issues/11
repository_url:https://api.github.com/repos/machour2/test
labels_url:https://api.github.com/repos/machour2/test/issues/11/labels{/name}
comments_url:https://api.github.com/repos/machour2/test/issues/11/comments
events_url:https://api.github.com/repos/machour2/test/issues/11/events
html_url:https://github.com/machour2/test/issues/11
id:318484968
number:11
title:here
▶user:{}
labels:[] 0 items
state:open
locked:false
assignee:null
assignees:[] 0 items
milestone:null
comments:2
created_at:2018-04-27T17:13:09Z
updated_at:2018-04-27T20:20:49Z
closed_at:null
author_association:OWNER
body_html:<p>aaaaaaadazdcvvdddddd</p>
body_text:aaaaaaadazdcvvdddddd
body:aaaaaaadazdcvvdddddd
closed_by:null
node_id:MDU6SXNzdWUzMTg0ODQ5Njg=

*/

export const issueSchema = new schema.Entity(
  'issues',
  {},
  {
    idAttribute: issue => {
      const { repoId, issueNumber } = getRepoAndIssueFromUrl(issue.url);

      return `${repoId.toLowerCase()}-${issueNumber}`;
    },
    processStrategy: issue => ({
      number: issue.number,
      state: issue.state,
      locked: issue.locked,
      createdAt: issue.created_at,
      closedAt: issue.closedAt,
      title: issue.title,
      body: issue.body,
      bodyHTML: issue.body_html,
      author: {
        login: issue.user.login,
        avatarUrl: issue.user.avatar_url,
      },
      authorAssociation: issue.author_association,
      webUrl: issue.html_url,
      comments: {
        totalCount: issue.comments,
      },
    }),
  }
);
