import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ParentData } from "./PracData";
export const PracChild = ({ Name }) => {
  return (
    <div>
      <Card>
        <Card.Body>Name;{Name}</Card.Body>
      </Card>
    </div>
  );
};
