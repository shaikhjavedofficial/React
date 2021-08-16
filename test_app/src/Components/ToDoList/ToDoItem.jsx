import React, { useState } from "react";
import { Card, Row, Col, Form, Button, Container } from "react-bootstrap";
export const ToDoItem = ({ item, handleDelete }) => {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <React.Fragment>
      <Card className="todoitem">
        <Row>
          <Container>
            <Col md={2}>
              <Form.Check onClick={() => setCheckBox(!checkBox)}></Form.Check>
              {/* checked={true} */}
            </Col>
            <Col md={8}>
              <Form.Label>{checkBox ? <del>{item}</del> : item}</Form.Label>
            </Col>
            <Col>
              <Button onClick={() => handleDelete(item)}>Remove</Button>
            </Col>
          </Container>
        </Row>
      </Card>
    </React.Fragment>
  );
};
