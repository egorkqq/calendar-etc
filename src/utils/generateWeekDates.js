import moment from 'moment';

export default data => {
  const { start } = data[0];

  const startOfWeek = moment(start)
    .clone()
    .startOf('week')
    .format('MMMM D — ');

  const endOfWeek = moment(start)
    .clone()
    .endOf('week')
    .format('D, YYYY');

  return startOfWeek + endOfWeek;
};
