import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProducItem } from "./ProducItem";
export const ProductList = () => {
  const productSelector = useSelector((state) => state.ProductReducer.product);
  const [localData, setLocalData] = useState(...productSelector);
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
