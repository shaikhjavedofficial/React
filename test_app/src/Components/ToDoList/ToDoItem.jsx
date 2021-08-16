import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
export const ToDoItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card className="todoitem">
        <Row>
          <Col md={2}>
            <Form.Check></Form.Check>
            {/* checked={true} */}
          </Col>
          <Col md={10}>
            <Form.Label>{item}</Form.Label>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
