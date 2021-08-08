import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./Phonetics.css";

export const Phonetics = ({ resData }) => {
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col>
          <Card className="Phonetics">
            <Row>
              <Col>
                {resData.map(
                  (items) =>
                    items.meanings.length > 0 && <i>{items.phonetic}</i>
                )}
              </Col>
              <Col>
                Play :
                <PlayArrowIcon
                  onClick={() => handleAudio(item.phonetics[0].audio)}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
