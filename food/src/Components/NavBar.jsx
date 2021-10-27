import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">Recipies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/recipe">Add Recipe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
