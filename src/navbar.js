import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
 

function Navigation() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand id='logo' href="#">NameIt</Navbar.Brand>
        </Container>
      </Navbar>

    )

}

export default Navigation;