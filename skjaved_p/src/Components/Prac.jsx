import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Prac = () => {
  const [words, setWords] = useState(["1st word", "2nd Word"]);
  const [delWord, setDelWord] = useState([]);
  const handleDelete = () => {
    const filtered = words.filter((item) => item !== delWord);
    setWords([...filtered]);
  };
  return (
    <div>
      <Card>{words}</Card>
      <Form.Control onChange={(e) => setDelWord(e.target.value)} />
      <Button onClick={() => handleDelete()}>Delete</Button>
    </div>
  );
};
