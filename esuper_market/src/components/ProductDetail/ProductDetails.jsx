import React, { useState, useEffect } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
export const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myProducts = useSelector((state) => state.ProductReducer.product);
  const selectedId = useSelector((state) => state.ProductReducer.selectedid[0]);
  useEffect(() => {
    console.log(selectedId);
    const filteredProd = myProducts.filter((item) => item.id === selectedId);
    setSelectedProduct([...filteredProd]);
    console.log(filteredProd);
  }, [selectedId]);
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
