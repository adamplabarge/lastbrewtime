import React from 'react';
import { Switch, Route, IndexRoute } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import StatsPage from './containers/StatsPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
      {/* <Route path={routes.STATS} component={StatsPage} /> */}
    </Switch>
  </App>
);
