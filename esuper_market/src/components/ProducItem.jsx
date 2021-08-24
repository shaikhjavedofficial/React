import React from "react";
import { Card, Button, Row, Col, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Products.css";
export const ProducItem = ({ data, remove, item }) => {
  const dispatch = useDispatch();
  return (
    <Row>
      <Card claasName="card2">
        <Row>
          <Col>
            <Row>
              <Card.Title>{item.title}</Card.Title>
            </Row>
            <Row>
              <Image src={item.image} height="300px" width="300px" />
            </Row>
            <Row></Row>
            <Row>
              <Form.Label>{item.price}</Form.Label>
            </Row>
          </Col>
        </Row>
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
          <Row>
            <Button href="/ProductDetails">Details</Button>
          </Row>
        </Row>
      </Card>
    </Row>
  );
};
