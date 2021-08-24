import React from "react";
import { NavBars } from "./NavBars";
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
import { ProductDetails } from "./ProductDetail/ProductDetails";
export const Routers = ({ setstext, stext }) => {
  return (
    <div>
      <Router>
        <NavBars setstext={setstext} />
        <Switch>
          <div>
            <Route path="/Home">
              <Home2 />
            </Route>
            <Route path="/ProductList">
              <ProductList stext={stext} />
            </Route>
            <Route path="/Contact_us">
              <Contact_us />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/ProductDetails">
              <ProductDetails />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};
