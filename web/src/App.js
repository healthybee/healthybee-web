import React from 'react';
import './style/style.scss';
import { Route, Switch } from "react-router-dom";
import About from './components/about/About';
import Main from './components/main/Main';
import PageNotFound from "./components/PageNotFound";



export default function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
  );
}