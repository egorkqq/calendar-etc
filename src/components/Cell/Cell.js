import React from 'react';
import Event from '../Event';

const Cell = ({ minute, isInfo }) => {
  return (
    <div className="schedule__cell">
      <div className="schedule__cell-field">{isInfo && minute.format('h:mma')}</div>
      <div className="schedule__cell-separator"></div>
      <div className="schedule__cell-field">
        {minute.format('h:mm') === '8:30' && !isInfo && <Event />}
      </div>
    </div>
  );
};

export default Cell;
