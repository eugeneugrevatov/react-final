import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import createStore from './store';
import HouseList from './components/house-list/house-list';

const store = createStore();

render(
  <Provider store={store}>
    <HouseList/>
  </Provider>,
  document.getElementById('app'));
