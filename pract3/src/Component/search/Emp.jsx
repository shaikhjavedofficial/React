import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Emp.css";
export const Emp = ({ items }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={items.IMG} />
      <Card.Body>
        <Card.Title>
          Name : {items.FirstName} {items.LastName}
        </Card.Title>
        <Card.Text>
          Address : {items.Address} <br />
          Department : {items.Dept}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
