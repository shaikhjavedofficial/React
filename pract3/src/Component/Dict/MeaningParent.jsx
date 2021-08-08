import React from "react";
import { MeaningChild } from "./MeaningChild";
export const MeaningParent = ({ m }) => {
  return (
    <div>
      <h2>Meaning List</h2>
      {m.meanings.map((elem) => (
        <MeaningChild finalitem={elem} />
      ))}
    </div>
  );
};
