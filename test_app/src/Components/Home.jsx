import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AddToDoItem } from "./ToDoList/AddToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ToDoList/ToDo.css";

export const Home = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const handleAdd = (newToDo) => {
    setToDoItems([...toDoItems, newToDo]);
  };
  const handleDelete = (curritem) => {
    const filtered = toDoItems.filter((item) => item !== curritem);
    setToDoItems([...filtered]);
  };
  return (
    <Card>
      <Row className="home">
        <Col>
          <AddToDoItem handleAdd={handleAdd} />
        </Col>
        <Col>
          {toDoItems.length > 0 ? (
            <ToDoList toDoItems={toDoItems} handleDelete={handleDelete} />
          ) : (
            <span style={{ color: "#FFBD9B" }}>
              It's Empty Here Go And Add Some Task
            </span>
          )}
        </Col>
      </Row>
    </Card>
  );
};
