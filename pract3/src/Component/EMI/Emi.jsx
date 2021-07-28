import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Emi.css";

export const Emi = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi, setEmi] = useState(0);
  const handleEmi = () => {
    const si = (p * n * r) / 100;
    const repayAmmount = Number(p) + Number(si);
    const repayEmi = repayAmmount / (n * 12);
    setEmi(repayEmi);
  };
  return (
    <div>
      <Col xs={4}></Col>
      <Col xs={4}>
        <Form id="Form">
          <h3 style={{ textAlign: "center" }}>EMI Calculator</h3>
          <hr />
          <p> EMI :{emi} </p>
          <Row>
            <Row>
              <Form.Control
                type="Number"
                placeholder="Principal Ammount"
                onChange={(e) => setP(e.target.value)}
              />
              <Form.Control
                type="Number"
                placeholder="Number of Years"
                onChange={(e) => setN(e.target.value)}
              />
              <Form.Control
                type="Number"
                placeholder="Rate Of Interest"
                onChange={(e) => setR(e.target.value)}
              />
            </Row>
            <hr />
            <Row style={{ textAlign: "center" }}>
              <Col>
                <Button type="Primary" onClick={handleEmi}>
                  Know EMI
                </Button>
              </Col>
            </Row>
          </Row>
        </Form>
      </Col>
      <Col xs={4}></Col>
    </div>
  );
};
