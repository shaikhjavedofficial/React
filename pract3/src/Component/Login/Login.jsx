import React, { useState, useEffect, useRef } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { userData } from "../Reducer/userData";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSucceess, setIsSuccess] = useState(false);
  const elemUser = useRef();
  const elemPass = useRef();

  useEffect(() => {
    if (userName.length >= 5 && password.length >= 6) {
      setIsValid(false);
      if (
        userData.userName === userName.trim() &&
        userData.password === password.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem("token", userData.token);
      }
    } else setIsValid(true);
  }, [userName, password]);
  useEffect(() => {
    if (localStorage.getItem("userName")) {
      elemUser.current.value = localStorage.getItem("userName");
      elemPass.current.focus();
    } else {
      elemUser.current.focus();
    }
  }, []);
  return (
    <div>
      {isSucceess ? (
        <p>You Are Successfully Logged In</p>
      ) : (
        <div>
          <Row>
            <Col></Col>
            <Col md={4}>
              <Card>
                <Form.Label>Sign in</Form.Label>
                {!isSucceess && !isValid && (
                  <p style={{ color: "red" }}>
                    Please enter the User ID and Password correctly
                  </p>
                )}
                <Form.Control
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="UserName"
                  ref={elemUser}
                />
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  ref={elemPass}
                />
                <Row className="Butts">
                  <Col>
                    <Button disabled={isValid}>Sumbit</Button>
                  </Col>
                  <Col>
                    <Button disabled={isValid}>Cancel</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
      )}
    </div>
  );
};
