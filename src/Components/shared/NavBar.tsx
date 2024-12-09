import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src="/assets/react.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Promedios UTPL
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Navbar */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Modalidad Presencial</Nav.Link>
            <Nav.Link href="/virtual">Modalidad Virtual</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
