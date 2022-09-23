import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Navigation() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

    )

}

export default Navigation;