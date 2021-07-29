import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Piano.css";
export const ChildPiano = () => {
  const handlePiano = (bit) => {
    const audio = new Audio(`mp3/${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keydown", (event) => {
    if (event.key === "a" && handlePiano("A"));
    event.stopPropagation();
    if (event.key === "s" && handlePiano("B"));
    if (event.key === "d" && handlePiano("C"));
    if (event.key === "f" && handlePiano("D"));
    if (event.key === "j" && handlePiano("E"));
    if (event.key === "k" && handlePiano("F"));
    if (event.key === "l" && handlePiano("G"));
    if (event.key === "A" && handlePiano("Ab"));
    if (event.key === "S" && handlePiano("Bb"));
    if (event.key === "D" && handlePiano("Db"));
    if (event.key === "F" && handlePiano("Eb"));
    if (event.key === "J" && handlePiano("Gb"));
    console.log(event);
  });
  return (
    <div>
      <Card>
        <Card.Body>
          <Button onMouseOver={() => handlePiano("A")}>Sa</Button>

          <Button onMouseOver={() => handlePiano("Ab")}>Re</Button>

          <Button onMouseOver={() => handlePiano("B")}>Ga</Button>

          <Button onMouseOver={() => handlePiano("Bb")}>Ma</Button>

          <Button onMouseOver={() => handlePiano("C")}>Pa</Button>

          <Button onMouseOver={() => handlePiano("D")}>Dha</Button>

          <Button onMouseOver={() => handlePiano("Db")}>Ni</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
