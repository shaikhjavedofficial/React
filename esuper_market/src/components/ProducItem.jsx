import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Products.css";
export const ProducItem = ({ data, remove }) => {
  const dispatch = useDispatch();
  return (
    <Card claasName="card">
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: [{ data }],
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
                data: [{ remove }],
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
