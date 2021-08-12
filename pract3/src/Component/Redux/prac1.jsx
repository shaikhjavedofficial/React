import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getAllGroups } from "../State/Selector/groupSelector";
import { useSelector } from "react-redux";
import { addNewGroup } from "../State/Action/GroupAction";
export const Prac1 = () => {
  const selector = useSelector(getAllGroups);
  const [redu, setRedu] = useState(selector);
  const [newGroup, setNewGroup] = useState("");
  useEffect(() => {
    // addNewGroupio;
  }, []);
  console.log(redu);
  return (
    <div>
      {redu.map((item) => {
        return (
          <Card
            style={{
              margin: "20px",
              padding: "20px",
              "box-shadow": "0 0 10px black",
              width: "250px",
              height: "100px",
              "border-radius": "20px",
            }}
          >
            <Card.Title>{item.name}</Card.Title>
            <Card.Body>
              {item.desc}
              {/* <Button>hello</Button> */}
            </Card.Body>
          </Card>
        );
      })}
      <Button onClick={(e) => addNewGroup(e.target.value)}>Add Group</Button>
    </div>
  );
};
