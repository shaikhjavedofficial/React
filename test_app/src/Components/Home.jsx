import React from "react";
import { Row, Col } from "react-bootstrap";
export const Home = () => {
  return (
    <React.Fragment className="Home">
      <Row>
        <Col>
          <AddToDoItem />
        </Col>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </React.Fragment>
  );
};
