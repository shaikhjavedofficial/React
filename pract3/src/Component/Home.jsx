import React, { useState } from "react";
import { Row, Col, Card, Form, Image, Container } from "react-bootstrap";
import { SetNForm } from "./New/Nform";
import { SetForm } from "./Form/Form";
import { ToggleComps } from "./toggle/ToggleComps";
export const Home = () => {
  const [switch1, setSwitch1] = useState("son");
  return (
    <Container>
      {/* <Image
        src={`${switch1}.png`}
        alt=""
        height="30px"
        width="50px"
        onClick={() =>
          switch1 == "soff" ? setSwitch1("son") : setSwitch1("soff")
        }
      />
      {switch1 == "soff" ? <SetNForm /> : <SetForm />} */}
      <ToggleComps />
    </Container>
  );
};
