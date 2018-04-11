import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import InfoDisplay from './routes/InfoDisplay';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={InfoDisplay} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
