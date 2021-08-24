import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProducItem } from "./ProducItem";
export const ProductList = ({ stext }) => {
  const productSelector = useSelector((state) => state.ProductReducer.product);
  const [localData, setLocalData] = useState([...productSelector]);
  useEffect(() => {
    setLocalData([...productSelector]);
  }, [productSelector]);
  useEffect(() => {
    if (stext !== "") {
      const filtered = productSelector.filter((item) =>
        item.title.toLowerCase().includes(stext.toLowerCase())
      );
      setLocalData([...filtered]);
    }
  }, [stext]);

  return (
    <Row>
      <Card className="card1">
        <Col md={3}>
          {localData.map((item) => (
            <ProducItem item={item} />
          ))}
        </Col>
      </Card>
    </Row>
  );
};
