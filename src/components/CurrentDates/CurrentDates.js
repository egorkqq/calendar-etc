import React from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import generateWeekDates from '../../utils/generateWeekDates';

const CurrentDates = ({ data }) => {
  const weekString = generateWeekDates(data);
  return (
    <Header textAlign="center" size="huge" color="black" className="dates">
      {weekString}
    </Header>
  );
};

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps)(CurrentDates);
