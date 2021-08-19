import React from "react";
import { NavBar } from "./NavBar";
import { Home2 } from "./Home2";
import { ProductList } from "./ProductList";
import { Contact_us } from "./Contact_us";
import { Login } from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
export const Routers = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <div>
            <Route path="/Home">
              <Home2 />
            </Route>
            <Route path="/ProductList">
              <ProductList />
            </Route>
            <Route path="/Contact_us">
              <Contact_us />
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
