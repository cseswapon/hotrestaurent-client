import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import logo from "../../../Image/logo2.png";
import "./Header.css";
const Header = () => {
  const { users, logOut } = useFirebase();
  console.log(users.email);
  const navigate = useNavigate();
  const singup = () => {
    navigate("register");
  };
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
                <Link className="text-decoration-none text-dark" to="/delivery">
                  <i className="fas fa-shopping-cart">
                    <span className="fw-bold ms-1 text-danger">0</span>
                  </i>
                </Link>
                {!users.email ? (
                  <Link
                    className="text-decoration-none mx-lg-4 text-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                ) : (
                  <span className="mx-2 mx-lg-3 mx-md-3">
                    {users.displayName}
                  </span>
                )}

                {!users.email ? (
                  <button
                    className="custom-singup border-0"
                    onClick={() => singup()}
                  >
                    Sing Up
                  </button>
                ) : (
                  <button className="custom-singup border-0" onClick={logOut}>
                    Logout
                  </button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
