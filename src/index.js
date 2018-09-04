import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeList from './containers/AwesomeList';

import { createStore } from './redux';
import { Provider } from './react-redux';

import reducer from './reducers';
import { changeSearchTerm } from './actions';
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AwesomeList />
  </Provider>,
  document.getElementById('root')
);
