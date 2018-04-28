import { schema } from 'normalizr';
import { issueSchema } from './issue';

export const eventSchema = new schema.Entity(
  'events',
  {
    payload: {
      issue: issueSchema,
    },
  },
  {
    idAttribute: event => event.id,
  }
);
