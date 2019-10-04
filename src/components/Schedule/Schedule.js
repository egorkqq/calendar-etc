import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import getFirstHour from '../../utils/getFirstHour';
import generateWeek from '../../utils/generateWeek';
import Cell from '../Cell';

const Schedule = ({ data }) => {
  const renderCells = (day, type) => {
    const cells = [];
    const firstHour = getFirstHour(data);
    for (let i = 0; i < 48; i += 1) {
      cells.push(
        day
          .clone()

          .set('minute', 0)
          .set('hour', firstHour)
          .add(30 * i, 'minutes')
      );
    }

    if (type === 'info') {
      return cells.map(cell => <Cell key={cell.format('x')} isInfo minute={cell} />);
    }
    return cells.map(cell => {
      let event = false;
      data.forEach(el => {
        if (cell.isSame(el.start, 'day')) event = el;
      });

      return <Cell key={cell.format('x')} event={event} minute={cell} />;
    });
  };
  const renderColumn = ({ day }, idx) => {
    if (idx === 0) {
      return (
        <div key={idx} className="schedule__column">
          <div className="schedule__column-day-name"> </div>
          <div className="schedule__column-all-day">all-day</div>
          {renderCells(day, 'info')}
        </div>
      );
    }

    return (
      <div key={idx} className="schedule__column">
        <div className="schedule__column-day-name">{day.format('ddd M/D')}</div>
        <div className="schedule__column-all-day" />
        {renderCells(day, 'simple')}
      </div>
    );
  };

  const days = [{ day: moment() }, ...generateWeek(data)];

  return <div className="schedule__container">{days.map(renderColumn)}</div>;
};

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps)(Schedule);
