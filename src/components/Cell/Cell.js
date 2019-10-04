import React from 'react';
import Event from '../Event';
import moment from 'moment';

const renderEvent = (minute, event) => {
  return (
    minute.isSame(event.start, 'minute') &&
    minute.isSame(event.start, 'hour') && <Event event={event} />
  );
};

const Cell = ({ minute, isInfo, event }) => {
  return (
    <div className="schedule__cell">
      <div className="schedule__cell-field">
        {isInfo && minute.format('h:mma')}
        {event && renderEvent(minute.clone(), event)}
      </div>
      <div className="schedule__cell-separator"></div>
      <div className="schedule__cell-field">
        {event && renderEvent(minute.clone().add(15, 'm'), event)}
      </div>
    </div>
  );
};

export default React.memo(Cell);
