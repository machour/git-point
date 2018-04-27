import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';

export function formatEventsToRender(events = []) {
  return events
    .filter(
      ({ __typename }) =>
        __typename !== 'MentionedEvent' && __typename !== 'SubscribedEvent'
    )
    .filter(({ __typename }, index, list) => {
      if (index === 0) {
        return true;
      }

      // Merge events are always followed by a closed event, but we don't
      // want to render them.
      if (
        __typename === 'ClosedEvent' &&
        list[index - 1].__typename === 'MergedEvent'
      ) {
        return false;
      }

      return true;
    })
    .reduce((results, event, index, list) => {
      // Label events are recorded individually, but we want to group them for display
      const labelEvents = ['LabeledEvent', 'UnlabeledEvent'];
      const prevEvent = index > 0 ? list[index - 1] : {};

      if (
        index > 0 &&
        labelEvents.includes(event.__typename) &&
        labelEvents.includes(prevEvent.__typename) &&
        differenceInMilliseconds(event.createdAt, prevEvent.createdAt) <
          10000 &&
        event.actor.login === prevEvent.actor.login
      ) {
        const labelGroup = results[results.length - 1];

        if (event.__typename === 'LabeledEvent') {
          labelGroup.labeled.push(event);
        } else {
          labelGroup.unlabeled.push(event);
        }
      } else if (labelEvents.includes(event.__typename)) {
        const labelGroup = {
          __typename: 'LabelGroupEvent',
          labeled: [],
          unlabeled: [],
          createdAt: event.createdAt,
          actor: event.actor,
        };

        if (event.__typename === 'LabeledEvent') {
          labelGroup.labeled.push(event);
        } else {
          labelGroup.unlabeled.push(event);
        }

        results.push(labelGroup);
      } else {
        results.push(event);
      }

      return results;
    }, []);
}
