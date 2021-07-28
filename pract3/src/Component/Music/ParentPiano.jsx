import React from "react";
import { ChildPiano } from "./ChildPiano";
import { Row, Col } from "react-bootstrap";
export const ParentPiano = () => {
  return (
    <div>
      <Row>
        <Col>
          <h1>Low</h1>
          <ChildPiano />
        </Col>
        <Col>
          <h1>Mid</h1>
          <ChildPiano />
        </Col>
        <Col>
          <h1>High</h1>
          <ChildPiano />
        </Col>
      </Row>
    </div>
  );
};
