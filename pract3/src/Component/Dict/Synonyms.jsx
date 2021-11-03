import React from "react";
import { Card } from "react-bootstrap";
import "./Meaning.css";
export const Synonyms = ({ m }) => {
  return (
    <div>
      <Card className="Meaning">
        <Card.Title>Synonyms</Card.Title>
        <Card.Text>
          {m.meanings.map((def) =>
            def.definitions.map((defi) => <i>{defi.synonyms}</i>)
          )}
        </Card.Text>
      </Card>
    </div>
  );
};
