import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
export const Search = ({ handleSearch, setSearchText }) => {
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col>
          <Card className="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Search Here"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <Button onClick={handleSearch}>
                    <SearchIcon className="searchicon" />
                  </Button>
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      variant="primary"
                    >
                      Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        English US
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        English UK
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
