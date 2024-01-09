import React from 'react'
import pagenotfound from './images/pagenotfound.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageNotFound() {
  return (
    <div style={{backgroundColor:'white'}}>
        <Container>
        <Row>
            <Col className='text-center'>
            <img src={pagenotfound} className='img-fluid w-75' alt="" />
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default PageNotFound