import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
export const Read = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://6178cd45aa7f340017404552.mockapi.io/fakedata`)
        .then((response) => {
          setResData(response.data);
        });
    };
    fetchData();
  }, []);
  const handleDel = (id) => {
    const newData = resData.filter((item) => !(item.id === id));
    setResData([...newData]);
    axios.delete(`http://6178cd45aa7f340017404552.mockapi.io/fakedata/${id}`);
  };
  return (
    <div>
      <Row>
        {resData.length > 1 &&
          resData.map((item) => {
            return (
              <div>
                <Col>{item.FirstName}</Col>
                <Col>{item.LastName}</Col>
                <Col>
                  <Button onClick={() => handleDel(item.id)}> Delete</Button>
                  <Button href="/update">Update</Button>
                </Col>
              </div>
            );
          })}
      </Row>
      <Row>
        <Button href="/create">Add Name</Button>
      </Row>
    </div>
  );
};
