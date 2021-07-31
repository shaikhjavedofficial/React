import React from "react";
import { Form, Navbar } from "react-bootstrap";
import { Emp } from "./Emp";
import { EmpData } from "./EmpData";

export const EmpParent = () => {
  return (
    <div>
      <Navbar>
        <h1>Employee Details</h1>
        <Form.Control type="search" />
      </Navbar>
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
