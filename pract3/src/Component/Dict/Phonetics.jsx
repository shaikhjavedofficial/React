import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./Phonetics.css";

export const Phonetics = () => {
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col>
          <Card className="Phonetics">
            <Row>
              <Col></Col>
              <Col>
                Play :
                <PlayArrowIcon />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
