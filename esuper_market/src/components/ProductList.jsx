import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ProducItem } from "./ProducItem";
export const ProductList = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <ProducItem data={"Product1"} remove={[]} />
        </Col>
        <Col>
          <ProducItem data={"Product2"} remove={[]} />
        </Col>
        <Col>
          <ProducItem />
        </Col>
      </Row>
    </React.Fragment>
  );
};
