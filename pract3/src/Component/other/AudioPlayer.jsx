import React from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import "./AudioPlayer.css";
export const AudioPlayer = () => {
  const audio = new Audio("mp3/blood brothers.mp3");

  const handleAudio = () => {
    audio.play();
  };
  const handlePlay = () => {
    audio.play();
  };
  const handleStop = () => {
    audio.pause();
  };
  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handleAudio}>abspielen</Button>
        </Col>
        <Col>
          <Button onClick={handleStop}>stoppen</Button>
        </Col>
        <Col>
          <Button onMouseDown={handlePlay} onMouseUp={handleStop}>
            piano
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
