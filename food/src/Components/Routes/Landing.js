import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../NavBar.js";
import "../Css/NavBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Home.js";
import { AddRecipe } from "../AddRecipe";
export const Landing = () => {
  // const [RecipesL, setRecipesL] = useState(RecipeData.data);
  // const handleAdd = (datan) => {
  //   setRecipesL(RecipeData.data.concat(datan[0]));
  // };
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/recipe">
            <AddRecipe />
          </Route>
          <Route> </Route>
        </Switch>
      </Router>
    </div>
  );
};
