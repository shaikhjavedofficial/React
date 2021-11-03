import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Json } from "./Json";
export const SetForm = () => {
  const { firstname, lastname, line, line0, cityName } = Json.Data[0];
  const [fname, setFname] = useState(firstname);
  const [lname, setlname] = useState(lastname);
  const [line1, setLine1] = useState(line);
  const [line2, setLine2] = useState(line0);
  const [city, setCity] = useState(cityName);
  // const [photo, setPhoto] = useState("");
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
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter First Name"
                        value={fname}
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
                      <Form.Control
                        type="text"
                        onChange={(e) => setlname(e.target.value)}
                        placeholder="Enter Last Name"
                        value={lname}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>Address :</Col>
                  </Row>
                  <Col md={8}>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          onChange={(e) => setLine1(e.target.value)}
                          placeholder="Line 1"
                          value={line1}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          onChange={(e) => setLine2(e.target.value)}
                          placeholder="Line 2"
                          value={line2}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="City"
                          value={city}
                        ></Form.Control>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col>
                        <Form.Control
                          type="file"
                          id="img"
                          onChange={(e) => setPhoto(e.target.value)}
                          placeholder="Photo"
                        />
                      </Col>
                    </Row> */}
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="Top" src="man.png" />
              <Card.Body>
                <Row>{`${fname} ${lname},`}</Row>
                <Row>{`${line1},`}</Row>
                <Row>{`${line2},`}</Row>
                <Row>{`${city}.`}</Row>
              </Card.Body>
            </Card>
          </Row>
          <Button>Submit</Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
