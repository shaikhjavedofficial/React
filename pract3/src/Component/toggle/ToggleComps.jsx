import React, { useState } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
export const ToggleComps = () => {
  const [colorName, setColorName] = useState("Orange");
  const handleChange = () => {
    colorName === "Orange" && setColorName("Red");
    colorName === "Red" && setColorName("Green");

    colorName === "Green" && setColorName("Black");
    colorName === "Black" && setColorName("Red");
  };
  return (
    <div>
      <Card>
        <Button onClick={() => colorName == handleChange()}>Revert</Button>
        <h1>PickupBiz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          soluta facere ratione porro dolores, itaque aliquid adipisci illum
          rerum officia, excepturi maxime nulla error molestiae molestias
          debitis dignissimos, tempore cumque!
        </p>
        <h1>
          <span style={{ color: colorName }}>PDAC Courses</span>
        </h1>
        <Button onClick={() => setColorName("Blue")}>Blue</Button>
        <Button onClick={() => setColorName("Green")}>Green</Button>
        <Button onClick={() => setColorName("Red")}>Red</Button>
        <Button onClick={() => setColorName("Black")}>Black</Button>
      </Card>
    </div>
  );
};
