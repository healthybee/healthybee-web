import React from 'react';
import { render } from 'react-snapshot';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import indexRoutes from './routes';

import './assets/scss/material-kit-react.css?v=1.1.0';

var hist = createBrowserHistory();
render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
