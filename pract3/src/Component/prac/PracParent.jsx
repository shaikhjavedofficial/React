import React, { useState } from "react";
import { PracChild } from "./PracChild";
import { PracData } from "./PracData";
export const PracParent = () => {
  return (
    <div>
      {PracData.Data.map((item) => (
        <PracChild Name={item.Name} />
      ))}
    </div>
  );
};
