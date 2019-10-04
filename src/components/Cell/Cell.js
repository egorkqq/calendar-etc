import React from 'react';
import Event from '../Event';

const Cell = ({ minute, isInfo, event }) => {
  return (
    <div className="schedule__cell">
      {isInfo && minute.get('minute') % 30 === 0 && minute.format('h:mma')}
      {event && (
        <Event
          withContent={
            minute.clone().isSame(event.start, 'minute') &&
            minute.clone().isSame(event.start, 'hour')
          }
          event={event}
        />
      )}
    </div>
  );
};

export default React.memo(Cell);
