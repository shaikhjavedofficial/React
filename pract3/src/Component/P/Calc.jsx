import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export const Calc = () => {
  const [numb, setNumb] = useState(0);
  const [numb2, setNumb2] = useState(0);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(Number(numb) + Number(numb2));
  }, [numb, numb2]);
  return (
    <div>
      <Form.Control onChange={(e) => setNumb(e.target.value)} />
      <Form.Control onChange={(e) => setNumb2(e.target.value)} />
      <h1>{sum}</h1>
    </div>
  );
};
