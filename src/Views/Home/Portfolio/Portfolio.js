import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GImage from "../../../Components/GComponents/GImage/GImage";
import GSection from "../../../Components/GComponents/GSpacing";
import Slide from "react-reveal/Slide";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import axios from "axios";
import { allportfolio } from "../../../Helpers/Api/Endpoint";

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
      .get(`${allportfolio}?per_page=6&page=1`, options)
      .then((res) => {
        if (res && res.status === 200) {
          setPostData(res?.data);
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
        <div>
          <Row className="gx-5 gXl10 mb100">
            {postData.length > 0 &&
              postData?.map((e, i) => {
                if (i % 2) {
                  return (
                    <Col
                      lg={6}
                      md={6}
                      key={i}
                      className="d-flex flex-column justify-content-between "
                    >
                      <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                        <Slide bottom>
                          <div className="aboutPortfolio ">
                            <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                              {e.acf === false ? "" : e?.acf?.project_title}
                            </h6>
                            <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                              {e?.title?.rendered}
                            </h3>
                          </div>
                        </Slide>
                        <div className="magnetWrapper">
                          <Link
                            to={`/portfolio/${e?.slug}`}
                            className="arrowLink colorWhite hover-me "
                          >
                            <Cursor isGelly={true} />
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
                          <div className="protfolioWrapper pBgLightBlue radius24 overflow-hidden">
                            <GImage
                              className="scale"
                              width="100%"
                              src={
                                e?.x_featured_media_large
                                  ? e?.x_featured_media_large
                                  : Img.p1
                              }
                            />
                          </div>
                        </Slide>
                      </GSection>
                    </Col>
                  );
                } else {
                  return (
                    <Col
                      lg={6}
                      md={6}
                      key={i}
                      className="d-flex flex-column justify-content-between "
                    >
                      <GSection mb="0px">
                        <Slide bottom>
                          <div className="protfolioWrapper pBgGreen pr20 radius24 overflow-hidden">
                            <GImage
                              className="scale"
                              width="100%"
                              src={Img.p1}
                            />
                          </div>
                        </Slide>
                      </GSection>

                      <div className="aboutPortfolio">
                        <Slide bottom>
                          <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                            {e.acf === false ? "" : e?.acf?.project_title}
                          </h6>
                          <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
                            {e?.title?.rendered}
                          </h3>
                        </Slide>
                        <div className="magnetWrapper">
                          <Link
                            to={`/portfolio/${e?.slug}`}
                            className="arrowLink colorWhite hover-me "
                          >
                            <Cursor isGelly={true} />
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
                  );
                }
              })}
          </Row>
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
                    to="/contactus"
                    className="arrowLink colorWhite hover-me "
                  >
                    <Cursor isGelly={true} />
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
                    to="/contactus"
                    className="arrowLink colorWhite hover-me "
                  >
                    <Cursor isGelly={true} />
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
                      to="/contactus"
                      className="arrowLink colorWhite hover-me "
                    >
                      <Cursor isGelly={true} />
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
                      to="/contactus"
                      className="arrowLink colorWhite hover-me "
                    >
                      <Cursor isGelly={true} />
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
                      to="/contactus"
                      className="arrowLink colorWhite hover-me "
                    >
                      <Cursor isGelly={true} />
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
                      to="/contactus"
                      className="arrowLink colorWhite hover-me "
                    >
                      <Cursor isGelly={true} />
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
              <Link to="/contactus" className="arrowLink colorWhite hover-me ">
                <Cursor isGelly={true} />
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
