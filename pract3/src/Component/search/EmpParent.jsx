import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Navbar } from "react-bootstrap";
import { Emp } from "./Emp";
import { EmpData } from "./EmpData";

export const EmpParent = () => {
  const [EmpArray, setEmpArray] = useState(EmpData.Data);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const filterArray = EmpArray.filter(
      (item) =>
        item.FirstName.toLowerCase().includes(inputText.toLowerCase()) ||
        item.LastName.toLowerCase().includes(inputText.toLowerCase()) ||
        item.Dept.toLowerCase().includes(inputText.toLowerCase()) ||
        item.Address.toLowerCase().includes(inputText.toLowerCase())
    );
    if (inputText === "") setEmpArray(EmpData.Data);
    else setEmpArray(filterArray);
  }, [inputText]);
  console.log(EmpArray);
  return (
    <div className="ebody">
      <Navbar>
        <h1>Employee Details</h1>
        <Form.Control
          type="search"
          onChange={(e) => setInputText(e.target.value)}
        />
      </Navbar>

      {EmpArray.map((elem) => (
        <Emp
          FirstName={elem.FirstName}
          LastName={elem.LastName}
          IMG={elem.IMG}
          Address={elem.Address}
          Dept={elem.Dept}
        />
      ))}
    </div>
  );
};
