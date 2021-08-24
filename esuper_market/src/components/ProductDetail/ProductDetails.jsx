import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";

export const ProductDetails = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={2}>
            <Button href="/ProductList">Back</Button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>image</Col>
          <Col md={8}>desc</Col>
        </Row>
      </Card>
    </div>
  );
};
