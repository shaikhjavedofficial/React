import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nform.css";
export const SetNForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [Dob, setDob] = useState("");
  const [Qualification, setQualification] = useState("");
  // const [photo, setPhoto] = useState("");
  return (
    <div>
      <Row>
        <Col xs={1}></Col>
        <Col xs={5}>
          <br />
          <br />
          <Card id="first">
            <Card.Body>
              <Form.Group>
                <Col md={8}>
                  <Row>
                    {" "}
                    <Col>
                      <Form.Label>
                        <b>First Name :</b>
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter First Name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col>
                      <Form.Label>
                        <b>Last Name :</b>
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        onChange={(e) => setlname(e.target.value)}
                        placeholder="Enter Last Name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col>
                      <Form.Label>
                        <b>DOB : </b>
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="date"
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col>
                      <Form.Label>
                        {" "}
                        <b>Qualification :</b>
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="Qualification"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b> Address :</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        onChange={(e) => setLine1(e.target.value)}
                        placeholder="Line 1"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        onChange={(e) => setLine2(e.target.value)}
                        placeholder="Line 2"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5}>
          <br />
          <br />
          <Row>
            <Card style={{ width: "38rem" }} id="info">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Card.Img
                      variant="Top"
                      src="devil-may-cry-vergil.jpg"
                      height="200px"
                      width="200px"
                    />
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col>
                        <b>Full Name : </b>
                        {`${fname} ${lname}`}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <b>DOD :</b>
                        {`${Dob}`}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <b>Qualification</b>
                        {`${Qualification}`}
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <br />
                    <Row>
                      <Col>
                        <b>Address :</b>
                        {`${line1} ${line2} ${city}`}
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <Button>Submit</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
};
