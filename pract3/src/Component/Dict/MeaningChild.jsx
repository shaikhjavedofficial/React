import React from "react";
import { Card } from "react-bootstrap";
import "./Meaning.css";
export const MeaningChild = ({ finalitem }) => {
  console.log(finalitem);
  return (
    <div>
      <Card className="Meaning">
        <Card.Title>{finalitem.partOfSpeech}</Card.Title>
        <Card.Text>
          {finalitem.definitions.map((def, index) => (
            <span>
              {index + 1}. {def.definitions}
            </span>
          ))}
        </Card.Text>
        <Card.Text>Percentage</Card.Text>
        <Card.Text></Card.Text>
      </Card>
    </div>
  );
};
