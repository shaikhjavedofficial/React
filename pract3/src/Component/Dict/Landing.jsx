import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Meaning.css";
import { Search } from "./Search";
import { Dict } from "./Dict";
import { Phonetics } from "./Phonetics";
import { Card } from "react-bootstrap";

export const Landing = () => {
  const [resData, setResData] = useState([]);
  const handleSearch = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/rate")
      .then((res) => {
        setResData([...res.data]);
      });
  };
  return (
    <div>
      <Card className="back">
        <Card.Title>Dictionary</Card.Title>
        <Search handleSearch={handleSearch} />
        <Phonetics />
        <Dict resData={resData} />
      </Card>
    </div>
  );
};
