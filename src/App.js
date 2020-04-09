import './style/style.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/about/About';
import LandingPage from './components/landingPage/LandingPage';
import PageNotFound from './components/PageNotFound';
import React from 'react';
import Restaurants from './components/restaurants/Restaurants';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/menu" component={Restaurants} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
