import { put, takeLatest, all, call } from 'redux-saga/effects';
import getEvents from '../utils/getEvents';

function* fetchEvents() {
  try {
    const response = yield call(getEvents);
    yield put({ type: 'EVENTS_RECEIVED', payload: response.data });
  } catch (error) {
    yield put({ type: 'EVENTS_ERROR', error });
  }
}

function* actionWatcher() {
  yield takeLatest('GET_EVENTS', fetchEvents);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
