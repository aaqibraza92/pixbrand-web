import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'


const ContactUsSection = () => {
  return (
   <section className='pt80 mobPt40 pb20'>
   <Container>
   <Row className='gy-3'>
    <Col lg={6} md={6}>
        <div className='borderGrey h-100 radius20 contactSpacer transition'>
        <h3 className='mb40 colorWhite fs30 fw500'>
        Can’t find a service you <br className='d-xs-none'/> are looking for?
        </h3>

        <div>
            <Link to='/services' className='btnTransparent'>
            Explore All Services
            </Link>
        </div>
        </div>
    </Col>

    <Col lg={6} md={6}>
        <div className='borderGrey d-flex align-items-center position-relative radius20 redBg transition'>
        <img className='radius20 w-100' src={require('../../Assets/Img/redbg.jpg')} alt="red bg" />
        <div className='position-absolute contactSpacer'>
        <h3 className='mb40 colorWhite fs30 fw500'>
        Want to hire resources <br className='d-xs-none'/> to work with you?
        </h3>

        <div>
            <Link to='/contact-us' className='btnWhite'>
            Let's Discuss
            </Link>
        </div>
        </div>
     
        </div>
    </Col>
    </Row>
   </Container>
 
   </section>
  )
}

export default ContactUsSection
