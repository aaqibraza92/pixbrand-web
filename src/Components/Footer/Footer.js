import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import "./Footer.css";
import GPara from "../GComponents/GPara/GPara";
import GLink from "../GComponents/GLink/GLink";
import GSectionTitle from "../GComponents/GSectionTitle";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const [year, setyear] = useState(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setyear(currentYear);
  }, []);
  return (
    <section className="bgWhite pt120 pb5 mobPt40">
      <Container className="mb30 ">
        <Row className="align-items-center">
          <Col lg={7} xl={7}>
            <h2 className="colorBlack fs60 tabFs40  tabLgFs40 mobFs33 mb0 mobMb30" >
              <Slide bottom>
                Let's start something completely new together
              </Slide>
            </h2>
          </Col>

          <Col lg={5} xl={5}>
          <div className="mobTextCenter justify-content-xs-center">
          <Slide bottom>
              <GLink
                className="mobJustifyContentStart"
                itemAlign="right"
                buttonView
                text="Get In Touch"
                align="between"
                to="#"
                width="200px"
                icon={Svg.arrowRight}
                radius="30px"
              />
            </Slide>
          </div>
        
          </Col>
        </Row>

        <div className="lineAnimate1 pt20 pb50 mb65"></div>

        <Row className="gy-3">
          <Col lg={2} xs={12} md={2}>
          <div className=' mb30'>
          <Slide bottom >
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  className="img-fluid"
                  src={require("../../Assets/Img/pix_full.svg").default}
                  alt="logo"
                />
              </Link>
            </Slide>
          </div>
         
          </Col>
          <Col lg={10} xs={12} md={10}>
            <Row className=" gy-3">
              <Col lg={3} xs={6}>
                <div className="">
                  <div className="mb20 min64">
                    <img
                      className="img-fluid"
                      src={require("../../Assets/Img/india.svg").default}
                      alt="India"
                    />
                  </div>
                  <h4 className="colorBlack fs18 fw600">India</h4>
                  <p className="fs14 colorBlack">
                    704, Skye Corporate Park, Indore, Madhya Pradesh
                  </p>
                </div>
              </Col>

              <Col lg={3} xs={6}>
                <div>
                  <div className="mb20 min64">
                    <img
                      className="img-fluid"
                      src={require("../../Assets/Img/dubai.svg").default}
                      alt="India"
                    />
                  </div>
                  <h4 className="colorBlack fs18 fw600">Dubai</h4>
                  <p className="fs14 colorBlack">
                  Dubai, United Arab Emirates Dubai, United Arab Emirates
                  </p>
                </div>
              </Col>

              <Col lg={3} xs={6}>
                <div>
                  <div className="mb20 min64">
                    <img
                      className="img-fluid"
                      src={require("../../Assets/Img/america.svg").default}
                      alt="India"
                    />
                  </div>
                  <h4 className="colorBlack fs18 fw600">United States</h4>
                  <p className="fs14 colorBlack">
                  PO Box 643, Crompond, NY, United States, New York
                  </p>
                </div>
              </Col>

              <Col lg={3} xs={6}>
                <div>
                  <div className="mb20 min64">
                    <img
                      className="img-fluid"
                      src={require("../../Assets/Img/footer_call.svg").default}
                      alt="India"
                    />
                  </div>
                  <h4 className="colorBlack fs18 fw600"><a className="colorBlack fs18 fw600" href="mailto:start@pixbrand.in">start@pixbrand.in</a>  </h4>
                  <h4 className="colorBlack fs18 fw600"><a className="colorBlack fs18 fw600" href="tel:+91 90393 77530">+91 90393 77530</a>  </h4>
             
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

       
        <div className="mt60 mobMt30">
          <Row className="align-items-center gy-3">
            <Col lg={6} md={12} className="ord">
              <div className="d-flex flex-wrap">
                <p className="fs14 mb0 colorGrey mr25">
                  © {year} Pix Brand All rights reserved.
                </p>
                <ul className="socialLinks">
                  <li>
                    <GLink
                      className="runningLine"
                      hoverColor="#FF0A2B"
                      color="#7d7d7d"
                      fs="14px"
                      text="Privacy policy "
                      to="/privacy-policy"
                      mrtextSpan="0px"
                    />
                  </li>
                  <li>
                    <GLink
                      className="runningLine"
                      hoverColor="#FF0A2B"
                      color="#7d7d7d"
                      fs="14px"
                      text="Term & conditon"
                      to="/terms-services"
                      mrtextSpan="0px"
                    />
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <ul className="socialLinks mobJustifyContentLeft">
                <li className="fs14">
                  <a
                    className="runningLine"
                    href="https://www.pixbrand.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Behance
                  </a>
                </li>
                <li className="fs14">
                  <a
                    className="runningLine"
                    href="https://www.pixbrand.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dribbble
                  </a>
                </li>
                <li className="fs14">
                  <a
                    className="runningLine"
                    href="https://www.pixbrand.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pinterest
                  </a>
                </li>
                <li className="fs14">
                  <a
                    className="runningLine"
                    href="https://www.pixbrand.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="fs14">
                  <a
                    className="runningLine"
                    href="https://www.pixbrand.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="fs14">
                  <a
                    className="runningLine"
                    href="https://www.pixbrand.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
