import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// docs: https://react-bootstrap.netlify.app/docs/components/navbar
const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="nav-top ml-auto"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Mahaney Years to Come
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/intro">
                Intro
              </Nav.Link>
              <Nav.Link as={Link} to="/book">
                Our Story
              </Nav.Link>
              <Nav.Link as={Link} to="/venue">
                Venue
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/footer">
                RSVP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
