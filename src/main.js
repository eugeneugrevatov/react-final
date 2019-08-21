import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import createStore from './store';
import HouseList from './components/house-list/house-list';
import Person from './components/person/person'

const store = createStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/houses/:page' component={HouseList}/>
        <Route exact path='/people/:id' component={Person}/>
        <Redirect to='/houses/1'/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
