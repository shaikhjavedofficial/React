import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ProducItem } from "./ProducItem";
export const ProductList = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <ProducItem />
        </Col>
        <Col>
          <ProducItem />
        </Col>
        <Col>
          <ProducItem />
        </Col>
      </Row>
    </React.Fragment>
  );
};
