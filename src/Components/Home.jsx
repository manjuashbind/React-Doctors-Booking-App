import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link }  from 'react-router-dom';
import consultimg from './images/consultimg.jpg'



function Home() {

  return (
    <div >
     <Container className=''>
      <Row className='my-xl-5 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 d-flex flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-row flex-xl-row flex-xxl-row '>
        <Col className='mt-3 mt-sm-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0' >
        <h1 className='text-info  fw-bold text-center text-lg-start text-xl-start display-3  ' >Making Health </h1>
        <h1 className='text-info  fw-bold text-center text-lg-start text-xl-start' >Care Better Together</h1>
        
        <p className='fs-4  py-3 text-center text-lg-start text-xl-start ' style={{color:'dark-grey',fontFamily:"roboto"}} >Our vision is to help mankind live healthier ,longer lives by making quality healthcare accessible, affordable and convenient</p>
     <div className='text-center text-lg-start text-xl-start '>
        <Link to={`/doctors`}><Button variant="info" className='text-white fw-medium'>View all Doctors</Button></Link>
        </div> 
        </Col>
        
        <Col >
        <img className='img-fluid rounded' src={consultimg} alt="" />
        
        </Col>
        
      </Row>
    </Container>
    </div>
  )
}

export default Home