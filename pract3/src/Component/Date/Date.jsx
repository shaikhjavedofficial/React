import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./Date.css";

export const Date = () => {
  const [sec, setSec] = useState(59);
  const [min, setMin] = useState(59);
  const [Hour, setHour] = useState(0);
  setTimeout(() => {
    setSec(sec + 1);
    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
      if (min % 60) {
        setHour(Hour + 1);
        setMin(0);
        setSec(0);
      }
    }
  }, 1000);
  return (
    <div>
      <Card>
        <p>
          {Hour}:{min}:{sec}
        </p>
      </Card>
    </div>
  );
};
