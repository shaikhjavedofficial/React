import React from "react";
import { Card } from "react-bootstrap";
import "./Meaning.css";
export const MeaningChild = ({ elem }) => {
  return (
    <div>
      <Card className="Meaning">
        <Card.Title>{elem.partOfSpeech}</Card.Title>
        <Card.Text>
          {elem.definations.map(
            (def, index) => (
              (
                <span>
                  {index + 1}. {def.defination}{" "}
                </span>
              ),
              (<span>{def.example}</span>)
            )
          )}
        </Card.Text>
        <Card.Text>Percentage</Card.Text>
        <Card.Text></Card.Text>
      </Card>
    </div>
  );
};
