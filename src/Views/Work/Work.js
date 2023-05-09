import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import "./Work.css";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";


const Work = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Works - Pixbrand</title>
        <meta name="Works" content="Pixbrand Works"></meta>
      </Helmet>
      <Container>
        <Title />
      </Container>

      <Slide bottom>

      </Slide>
    </>
  );
};

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Row>
        <Col xl={12} lg={12} md={12}>
          <section>
            <Slide bottom>
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
              The work we do, <br/>
and the people we help.
              </h1>
             
            </Slide>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default Work;



const ListingWork=()=>{
  return 
}