import React from "react";
import { Card, Button, Row, Col, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
export const ProducItem = ({ data, remove, item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="card2">
      <Row>
        <Card.Title style={{ fontSize: "20px" }}>{item.title}</Card.Title>
      </Row>
      <Row>
        <Image className="image" src={item.image} />
      </Row>
      <Row>
        <Form.Label style={{ fontSize: "15px" }}>{item.price}</Form.Label>
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
      </Row>
      <Row>
        <Button href="/ProductDetails">Details</Button>
      </Row>
    </Card>
  );
};
