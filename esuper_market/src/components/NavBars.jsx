import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navs.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export const NavBars = ({ setstext }) => {
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
            <NavLink to="/ProductList">ProducList</NavLink>
            <NavLink to="/Contact_us">Contact Us</NavLink>
          </Nav>
          <Form.Control
            type="text"
            onChange={(e) => setstext(e.target.value)}
            className="tbox"
          />
          <span style={{ color: "white", padding: "25px" }}>
            <ShoppingCartIcon /> <sup> {products.length}</sup>
          </span>
          <NavLink to="/Login" className="login">
            Login
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
