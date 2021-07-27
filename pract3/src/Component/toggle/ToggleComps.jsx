import React, { useState } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
export const ToggleComps = () => {
  return (
    <div>
      <Card>
        <h1>PickupBiz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          soluta facere ratione porro dolores, itaque aliquid adipisci illum
          rerum officia, excepturi maxime nulla error molestiae molestias
          debitis dignissimos, tempore cumque!
        </p>
        <h1>
          <span style={{ color: "red" }}>PDAC Courses</span>
        </h1>
        <Button>Change Me</Button>
      </Card>
    </div>
  );
};
