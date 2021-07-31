import React from "react";
import { Emp } from "./Emp";
import { EmpData } from "./EmpData";

export const EmpParent = () => {
  return (
    <div>
      {EmpData.Data.map((elem) => (
        <Emp
          Name={elem.Name}
          IMG={elem.IMG}
          Address={elem.Address}
          Dept={elem.Dept}
        />
      ))}
    </div>
  );
};
