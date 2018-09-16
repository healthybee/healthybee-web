import React from 'react';
import { hydrate, render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import indexRoutes from './routes';

import './assets/scss/material-kit-react.css?v=1.1.0';

var hist = createBrowserHistory();
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </Router>,
    rootElement
  );
} else {
  render(
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </Router>,
    rootElement
  );
}

registerServiceWorker();
