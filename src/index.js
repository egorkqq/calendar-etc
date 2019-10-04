import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';

import App from './components/App';
import './index.sass';

const sagaMiddleware = createSagaMiddleware();

const logMiddleware = ({ getState }) => next => action => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development') console.log(action.type, getState());
  return next(action);
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('root')
);
