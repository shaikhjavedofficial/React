import React from "react";
import { Card } from "react-bootstrap";
import "./Meaning.css";
export const Antonyms = ({ m }) => {
  return (
    <div>
      <Card className="Meaning">
        <Card.Title>Antonyms</Card.Title>
        <Card.Text>
          {m.meanings.map((def) =>
            def.definitions.map((defi) => <i>{defi.antonyms}</i>)
          )}
        </Card.Text>
      </Card>
    </div>
  );
};
