import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Synonyms } from "./Synonyms";
import { Antonyms } from "./Antonyms";
import { MeaningParent } from "./MeaningParent";
export const Dict = ({ resData }) => {
  console.log(resData);
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col>
          <Row>
            <Col>
              {resData.map(
                (items) =>
                  items.meanings.length > 0 && <MeaningParent m={items} />
              )}
            </Col>
            <Col>
              <Row>
                {resData.map(
                  (items) => items.meanings.length > 0 && <Synonyms m={items} />
                )}
              </Row>
              <Row>
                {resData.map(
                  (items) => items.meanings.length > 0 && <Antonyms m={items} />
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
