import "./style/style.scss";

import { Route, Switch } from "react-router-dom";

import About from "./components/about/About";
import LandingPage from "./components/landingPage/LandingPage";
import PageNotFound from "./components/PageNotFound";
import React from "react";
import Restaurants from "./components/restaurants/Restaurants";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/restaurants" component={Restaurants} />
      <Route exact path="/about" component={About} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
