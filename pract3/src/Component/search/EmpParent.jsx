import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Navbar } from "react-bootstrap";
import { Emp } from "./Emp";
// import { EmpData } from "./EmpData";
import { useSelector } from "react-redux";
import { getEmpDetails } from "./State/Selector/EmpSelector";

export const EmpParent = () => {
  const selector = useSelector(getEmpDetails);
  const [empData, setEmpData] = useState(selector);
  
  // const [EmpArray, setEmpArray] = useState(EmpData.Data);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const filterArray = empData.filter(
      (item) =>
        item.FirstName.toLowerCase().includes(inputText.toLowerCase()) ||
        item.LastName.toLowerCase().includes(inputText.toLowerCase()) ||
        item.Dept.toLowerCase().includes(inputText.toLowerCase()) ||
        item.Address.toLowerCase().includes(inputText.toLowerCase())
    );
    if (inputText === "") setEmpData(empData);
    else setEmpData(filterArray);
  }, [inputText]);
  return (
    <div className="ebody">
      <Navbar>
        <h1>Employee Details</h1>
        <Form.Control
          type="search"
          onChange={(e) => setInputText(e.target.value)}
        />
      </Navbar>

      {empData.map((elem) => (
        <Emp items={elem} />
      ))}
    </div>
  );
};
