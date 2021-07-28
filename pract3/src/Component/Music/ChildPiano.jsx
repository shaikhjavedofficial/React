import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Piano.css";
export const ChildPiano = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Button>Sa</Button>

          <Button>Re</Button>

          <Button>Ga</Button>

          <Button>Ma</Button>

          <Button>Pa</Button>

          <Button>Dha</Button>

          <Button>Ni</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
