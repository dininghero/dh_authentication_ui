import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';
import Router from './components/Router';

// const store = createStore(
//   rootReducer,
// );

const store = compose(window.devToolsExtension ? (
  window.__REDUX_DEVTOOLS_EXTENSION__()) : f => f)(createStore)(rootReducer);

const MOUNT_NODE = document.getElementById('app');

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  MOUNT_NODE,
);

// TODO
// email validation
// handle fetch post
// reactMemo prevent rerender for some components
