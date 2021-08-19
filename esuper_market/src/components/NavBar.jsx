import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navs.css";
export const NavBar = () => {
  const products = useSelector((state) => state.ProductReducer.product);
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink to="/Home">
            <Navbar.Brand to="/Home">eMART</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/Home2">Home</NavLink>
            <NavLink to="/ProducItem">ProducItem</NavLink>
            <NavLink to="/Contact_us">Contact Us</NavLink>
            <Col style={{ color: "white" }}>Cart : {products.length}</Col>
            <NavLink to="/Login" className="login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
