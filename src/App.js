import React, { Component } from 'react';
import TenantContainer from './containers/TenantContainer';
import ClusterContainer from './containers/ClusterContainer';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={TenantContainer} />
      <Route path=":clusterName" component={ClusterContainer} />
    </Route>
  </Router>
)

export default App;
