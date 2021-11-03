import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AddRecipeData } from "./State/Selector";

export const Home = () => {
  const RecipeSelector = useSelector(AddRecipeData);
  const [listRecipe, setlistRecipe] = useState(RecipeSelector);
  // useEffect(() => {
  //   setlistRecipe(listRecipe);
  // }, []);
  return (
    <div>
      <h1> Recipies </h1>
      <tr>
        <th> Sr.No. </th>
        <th> Recipe Name </th>
        <th> Category </th>
      </tr>
      {listRecipe.map((item) => (
        <tr>
          <td> {item.Id} </td>
          <td> {item.Name} </td>
          <td> {item.Cat} </td>
        </tr>
      ))}
      <Button href="/recipe"> Add Recipe </Button>
    </div>
  );
};
