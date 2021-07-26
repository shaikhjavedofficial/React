import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const SetForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [Line1, setLine1] = useState("");
  const [Line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  return (
    <div>
      <Row>
        <Col></Col>
        <Col xs={4}>
          <br />
          <br />
          <Card>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Row>
                    {" "}
                    <Col>
                      <Form.Label>First Name :</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col>
                      <Form.Label>Last Name :</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control type="text" placeholder="Enter Last Name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>Address :</Col>
                  </Row>
                  <Col md={8}>
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="Line 1" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="Line 2" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="City" />
                      </Col>
                    </Row>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <br />
          <br />
          <br />
          <Button>Submit</Button>
          <br />
          <br />
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="Top" src="man.png" />
              <Card.Body>
                <Form.Control></Form.Control>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
