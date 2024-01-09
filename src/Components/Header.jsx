import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from './images/logo2.jpeg'
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openBasic, setOpenBasic] = useState(false);
  return (
    <div>       

    <MDBNavbar expand='lg'  className='bg-transparent'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='p-0' href='#'><img className='rounded ' src={logo2} style={{width:'150px',height:'80px',objectFit:'cover'}} alt="" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <Link to={'/'} className='text-decoration-none fw-medium text-white' > <MDBNavbarLink active aria-current='page' href='#'>
            Home
              </MDBNavbarLink>
            </Link>                
            </MDBNavbarItem>

            <MDBNavbarItem>
            <Link to={'/doctors'} className='text-decoration-none fw-medium text-white'>  <MDBNavbarLink href='#'>Doctors</MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink className='fw-medium '  href='#' onClick={handleShow}>Login</MDBNavbarLink>
            </MDBNavbarItem>

           
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='search' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
    
    <>
    

    <Modal     show={show}   onHide={handleClose}    backdrop="static"     keyboard={false}   >
      <Modal.Header closeButton>
        <Modal.Title> <img src={logo2} alt="" style={{width:'150px',height:'80px',objectFit:'cover'}} /> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <MDBInput      label='Enter Name'     id='controlledValue'    type='text'  /> <br /> 
      <MDBInput      label='Enter Email id'     id='controlledValue'    type='text'  /> <br /> 
      <MDBInput      label='Password'     id='controlledValue'    type='text'  /> <br /> 
      <p>Dont have an account? <span> <a href="">Register</a></span></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Login</Button>
      </Modal.Footer>
    </Modal>
  </>

    </div>
  )
}

export default Header