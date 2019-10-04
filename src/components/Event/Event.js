import React from 'react';
import moment from 'moment';
import colors from '../../utils/colors';

const Event = ({ event, withContent }) => {
  const eventStyle = {
    backgroundColor: colors[event.type]
  };

  const eventDates = `${moment(event.start).format('H:mm')} — ${moment(event.end).format('H:mm')}`;
  const maxLength = (moment(event.end).format('x') - moment(event.start).format('x')) / 100000;

  return (
    <div title={event.comment} style={eventStyle} className="event">
      {withContent && (
        <div className="event__content">
          {event.comment && (
            <div className="event__comment">{event.comment.slice(0, maxLength)}</div>
          )}
          <div className="event__time">{eventDates}</div>
        </div>
      )}
    </div>
  );
};

export default Event;
