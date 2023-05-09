import React from "react";
import { Col, Container, Row } from "reactstrap";
import GImage from "../../Components/GComponents/GImage/GImage";

const StandWithUs = () => {
  return (
    <section>
      <Container>
      <div className="wrapperStand greyishBg radius20 pt60 pb60 pl40 pr40 mobPl20 mobPr20">
        <h2 className="colorWhite fs36 mobFs33 fw600 mb20">
        We make you stand with PIX
        </h2>
        <Row className="">
          <Col lg={8} md={12} className="mb0">
            <div className="radius20 borderGrey mb30">
              <Row className="align-items-center">
                <Col lg={6} md={6}>
                <GImage height='100%' radiusMob="18px 18px 0px 0px" radius="18px 0px 0px 18px" width="100%" src={require('../../Assets/Img/stand1.jpg')} />
              
                </Col>
                <Col lg={6} md={6}>
                  <div className="standTextWrapper pl30 pr30 mobPt30 mobPb30">
                    <h4 className="colorWhite fs28 fw500 tabFs20">
                    Perfection
                    </h4>
                    <p className="colorLightGrey mb0 fs16 tabFs13">
                    For every project or client onboarded, Pix Brand is committed to utmost perfection in delivery and support. In this industry, perfection is the bare minimum and we understand that completely.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="radius20 borderGrey mobMb30">
              <Row className="align-items-center mobColomnReverse">
                <Col lg={6} md={6}>
                <div className="standTextWrapper pl30 pr30 mobPt30 mobPb30">
                    <h4 className="colorWhite fs28 fw500 tabFs20">
                    Ideas
                    </h4>
                    <p className="colorLightGrey mb0  fs16 tabFs13">
                    At the end of the day, it is the right set of ideas that need to be thought upon to deliver something unique and cutting-edge, every single time. This is what we strive to do at Pix Brand.
                    </p>
                  </div>
                </Col>
                <Col lg={6} md={6}>
                <div className="d-flex justify-content-end">
                <GImage radiusMob="18px 18px 0px 0px"  radius="0px 18px 18px 0px" width="100%" src={require('../../Assets/Img/stand2.jpg')} />
                </div>
               
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <div className="radius20 borderGrey h-100">
            <GImage radiusMob="18px 18px 0px 0px"  radius="18px 18px 0px 0px" width="100%" src={require('../../Assets/Img/stand3.jpg')} />
            <div className="standTextWrapper ord pt30 pl30 pr30 mobPt30 mobPb30">
                    <h4 className="colorWhite fs28 fw500">
                    Xcellence
                    </h4>
                    <p className="colorLightGrey  mb0 tabMb30 fs16 tabFs13">
                    For us, it's Xcellence, because we ensure to bring the X-factor in everyday excellence. It's important to help you stay ahead of whichever domain you belong to, and this counts in the 
long-term.
                    </p>
                  </div>
            </div>
          </Col>
        </Row>
      </div>
       
      </Container>
    </section>
  );
};

export default StandWithUs;
