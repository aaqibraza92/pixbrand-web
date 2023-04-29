import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'


const ContactUsSection = () => {
  return (
   <section className='pt80 pb80'>
   <Container>
   <Row className='gy-3'>
    <Col lg={6} md={6}>
        <div className='borderGrey radius20 contactSpacer transition'>
        <h3 className='mb30 colorWhite fs30 fw500'>
        Can’t find a service you <br/> are looking for?
        </h3>

        <div>
            <Link to='#' className='btnTransparent'>
            Explore All Services
            </Link>
        </div>
        </div>
    </Col>

    <Col lg={6} md={6}>
        <div className='borderGrey radius20 contactSpacer transition'>
        <h3 className='mb30 colorWhite fs30 fw500'>
        Want to hire resources <br/> to work with you?
        </h3>

        <div>
            <Link to='#' className='btnTransparent'>
            Let's Discuss
            </Link>
        </div>
        </div>
    </Col>
    </Row>
   </Container>
 
   </section>
  )
}

export default ContactUsSection
