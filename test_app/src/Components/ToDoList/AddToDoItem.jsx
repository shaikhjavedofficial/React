import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form, Card, Row, Col } from "react-bootstrap";
export const AddToDoItem = ({ handleAdd }) => {
  const [toDoText, setToDoText] = useState("");
  return (
    <React.Fragment>
      <Card className="addtodo">
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              value={toDoText}
              onChange={(e) => setToDoText(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <Button
              onClick={() => {
                setToDoText("");
                handleAdd(toDoText);
              }}
              disabled={toDoText === ""}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
