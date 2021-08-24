import React from "react";
import { Col, Row, Card } from "react-bootstrap";

export const ProductDetails = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>image</Col>
          <Col md={8}>desc</Col>
        </Row>
      </Card>
    </div>
  );
};
