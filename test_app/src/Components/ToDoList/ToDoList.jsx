import React from "react";
import { Form, Card } from "react-bootstrap";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ toDoItems }) => {
  return (
    <React.Fragment>
      <Card className="todolist">
        {toDoItems.map((item) => (
          <ToDoItem item={item} />
        ))}
      </Card>
    </React.Fragment>
  );
};
