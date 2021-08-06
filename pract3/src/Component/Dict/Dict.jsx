import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Synonyms } from "./Synonyms";
import { Antonyms } from "./Antonyms";
import { MeaningParent } from "./MeaningParent";
export const Dict = ({ resData }) => {
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col>
          <Row>
            <Col>
              {resData.map((item) => {
                item.meanings.length > 0 && <MeaningParent item={item} />;
                console.log(item);
              })}
            </Col>
            <Col>
              <Synonyms />
              <Antonyms />
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
