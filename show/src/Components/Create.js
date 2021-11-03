import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export const Create = () => {
  // const [dataAdd, setDataAdd] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleAdd = () => {
    axios
      .post(`http://6178cd45aa7f340017404552.mockapi.io/fakedata`, {
        FirstName: fname,
        LastName: lname,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Form className="create-form">
      <label>First Name</label>
      <input
        placeholder="First Name"
        onChange={(e) => setFname(e.target.value)}
      />
      <label>Last Name</label>
      <input
        placeholder="Last Name"
        onChange={(e) => setLname(e.target.value)}
      />
      <Button onClick={(e) => handleAdd()}>Submit</Button>
    </Form>
  );
};
