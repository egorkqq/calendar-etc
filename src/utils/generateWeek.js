import moment from 'moment';

export default data => {
  const { start } = data[0];
  const days = [];

  for (let i = 0; i < 7; i += 1) {
    days.push({
      day: moment(start)
        .clone()
        .startOf('week')
        .add(i, 'days')
    });
  }

  return days;
};
