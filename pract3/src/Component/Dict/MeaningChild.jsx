import React from "react";
import { Card } from "react-bootstrap";
import "./Meaning.css";
export const MeaningChild = ({ finalitem }) => {
  return (
    <div>
      <Card className="Meaning">
        <Card.Title>{finalitem.partOfSpeech}</Card.Title>
        <Card.Text>
          {finalitem.definitions.map((def, index) => (
            <i>
              {index + 1}.{def.definition}
            </i>
          ))}
        </Card.Text>
      </Card>
    </div>
  );
};
