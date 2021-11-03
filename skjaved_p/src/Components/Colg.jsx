import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardg.css";
export const Colg = () => {
  const [colorName1, setColorName1] = useState("white");
  const [colorName2, setColorName2] = useState("black");
  const [colorName3, setColorName3] = useState("white");
  const [colorName4, setColorName4] = useState("black");
  const [colorName5, setColorName5] = useState("white");
  const [colorName6, setColorName6] = useState("black");
  const [colorName7, setColorName7] = useState("white");
  const [colorName8, setColorName8] = useState("black");
  const [colorName9, setColorName9] = useState("white");
  const [colorName10, setColorName10] = useState("black");
  const [colorName11, setColorName11] = useState("white");
  const [colorName12, setColorName12] = useState("black");
  const handleChange1 = () => {
    colorName1 === "white" && setColorName1("black");
    colorName1 === "black" && setColorName1("white");
  };
  const handleChange2 = () => {
    colorName2 === "white" && setColorName2("black");
    colorName2 === "black" && setColorName2("white");
  };
  const handleChange3 = () => {
    colorName3 === "white" && setColorName3("black");
    colorName3 === "black" && setColorName3("white");
  };
  const handleChange4 = () => {
    colorName4 === "white" && setColorName4("black");
    colorName4 === "black" && setColorName4("white");
  };
  const handleChange5 = () => {
    colorName5 === "white" && setColorName5("black");
    colorName5 === "black" && setColorName5("white");
  };
  const handleChange6 = () => {
    colorName6 === "white" && setColorName6("black");
    colorName6 === "black" && setColorName6("white");
  };
  const handleChange7 = () => {
    colorName7 === "white" && setColorName7("black");
    colorName7 === "black" && setColorName7("white");
  };
  const handleChange8 = () => {
    colorName8 === "white" && setColorName8("black");
    colorName8 === "black" && setColorName8("white");
  };
  const handleChange9 = () => {
    colorName9 === "white" && setColorName9("black");
    colorName9 === "black" && setColorName9("white");
  };
  const handleChange10 = () => {
    colorName10 === "white" && setColorName10("black");
    colorName10 === "black" && setColorName10("white");
  };
  const handleChange11 = () => {
    colorName11 === "white" && setColorName11("black");
    colorName11 === "black" && setColorName11("white");
  };
  const handleChange12 = () => {
    colorName12 === "white" && setColorName12("black");
    colorName12 === "black" && setColorName12("white");
  };
  const colorShow = () => {
    if (
      colorName1 &&
      colorName2 &&
      colorName3 &&
      colorName4 &&
      colorName5 &&
      colorName6 &&
      colorName7 &&
      colorName8 &&
      colorName9 &&
      colorName10 &&
      colorName11 &&
      colorName12 == "white"
    ) {
      return <span>`The Color of the row is White`</span>;
    }
    if (
      colorName1 &&
      colorName2 &&
      colorName3 &&
      colorName4 &&
      colorName5 &&
      colorName6 &&
      colorName7 &&
      colorName8 &&
      colorName9 &&
      colorName10 &&
      colorName11 &&
      colorName12 &&
      "black"
    ) {
      return <span>`The Color of the row is Black`</span>;
    } else {
      <span>`Play The Game`</span>;
    }
  };
  return (
    <React.Fragment>
      <Row>
        <Col md={1}>
          <Card
            className="card1"
            style={{ "background-color": colorName1 }}
            onClick={() => {
              handleChange1();
              handleChange2();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card2"
            style={{ "background-color": colorName2 }}
            onClick={() => {
              handleChange2();
              handleChange1();
              handleChange3();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card3"
            style={{ "background-color": colorName3 }}
            onClick={() => {
              handleChange2();
              handleChange3();
              handleChange4();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card4"
            style={{ "background-color": colorName4 }}
            onClick={() => {
              handleChange3();
              handleChange4();
              handleChange5();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card5"
            style={{ "background-color": colorName5 }}
            onClick={() => {
              handleChange4();
              handleChange5();
              handleChange6();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card6"
            style={{ "background-color": colorName6 }}
            onClick={() => {
              handleChange5();
              handleChange6();
              handleChange7();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card7"
            style={{ "background-color": colorName7 }}
            onClick={() => {
              handleChange6();
              handleChange7();
              handleChange8();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card8"
            style={{ "background-color": colorName8 }}
            onClick={() => {
              handleChange7();
              handleChange8();
              handleChange9();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card9"
            style={{ "background-color": colorName9 }}
            onClick={() => {
              handleChange8();
              handleChange9();
              handleChange10();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card10"
            style={{ "background-color": colorName10 }}
            onClick={() => {
              handleChange9();
              handleChange10();
              handleChange11();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card11"
            style={{ "background-color": colorName11 }}
            onClick={() => {
              handleChange10();
              handleChange11();
              handleChange12();
              colorShow();
            }}
          ></Card>
        </Col>
        <Col md={1}>
          <Card
            className="card12"
            style={{ "background-color": colorName12 }}
            onClick={() => {
              handleChange11();
              handleChange12();
            }}
          ></Card>
        </Col>
      </Row>
      <Row>
        <Card>
          <Col md={2}></Col>
          <Col>{colorShow()}</Col>
          <Col md={2}></Col>
        </Card>
      </Row>
    </React.Fragment>
  );
};
