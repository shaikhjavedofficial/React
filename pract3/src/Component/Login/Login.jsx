import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Login.css";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    if (userName.length >= 5 && password.length >= 6) {
      setIsValid(false);
    } else setIsValid(true);
  }, [userName, password]);
  return (
    <div>
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <Form.Label>Sign in</Form.Label>
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
                <Button disabled={isValid}>Sumbit</Button>
              </Col>
              <Col>
                <Button disabled={isValid}>Cancel</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button color="primary">FacebookIcon Hello World</Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
