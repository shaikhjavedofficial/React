import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Products.css";
export const ProducItem = () => {
  const dispatch = useDispatch();
  return (
    <Card claasName="card">
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap"],
              })
            }
          >
            +
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: [],
              })
            }
          >
            -
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
