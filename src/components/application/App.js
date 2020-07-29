/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from '../common/NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import fetchMicroApp from "../microApps/fetchMicroApp";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/order-status" activeStyle={activeStyle}>
            Trade Orders
          </NavLink>
          {' | '}
          <NavLink to="/order-status" activeStyle={activeStyle}>
            Executed Trades
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/order-status" component={() => fetchMicroApp('@datacenter-central/place-order')} />
          <Route exact path="/order-status" component={() => fetchMicroApp('@datacenter-central/order-status')} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
