import { schema } from 'normalizr';
import { issueSchema } from './issue';
import { repoSchema } from './repos';

export const eventSchema = new schema.Entity(
  'events',
  {
    repo: repoSchema,
    payload: {
      forkee: repoSchema,
      issue: issueSchema,
    },
  },
  {
    idAttribute: event => event.id,
  }
);
