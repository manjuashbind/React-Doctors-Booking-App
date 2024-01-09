import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Review({reviews}) {
    console.log(reviews);
    
  return (
    <div>
        <Container>
            <Row className='my-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2'>
                {
                    reviews?.map(i=>(
                        <Col className='my-2' >
                        <MDBCard alignment='center' className='shadow'>
                              <MDBCardHeader className='fs-5'>{i.rating} <span className='text-warning '><i class="fa-solid fa-star"></i></span></MDBCardHeader>
                              <MDBCardBody>
                                <div className='text-center rounded-circle bg-secondary shadow mx-auto p-1 my-1' style={{width:'110px', height:'110px'}} >
                                <img className='img fluid rounded-circle ' style={{width:'100px', height:'100px',objectFit:'cover'}}   src={i.img} alt="" />
                                </div>
                               
                                <MDBCardTitle className='text-info'>{i.patient_name}</MDBCardTitle>
                                <MDBCardText className='text-dark fw-medium'>"{i.comments}"</MDBCardText>
                                
                              </MDBCardBody>
                              <MDBCardFooter className='text-muted'>{i.date}</MDBCardFooter>
                            </MDBCard>
                            </Col>

                    ))
                }
            </Row>
            
</Container>

    </div>
  )
}

export default Review