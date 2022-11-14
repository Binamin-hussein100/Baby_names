import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand id='logo' href="#">N..It</Navbar.Brand>
        </Container>
        <Container>
            <Nav.Link to='/landing'>Home</Nav.Link>
        </Container>
      </Navbar>

    )

}

export default Navigation;