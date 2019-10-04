import React from 'react';
import moment from 'moment';
import colors from '../../utils/colors';

const Event = ({ event }) => {
  const eventStyle = {
    height: ((moment(event.end).format('x') - moment(event.start).format('x')) / 900000) * 29, // по 30 минут
    backgroundColor: colors[event.type]
  };
  const eventDates = `${moment(event.start).format('H:mm')} — ${moment(event.end).format('H:mm')}`;

  return (
    <div title={event.comment} style={eventStyle} className="event">
      {event.comment && <div className="event__comment">{event.comment}</div>}
      <div className="event__time">{eventDates}</div>
    </div>
  );
};

export default Event;
