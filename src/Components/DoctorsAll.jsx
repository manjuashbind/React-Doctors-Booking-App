import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DocCards from './DocCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DoctorsAll() {
  const base_url=`https://doctorsappbackend.onrender.com/doctors`
  const [data,setData]=useState([])

  const fetchDoctor=async()=>{
    const fetchData= await axios.get(base_url)
    console.log(fetchData);
    setData(fetchData.data)
  }
 console.log(data);

  useEffect(()=>{fetchDoctor()},[])

  return (
    <div  >
      
      <Container>
      <h1 className='text-info text-center py-3 '>Consult Our Specialist Doctors</h1>
      
      <Row className='row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xl-3 row-cols-xxl-3'>
        
        {
        data.map(i=>(
        <Col>
          <DocCards doctor={i}/>
          </Col>)
        )
      }
      </Row>
      </Container>
      
    </div>
  )
}

export default DoctorsAll