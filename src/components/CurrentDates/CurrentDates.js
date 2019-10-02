import React from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import generateWeek from '../../utils/generateWeek';

const CurrentDates = ({ data }) => {
  return (
    <Header textAlign="center" size="huge" color="black">
      {generateWeek(data)}
    </Header>
  );
};

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps)(CurrentDates);
