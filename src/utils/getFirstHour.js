import moment from 'moment';

export default data => {
  let minimalHour = 8; // по макету взял 8

  data.forEach(event => {
    const { start } = event;
    const eventStartingHour = moment(start)
      .clone()
      .hour();
    if (minimalHour > eventStartingHour) minimalHour = eventStartingHour;
  });

  return minimalHour;
};
