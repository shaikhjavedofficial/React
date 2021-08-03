import React, { useState } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
            />
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Row className="Butts">
              <Col>
                <Button disabled>Sumbit</Button>
              </Col>
              <Col>
                <Button disabled>Cancel</Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
