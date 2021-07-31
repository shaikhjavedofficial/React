import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Emp.css";
export const Emp = ({ Name, IMG, Dept, Address }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={IMG} />
      <Card.Body>
        <Card.Title>Name : {Name}</Card.Title>
        <Card.Text>
          Address : {Address} <br />
          Department : {Dept}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
