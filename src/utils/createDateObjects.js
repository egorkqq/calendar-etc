import moment from 'moment';

export default function createWeekObjects(date) {
  const currentMonthDays = [];

  for (let i = 0; i < 7; i += 1) {
    currentMonthDays.push({
      day: moment(
        date
          .clone()
          .startOf('week')
          .add(i, 'days')
      )
    });
  }
  return [...currentMonthDays];
}
