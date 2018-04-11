import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import MainPage from './routes/MainPage';
import Add from './routes/Add';
import Update from './routes/Update';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/add" exact component={Add} />
        <Route path="/update" exact component={Update} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
