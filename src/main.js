import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import createStore from './store';
import HouseList from './components/house-list/house-list';

const store = createStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/houses/:page' component={HouseList}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
