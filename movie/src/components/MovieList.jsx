import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

export const MovieList = () => {
  const [content, setcontent] = useState("haha");
  const handleList = async () => {
    await axios.get("http://localhost:3000/api/movies").then((response) => {
      setTimeout(() => {
        setcontent(response.data[0]);
      }, 3000);
      console.log("Data is Loading");
    });
  };
  return (
    <Row>
      <Col>
        <Button onClick={() => handleList()}>Resfresh Movies List</Button>
      </Col>
      <Row>
        <Col md={1}>Sr.No.</Col>
        <Col md={2}>Movie Name</Col>
        <Col md={3}>Description</Col>
        <Col md={2}>Directed By</Col>
        <Col md={2}>Written By</Col>
        <Col md={2}>Released</Col>
      </Row>
      <Row>
        <Col md={1}>{content.idmovie}</Col>
        <Col md={2}>{content.movie_name}</Col>
        <Col md={3}>{content.movie_desc}</Col>
        <Col md={2}>{content.dir}</Col>
        <Col md={2}>{content.wr}</Col>
        <Col md={2}>{content.release_date}</Col>
      </Row>
    </Row>
  );
};
