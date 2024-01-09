import React from 'react'

import {
  MDBFooter,
  MDBContainer,
  
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className='mb-0'>
      <MDBFooter className='bg-transparent text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='py-2'>
          <MDBBtn floating  className='m-1 p-0 text-primary'   href='#!' role='button'    >
            <MDBIcon style={{backgroundColor:'lightgrey'}}  fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn   floating  className='m-1 p-0 text-primary'   href='#!'  role='button'  >
            <MDBIcon style={{backgroundColor:'lightgrey'}}  fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating   className='m-1 p-0 text-primary'   href='#!' role='button'  >
            <MDBIcon style={{backgroundColor:'lightgrey'}}  fab icon='google' />
          </MDBBtn>
          <MDBBtn   floating   className='m-1 p-0 text-primary' href='#!'  role='button'   >
            <MDBIcon style={{backgroundColor:'lightgrey'}}  fab icon='instagram' />
          </MDBBtn>

          <MDBBtn   floating  className='m-1 p-0 text-primary bg-primary' href='#!'   role='button'   >
            <MDBIcon style={{backgroundColor:'lightgrey'}}  fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn floating   className='m-1 p-0 text-primary  bg-secondary'   href='#!' role='button'  >
            <MDBIcon  style={{backgroundColor:'lightgrey'}}  fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3 bg-info'>  © 2023 Copyright : 
        <a className='text-white' href='#'>
          DoctorsCorner
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer