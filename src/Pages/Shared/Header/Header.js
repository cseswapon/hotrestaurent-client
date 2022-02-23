import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../Image/logo2.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="avtor" style={{ width: "150px" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <div className="align-items-center">
                <Link className="text-decoration-none text-dark" to="/home">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
                <Link
                  className="text-decoration-none mx-lg-4 text-dark"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-decoration-none custom-singup"
                  to="/singUp"
                >
                  Sing Up
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
