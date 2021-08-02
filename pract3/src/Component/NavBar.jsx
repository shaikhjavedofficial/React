import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to="/Home">
              <Navbar.Brand to="/">PDAC</Navbar.Brand>
            </NavLink>
            <Nav className="me-auto">
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/Courses">Courses</NavLink>
              <NavLink to="/Contact_Us">Contact Us</NavLink>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/Services">Services</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
