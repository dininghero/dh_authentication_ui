import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';
import Router from './Router';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const MOUNT_NODE = document.getElementById('app');

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  MOUNT_NODE,
);
