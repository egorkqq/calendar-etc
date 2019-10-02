import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Container, Header } from 'semantic-ui-react';
import Calendar from '../Calendar';
import getEvents from '../../actions';

function App({ dispatch, loading, error }) {
  React.useEffect(() => {
    dispatch(getEvents());
  }, []);

  if (loading) {
    return (
      <Container>
        <Header color="black" size="large">
          Calendar
        </Header>
        <Dimmer inverted active>
          <Loader inverted size="massive">
            Loading
          </Loader>
        </Dimmer>
      </Container>
    );
  }
  if (error) {
    return <Container>Ошибка загрузки, попробойте снова</Container>;
  }

  return (
    <Container>
      <Header color="black" size="large">
        Calendar
      </Header>

      <Calendar />
    </Container>
  );
}

const mapStateToProps = state => ({ loading: state.loading, error: state.error });

export default React.memo(connect(mapStateToProps)(App));
