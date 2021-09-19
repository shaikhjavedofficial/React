import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../NavBar";
import "../Css/NavBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Recipe } from "../Recipe";
export const Landing = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route>
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
