import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const LandingPage = () =>{
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <h1>Binamin</h1>
                </Col>
                <Col sm={5}>
                    <h1>Hussein</h1>
                </Col>
            </Row>    
        </Container>          

    )
}

export default LandingPage;