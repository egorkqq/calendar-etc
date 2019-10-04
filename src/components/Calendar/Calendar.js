import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import CurrentDates from '../CurrentDates';
import Schedule from '../Schedule';
import Legend from '../Legend';

const Calendar = () => {
  return (
    <Segment>
      <Grid divided columns={2}>
        <Grid.Column largeScreen={12} widescreen={12} tablet={16}>
          <CurrentDates />
          <div className="schedule__wrapper">
            <Schedule />
          </div>
        </Grid.Column>
        <Grid.Column largeScreen={4} widescreen={4} tablet={16}>
          <Legend />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Calendar;
