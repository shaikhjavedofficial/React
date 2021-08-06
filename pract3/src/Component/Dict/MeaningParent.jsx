import React from "react";
import { MeaningChild } from "./MeaningChild";
export const MeaningParent = ({ item }) => {
  return (
    <div>
      <h2>Meaning List</h2>
      {item.meanings.map((elem) => {
        <MeaningChild elem={elem} />;
        console.log(elem);
      })}
    </div>
  );
};
