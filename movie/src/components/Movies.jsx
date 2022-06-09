import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movies.css";

export const Movies = () => {
  var cors = require("cors");
  const [movieData, setmovieData] = useState({
    idmovie: "",
    movie_name: "",
    movie_desc: "",
    dir: "",
    wr: "",
    release_date: "",
  });
  const handleAdd = (e) => {
    const newData = { ...movieData };
    newData[e.target.id] = e.target.value;
    setmovieData(newData);
    console.log(newData);
  };

  const submit = async (e) => {
    e.preventDefault();
    // await Axios.post("http://localhost:3002/add_movies", {
    //   idmovie: movieData.idmovie,
    //   movie_name: movieData.movie_name,
    //   movie_desc: movieData.movie_desc,
    //   dir: movieData.dir,
    //   wr: movieData.wr,
    //   release_date: movieData.release_date,
    // }).then((response) => {
    //   console.log(response);
    // });
    let a = await axios({
      method: "post",
      url: "http://localhost:3000/api/movies",
      data: {
        idmovie: movieData.idmovie,
        movie_name: movieData.movie_name,
        movie_desc: movieData.movie_desc,
        dir: movieData.dir,
        wr: movieData.wr,
        release_date: movieData.release_date,
      },
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <Row>
      <Col md={2}></Col>
      <Col>
        <Row>
          <span
            style={{
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              fontSize: "30px",
            }}
          >
            {" "}
            Add Movie{" "}
          </span>
        </Row>
        <Row>
          <Form.Control
            placeholder="sr. No."
            onChange={(e) => handleAdd(e)}
            id="idmovie"
            value={movieData.idmovie}
          />
        </Row>
        <Row>
          <Form.Control
            placeholder="Movie Name"
            onChange={(e) => handleAdd(e)}
            id="movie_name"
            value={movieData.movie_name}
          />
        </Row>
        <Row>
          <Form.Control
            placeholder="Movie Description"
            onChange={(e) => handleAdd(e)}
            id="movie_desc"
            value={movieData.movie_desc}
          />
        </Row>
        <Row>
          <Form.Control
            placeholder="Director"
            onChange={(e) => handleAdd(e)}
            id="dir"
            value={movieData.dir}
          />
        </Row>
        <Row>
          <Form.Control
            placeholder="Writer"
            onChange={(e) => handleAdd(e)}
            id="wr"
            value={movieData.wr}
          />
        </Row>
        <Row>
          <Form.Control
            placeholder="Release Date"
            onChange={(e) => handleAdd(e)}
            id="release_date"
            value={movieData.release_date}
          />
        </Row>
        <Row>
          <Button onClick={(e) => submit(e)}>submit</Button>
        </Row>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};
