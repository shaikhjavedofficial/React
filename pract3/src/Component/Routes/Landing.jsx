import React from "react";
import { NavBar } from "../NavBar";
import { Home2 } from "./Home2";
import { About } from "./About";
import { Courses } from "./Courses";
import { Contact_Us } from "./Contact_Us";
import { Login } from "../Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const Landing = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <div>
            <Route path="/Home">
              <Home2 />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Courses">
              <Courses />
            </Route>
            <Route path="/Contact_Us">
              <Contact_Us />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};
