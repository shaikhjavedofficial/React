import React from "react";
import { candidateData } from "./candidateData";
import { Card, Form } from "react-bootstrap";
import "./DynamicComp.css";

export const DynamicComp = () => {
  return (
    <div>
      <Card className="dynamic">
        {Object.keys(candidateData).map((key) => (
          <p>
            {key} :
            <Form.Control
              type={candidateData[key].type}
              value={candidateData[key].data}
              placeholder={candidateData[key].placeholder}
            />
          </p>
        ))}
      </Card>
    </div>
  );
};
