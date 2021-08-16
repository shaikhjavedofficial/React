import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AddToDoItem } from "./ToDoList/AddToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ToDoList/ToDo.css";

export const Home = () => {
  const [toDoItems, setToDoItems] = useState([
    "Learning React",
    "Interview prep",
  ]);
  const handleAdd = (newToDo) => {
    setToDoItems([...toDoItems, newToDo]);
  };

  return (
    <Card>
      <Row className="home">
        <Col>
          <AddToDoItem handleAdd={handleAdd} />
        </Col>
        <Col>
          <ToDoList toDoItems={toDoItems} />
        </Col>
      </Row>
    </Card>
  );
};
