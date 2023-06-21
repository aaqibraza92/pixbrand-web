import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GImage from "../../../Components/GComponents/GImage/GImage";
import Slide from "react-reveal/Slide";
import axios from "axios";
import { selectedPortfolio } from "../../../Helpers/Api/Endpoint";

const Portfolio = () => {
  const [loader, setloader] = useState(true);
  const [postData, setPostData] = useState("");
  useEffect(() => {
    loadAllPosts();
  }, []);

  const loadAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios
      .get(`${selectedPortfolio}?per_page=6&page=1`, options)
      .then((res) => {
        if (res && res.status === 200) {
          setPostData(res?.data?.acf?.portfolio);
          setloader(false);
        }
      });
  };
  return (
    <section>
      {loader && (
        <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <Container className="overflow-hidden">
        <div className="mb60">
        <div className="brick-grid">
              {postData.length > 0 &&
                postData?.map((e, i) => {
                
                   return  <div className="brick" key={i}>
                   {i === 0 && (
                          <div className="mb120">
                          <h2 className="fs40 fw500 colorWhite mb30 mobFs33">    Our Recent Projects</h2>
                      
                            <p className="colorLightBlack fs18 tabFs24 tabLgFs24 mobFs18 mb36">
                            Our projects are the result of meticulous research, attention to details and of improving the customer and users´ needs.
                            </p>

                            <div className="mt30" onClick={()=>window.scrollTo(0,0)
                            }>
                            <Link className="btnTransparent" to="/portfolio" >
                            View All Projects <span className="ml10">{Svg.arrowRight}</span> 
                </Link>
                            </div>
                  
                          </div>
                        )}
                        
                    <Slide bottom >
                    <div className="mb80 mobMb30">
                    <div className="protfolioWrapper transition position-realtive d-flex justify-content-center align-items-center radius24 overflow-hidden mb-4">
                    <Link
                              to={`/portfolio/${e?.post_name}`}>
                            <GImage
                              className="scale"
                              width="100%"
                              src={
                                e?.image ? e?.image: Img.p1
                              }
                            />
                          
                            </Link>
                            <Link
                              to={`/portfolio/${e?.post_name}`}
                              className="arrowLink colorWhite hover-me position-absolute"
                            >
                              <div className="btnPortfolio transition">
                                <span className="fs17 fw500 colorBlack">
                                  Case Study
                                </span>{" "}
                                <span className="ml10">{Svg.ArrowDiagnal}</span>
                              </div>
                            </Link>
                          </div>
                          <div className="aboutPortfolio mb60 mobMb30">
                            <h6 className="fs28 tabFs18  mobFs18 mb9 mobMb10 tabMb10 colorWhite">
                              <Link
                                to={`/portfolio/${e?.post_name}`}
                                className="colorWhite"
                              >
                                {e.acf === false ? "" : e?.post_title}
                              </Link>
                            </h6>
                            <p className="colorLightBlack fs18 tabFs24 tabLgFs24 mobFs18 mb36 col-md-7 col-sm-12 col-xs-12">
                              {e?.post_excerpt}
                            </p>
                          </div>
                    </div>
                        
                        </Slide>
                    </div>
              
             
                
                })}
                </div>;
        </div>
      </Container>

      {/* <Container className="overflow-hidden">
        <div>
          <Row className="gx-5 gXl10 mb100">
            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-between "
            >
              <GSection mb="0px">
                <Slide bottom>
                  <div className="protfolioWrapper pBgGreen pl20 pr20 radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p1} />
                  </div>
                </Slide>
              </GSection>

              <div className="aboutPortfolio">
                <Slide bottom>
                  <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                    Servalley
                  </h6>
                  <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                    Everyday services <br /> for peace of mind.
                  </h3>
                </Slide>
                <div className="magnetWrapper">
                  <Link
                    to="/contact-us"
                    className="arrowLink colorWhite hover-me "
                  >
               
                    <div data-cursor-magnetic>
                      <div className="mb15">
                        <span className="d-flex align-items-center">
                          <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                            View the project
                          </span>
                          <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                            {Svg.arrowRight}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>

            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-between "
            >
              <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                <Slide bottom>
                  <div className="aboutPortfolio ">
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      Pepbasket
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                      Daily needs,
                      <br /> seamless ordering.
                    </h3>
                  </div>
                </Slide>
                <div className="magnetWrapper">
                  <Link
                    to="/contact-us"
                    className="arrowLink colorWhite hover-me "
                  >
               
                    <div data-cursor-magnetic>
                      <div className="mb15">
                        <span className="d-flex align-items-center">
                          <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                            View the project
                          </span>
                          <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                            {Svg.arrowRight}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </GSection>
              <GSection mb="0px">
                <Slide bottom>
                  <div className="protfolioWrapper pBgLightBlue pl20 radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p2} />
                  </div>
                </Slide>
              </GSection>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="gx-5 gXl10">
            <Col lg={6} md={6} className="">
              <GSection mb="120px" tabLgmb="80px" className="mobMb0 ">
                <GSection mb="120px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="protfolioWrapper pBgYellow  pl20 radius24 overflow-hidden">
                      <GImage className="scale" width="100%" src={Img.p3} />
                    </div>
                  </Slide>
                </GSection>

                <div className="aboutPortfolio">
                  <Slide bottom>
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      Spotslot
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                      Easy service bookings <br /> for more freedom.
                    </h3>
                  </Slide>
                  <div className="magnetWrapper">
                    <Link
                      to="/contact-us"
                      className="arrowLink colorWhite hover-me "
                    >
                  
                      <div data-cursor-magnetic>
                        <div className="mb15">
                          <span className="d-flex align-items-center">
                            <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                              View the project
                            </span>
                            <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                              {Svg.arrowRight}
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </GSection>

              <GSection mb="0px">
                <GSection mb="120px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="protfolioWrapper pBgDGreen1 radius24 overflow-hidden">
                      <GImage className="scale" width="100%" src={Img.p5} />
                    </div>
                  </Slide>
                </GSection>

                <div className="aboutPortfolio">
                  <Slide bottom>
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      Osama
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                      Making real-estate <br />
                      dealings simple.
                    </h3>
                  </Slide>
                  <div className="magnetWrapper">
                    <Link
                      to="/contact-us"
                      className="arrowLink colorWhite hover-me "
                    >
                  
                      <div data-cursor-magnetic>
                        <div className="mb15">
                          <span className="d-flex align-items-center">
                            <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                              View the project
                            </span>
                            <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                              {Svg.arrowRight}
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </GSection>
            </Col>

            <Col lg={6} md={6} className="">
              <GSection mb="150px" tabLgmb="80px" className="mobMb0 ">
                <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="aboutPortfolio">
                      <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                        Markabat
                      </h6>
                      <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                        Truck hiring services, <br /> completely simplified.
                      </h3>
                    </div>
                  </Slide>
                  <div className="magnetWrapper">
                    <Link
                      to="/contact-us"
                      className="arrowLink colorWhite hover-me "
                    >
                  
                      <div data-cursor-magnetic>
                        <div className="mb15">
                          <span className="d-flex align-items-center">
                            <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                              View the project
                            </span>
                            <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                              {Svg.arrowRight}
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </GSection>
                <GSection mb="0px">
                  <Slide bottom>
                    <div className="protfolioWrapper pBgDGreen  pl20 radius24 overflow-hidden">
                      <GImage className="scale" width="100%" src={Img.p4} />
                    </div>
                  </Slide>
                </GSection>
              </GSection>

              <GSection mb="100px" tabLgmb="80px" className="mobMb0 ">
                <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                  <Slide bottom>
                    <div className="aboutPortfolio">
                      <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                        Onkout
                      </h6>
                      <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                        Financial suite for <br />
                        managed economies.
                      </h3>
                    </div>
                  </Slide>
                  <div className="magnetWrapper">
                    <Link
                      to="/contact-us"
                      className="arrowLink colorWhite hover-me "
                    >
                  
                      <div data-cursor-magnetic>
                        <div className="mb15">
                          <span className="d-flex align-items-center">
                            <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                              View the project
                            </span>
                            <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                              {Svg.arrowRight}
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </GSection>
                <GSection mb="0px">
                  <div className="protfolioWrapper pBgOrg  radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p6} />
                  </div>
                </GSection>
              </GSection>
            </Col>
          </Row>
        </div>

        <div>
          <GSpacing mt="0px" mb="60px">
            <Fade bottom>
              <Row>
                <Col lg={8}>
                  <p className="mb20 colorWhite fs22 tabFs18 tabLgFs18 mobFs16 ">
                    It’s simple. At Pix Brand, you get not one and two, but a
                    complete suite of requisites that come backed with
                    technology, ideas, and creative quotient. The result is a
                    product that’s robust, functional, and delivers
                    out-of-the-world capabilities.
                  </p>
                </Col>
              </Row>
            </Fade>

            <div className="magnetWrapper">
              <Link to="/contact-us" className="arrowLink colorWhite hover-me ">
             
                <div data-cursor-magnetic>
                  <div className="mb15">
                    <span className="d-flex align-items-center">
                      <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                        View the project
                      </span>
                      <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                        {Svg.arrowRight}
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </GSpacing>
        </div>
      </Container> */}
    </section>
  );
};

export default Portfolio;
