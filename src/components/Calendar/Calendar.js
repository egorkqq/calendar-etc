import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import CurrentDates from '../CurrentDates';
import Schedule from '../Schedule';
import Legend from '../Legend';

const Calendar = () => {
  return (
    <Segment>
      <Grid divided columns={2}>
        <Grid.Column width={12}>
          <CurrentDates />
          <Schedule />
        </Grid.Column>
        <Grid.Column width={4}>
          <Legend />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Calendar;
