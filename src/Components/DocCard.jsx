import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';



function DocCard({doctor}) {
  console.log(doctor);
  return (
    <div className=''>
      
       <Card className='my-2 mx-auto' style={{ maxWidth: '19rem' }}>
      <Card.Img className='img-fluid' variant="top" style={{height:'200px',objectFit:'cover'}} src={doctor.photo} />
      <Card.Body>
        <Card.Title>{doctor.specialty}</Card.Title>
        <Card.Text> 
          <h3>{doctor.name}</h3>
          <p className='text-success fs-5 fw-medium'><span className='me-3 fs-6 text-info'><i class="fa-solid fa-house-medical"></i></span>{doctor.hospital}</p>
          {/* <p className='text-success fw-medium '>{doctor.address}</p> */}
          {/* <p className='text-info fw-medium'><span className='me-1'><i class="fa-solid fa-phone"></i></span>{doctor.phone}</p>
          <p className='text-info fw-medium'><span className='me-1'><i class="fa-solid fa-envelope"></i></span>{doctor.email}</p> */}
          
          <p className='text-info fw-medium'>Customer Rating : {doctor.rating} <i class="fa-solid fa-star" style={{color: '#fde90d'}}></i></p>
        </Card.Text>
        <Link to={`/doctors/view/${doctor.id}`}><Button variant="primary">View more</Button></Link>
      </Card.Body>
    </Card>
    
      

    </div>
  )
}

export default DocCard