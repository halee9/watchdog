import React, { Component } from 'react';
import TenantContainer from './containers/TenantContainer';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={TenantContainer} />
      <Route path="cluster" component={TenantContainer} />
    </Route>
  </Router>
)

export default App;
