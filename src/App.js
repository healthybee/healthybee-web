import './style/style.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/about/About';
import LandingPage from './components/landingPage/LandingPage';
import Menu from './components/menu/Menu';
import PageNotFound from './components/PageNotFound';
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
