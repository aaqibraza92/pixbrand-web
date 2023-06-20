import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import GImage from "../../Components/GComponents/GImage/GImage";
import GSpacing from "../../Components/GComponents/GSpacing";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import { useState } from "react";
import ContactUsSection from "../Home/ContactUsSection";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Pixbrand</title>
        <meta name="About" content="Pixbrand About"></meta>
      </Helmet>
      <section className="pt80">
        <Container>
          <Row className="gy-3 gx-5">
            <Col lg={8}>
              <h3 className="fs75 mb30 colorWhite fw500 mobFs33">
                We create websites and brands that are seen and heard. Loud and
                clear.
              </h3>
            </Col>
            <Col lg={4} className="position-relative">
              <div className="logoPos">
                <img
                  src={require("../../Assets/Img/about/transparent-logo.png")}
                  alt="banner"
                  className="img-fluid"
                />
              </div>
            </Col>

            <Col lg={12}>
              <div>
                <img
                  src={require("../../Assets/Img/about/banner_abt1.jpg")}
                  className="w-100 radius20"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
        </section>

      <section className="pt60 pb60">
      <Container>
          <Row className="gy-3 gx-5">
            <Col lg={4}>
              <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
                About <br />
                Company
             
                  
              </h3>
              <div>
                <Link className="btnRed mb0 mr15" to="/contact-us">
                       Start a Project
              </Link>
                </div>
            </Col>
            <Col lg={8}>
              <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
              Hello There! We are Pixbrand!
              </p>

              <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
              Making a business visible amidst competition is no mean feat. But this branding needs to be completely on point to ensure the right business growth. Pixbrand transforms any business profile with its Agile approach and technology used to deliver branding that is unheard of for business across niches.

              </p>

              <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
              We have been making dreams a reality since our inception in 2017.

              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <How />
      <section className="pt60 pb80">
        <Container>
          <Row className="gy-3 gx-5">
            <Col lg={6}>
              <div>
                <img
                  src={require("../../Assets/Img/about/abt1.jpg")}
                  alt="banner"
                  className="img-fluid radius20"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt60">
                <img
                  src={require("../../Assets/Img/about/abt2.jpg")}
                  alt="banner"
                  className="img-fluid radius20"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SeventeenToNow />

      {/* <Business />
      <Why />

      <What /> */}
      <Goal />
      <Superstars />
      <ContactUsSection/>
    </div>
  );
};

export default About;

const SeventeenToNow = () => {
  const [yearSec, setyearSec] = useState(new Date().getFullYear());

  return (
    <section className="pt60 pl30 pr40 pb60  mobPl0 mobPr0">
      <Container>
        <Row className="gy-5 gx-5 align-items-end mb60">
          <Col lg={6}>
            <p className="fs20 mb0 colorWhite fw500 mobFs33">
              {yearSec===2017 ? "Since" : "Now"}
            </p>
            <div>
              {yearSec===2017 ? (
                <img
                  src={require("../../Assets/Img/about/2017.svg").default}
                  className="img-fluid"
                  alt="2017"
                />
              ) : (
                <img
                  src={require("../../Assets/Img/about/2023.svg").default}
                  className="img-fluid"
                  alt="2017"
                />
              )}
            </div>
            <h3 className="fs40 mb30 mt20 colorWhite fw500 mobFs33">
              We enliven businesses by <br />
              perfect branding
            </h3>
            <p className="colorLightGrey mt40 fs18 mb0 mobFs15">
              We paint the bright future for the businesses working on digital
              landscapes and firmly believe in providing productive long-term
              business relationships.
            </p>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-wrap justify-content-end">
            <div className="btnWrapper">
            <button
                onClick={() => setyearSec(2017)}
                className={`${yearSec===2017 ? "activeYear" : "btnGrey"} btnRed mb0 pl50 pr50`}
                to="/#"
              >
                2017
              </button>
              <button
                onClick={() => setyearSec(new Date().getFullYear())}
                className={`${yearSec===new Date().getFullYear() ? "activeYear" : "btnGrey"} btnRed mb0 pl50 pr50`}
                to="/#"
              >
                {new Date().getFullYear()}
              </button>
            </div>
            
            </div>
          </Col>
        </Row>
        {yearSec ? (
          <div className="pt60 pl40 pr40 pb60 greyishBg radius20">
            <Row className="gy-3 gx-5 mobMb30 tabMb30">
              <Col lg={7}>
                <h3 className="fs40 mb0 colorRed fw500 mobFs33">
                March   2017
                </h3>
                <h3 className="fs40 mb20 colorWhite fw500 mobFs33">
                Planting Mind tree
                </h3>

                <p className="colorLightGrey mb30 mt40 fs22 mb0 mobFs15">
              We paint the bright future for the businesses working on digital
              landscapes and firmly believe in providing productive long-term
              business relationships.
            </p>
              </Col>
              <Col lg={5}>
                <div className="d-flex align-items-center mb10">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with 3 Engineers
                  </p>
                </div>

                <div className="d-flex align-items-center mb10">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with 200 Square Feet Office
                  </p>
                </div>
                <div className="d-flex align-items-center mb10">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with one programming language
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with 200 Square Feet Office
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="gy-3 gx-5 ">
              <Col lg={7}>
                <div>
                  <img
                    src={require("../../Assets/Img/about/year1.jpg")}
                    alt="banner"
                    className="w-100 radius20"
                  />
                </div>
              </Col>
              <Col lg={5}>
                <div>
                  <img
                    src={require("../../Assets/Img/about/year1.jpg")}
                    alt="banner"
                    className="w-100 radius20"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="pt60 pl40 pr40 pb60 greyishBg radius20">
            <Row className="gy-3 gx-5 ">
              <Col lg={7}>
                <h3 className="fs40 mb0 colorRed fw500 mobFs33">
                March   {new Date().getFullYear()}
                </h3>
                <h3 className="fs40 mb20 colorWhite fw500 mobFs33">
                Planting Mind tree
                </h3>

                <p className="colorLightGrey mb30 mt40 fs22 mb0 mobFs15">
              We paint the bright future for the businesses working on digital
              landscapes and firmly believe in providing productive long-term
              business relationships.
            </p>
              </Col>
              <Col lg={5}>
                <div className="d-flex align-items-center mb10">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with 3 Engineers
                  </p>
                </div>

                <div className="d-flex align-items-center mb10">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with 200 Square Feet Office
                  </p>
                </div>
                <div className="d-flex align-items-center mb10">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with one programming language
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  {Svg.RedCheckBox}
                  <p className="colorWhite fs18 fw500 mobFs15 mb0 ml10">
                  Started with 200 Square Feet Office
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="gy-3 gx-5 ">
              <Col lg={7}>
                <div>
                  <img
                    src={require("../../Assets/Img/about/year1.jpg")}
                    alt="banner"
                    className="w-100 radius20"
                  />
                </div>
              </Col>
              <Col lg={5}>
                <div>
                  <img
                    src={require("../../Assets/Img/about/year1.jpg")}
                    alt="banner"
                    className="w-100 radius20"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

//Title Section
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={8} lg={10} md={10}>
            <Slide bottom>
              <section className="text-center mobtl">
                <h1 className="fs80 mb24 mobMb10 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite ">
                  Experiences that Ensure Engagement
                  <sup className="colorRed ml5">*</sup>
                </h1>
                <p className="colorWhite fs22 mb0 mobFs18 tabFs18 tabLgFs18">
                  <sup className="colorRed">*</sup> And for the ones with grand
                  ambitions
                </p>
              </section>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const Slider = () => {
  return (
    <>
      <Container>
        <GSpacing mb="40px" mobmb="0px">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation={{clickable: true}} (Arrow)
            // pagination={{ clickable: true }}(Dots)
            loop={true}
            speed={2000}
            autoplay={{ delay: 1000 }}
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => {}}
            onSwiper={() => {}}
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 300,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              550: {
                width: 550,
                slidesPerView: 2,
              },
              992: {
                width: 992,
                slidesPerView: 3,
              },
              1201: {
                width: 1201,
                slidesPerView: 4,
              },
              1360: {
                width: 1360,
                slidesPerView: 4,
              },
            }}
          >
            <div className="bloggerList">
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="5px" src={Img.b1} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="5px" src={Img.b2} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="5px" src={Img.b3} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="5px" src={Img.b4} />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </GSpacing>
      </Container>
    </>
  );
};

const Business = () => {


  return (
    <section className="mb60 mobMb15">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <section className="text-center mb40 mobMb30">
              <Slide bottom>
                <p className="fs22 mobFs16 tabFs18 tabLgFs18  colorWhite mb20 mobMb10">
                  Hello There! We are Pixbrand!
                </p>
                <p className="fs22 mobFs16 tabFs18 tabLgFs18  colorWhite mb20 ">
                  Making a business visible amidst competition is no mean feat.
                  But this branding needs to be completely on point to ensure
                  the right business growth. Pixbrand transforms any business
                  profile with its Agile approach and technology used to deliver
                  branding that is unheard of for business across niches.
                </p>
                <p className="fs22 mobFs16 tabFs18 tabLgFs18  colorWhite mb40 mobMb15">
                  We have been making dreams a reality since our inception in
                  2017.
                </p>
                <div>
                  <button className="red-btn fs17 tabFs15 tabLgFs15 mobFs15  mobMb10">
                    Our PIX-Factors
                  </button>
                </div>
              </Slide>
            </section>
          </Col>
        </Row>

        <div className="position-relative h_145 dNoneXs lineView">
          {/* <span className="border_red"></span> */}
        </div>
      </Container>
    </section>
  );
};

// Why Section
const Why = () => {

  return (
    <>
      <Container className="mb80 mobMb60">
        <section className="text-center">
          <Slide bottom>
            <h1 className="fs60 tabFs40 tabLgFs40 mobFs24 mb40 mobMb10 fw600 colorWhite">
              The Why
            </h1>
            <p className="colorWhite fs22 mobFs18 tabFs18 tabLgFs18 mb40 mobMb15">
              We enliven businesses by perfect branding
            </p>
          </Slide>
        </section>
        <Row className="align-items-center colReverse mb30 mobMb0">
          <Col md={6}>
            <div>
              <Slide bottom>
                <img src={Img.why} alt="" className="w-100" />
              </Slide>
            </div>
          </Col>
          <Col md={6} className="mobMb15">
            <section className="ml40 mobMl0">
              <Slide bottom>
                <div className="mb40 mobMb20">
                  <h4 className="fs16 fw700 colorRed mb20 mobMb10">01</h4>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Perfect Branding is our essence
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Pixbrand was initiated and has now evolved into a
                    comprehensive branding agency where we love aiding
                    businesses in reaching their true potential.{" "}
                  </p>
                </div>
                <div className="mb40 mobMb20">
                  <h4 className="fs16 fw700 colorRed mb20 mobMb10">02</h4>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Services that Matter
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Branding, Mobile App Design, SEO, and Web Design are just
                    some of our services available round the clock for multiple
                    businesses and industries.
                  </p>
                </div>
                <div>
                  <h4 className="fs16 fw700 colorRed mb20">03</h4>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20">
                    Experience that Delivers
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    We might have been here for just four years, but we have
                    helped more than a hundred businesses in unleashing their
                    true potential.
                  </p>
                </div>
              </Slide>
            </section>
          </Col>
        </Row>

        <div className="position-relative h_145 dNoneXs lineView1"></div>
      </Container>
    </>
  );
};

// How Section
const How = () => {

  return (
    <section>
      <Container className="mb10 mobMb60">
        <Row>
          <Col lg={4} md={4}>
            <div className="mobMb20">
              <Slide bottom>
                <div className="mb20 mobMb10">
                  <img
                    src={require("../../Assets/Img/about/a1.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                Vision
                </h3>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                We paint the bright future for the businesses working on digital landscapes and firmly believe in providing productive long-term business relationships.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="mobMb20">
              <Slide bottom>
                <div className="mb20 mobMb10">
                  <img
                    src={require("../../Assets/Img/about/a2.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                Mission
                </h3>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                We paint the bright future for the businesses working on digital landscapes and firmly believe in providing productive long-term business relationships.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <div className="mb20 mobMb10">
                  <img
                    src={require("../../Assets/Img/about/a3.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                Values
                </h3>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb60 mobMb10">
                We paint the bright future for the businesses working on digital landscapes and firmly believe in providing productive long-term business relationships.
                </p>
              </Slide>
            </div>
          </Col>
        </Row>

        {/* <div className="position-relative h_145 dNoneXs lineView2"></div> */}
      </Container>
    </section>
  );
};

// What Section
const What = () => {
  return (
    <>
      <Container className="mb80 mobMb60">
        <Row className="justify-content-center">
          <Col lg={8}>
            <section className=" mobMb10 text-center">
              <Slide bottom>
                <h1 className="fs60 tabFs40 tabLgFs40 mobFs24 mb40 mobMb10 fw600 colorWhite">
                  The What
                </h1>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite width70 mx-auto mobWidth100 tabWidth100 tabLgWidth100 mb100 mobMb60">
                  Helping startups follow best practice, and helping big
                  businesses innovate like startups
                </p>
              </Slide>
              <div>
                {/* <Slide bottom>
                  <img src={Img.aboutan} alt="" className="w-100" />
                </Slide> */}
                <div className="position-relative heightVh80">
                  <div className="box_round_one">
                    <div className="round_box">
                      <img id="loading" src={Img.rounf} />
                      <h3 className="c-subscribe-box__title colorWhite fs22">
                        We Strategize
                      </h3>
                    </div>
                  </div>
                  <div className="box_round_two">
                    <div className="round_box">
                      <img id="loading1" src={Img.rounf} />
                      <h3 className="c-subscribe-box__title colorWhite fs22">
                        We Build
                      </h3>
                    </div>
                  </div>
                  <div className="box_round_three">
                    <div className="round_box">
                      <img id="loading2" src={Img.rounf} />
                      <h3 className="c-subscribe-box__title colorWhite fs22">
                        We Deliver
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Our Goal Section
const Goal = () => {
  return (
   <section className="pt40 pb20 mobPt40 mobPb40 mobPb0 mb80 mobMb60">
        <Container>
          <section className="">
            <Slide bottom>
         
              <Row className="justify-content-center mobJustifyContentStart">
                <Col lg={4} md={4} xs={6} className="mobMb15">
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite">
                  100+
                  </h2>
                  <h4 className="fs22 colorWhite mt15 mb15 tabFs15 tabLgFs15 mobFs18">
                  Satisfied Clients
                  </h4>
                  <p className="colorLightBlack fs18 mobFs15">
                  Helping various clients around the world by actualizing their idea and vision into real picture of a design both mobile and website
                  </p>
                </Col>
                <Col lg={4} md={4} xs={6} className="mobMb15">
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite">
                    15+
                  </h2>
                  <h4 className="fs22 colorWhite mt15 mb15 tabFs15 tabLgFs15 mobFs18">
                  Professional
                  </h4>
                  <p className="colorLightBlack fs18 mobFs15">
                  Filled by friendly and professionals handyman, we always try to provide our clients with best and user friendly product expereicnes
                  </p>
                </Col>
                <Col lg={4} md={4} xs={6} className="mobMb15">
                  <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite">
                  7 +
                  </h2>
                  <h4 className="fs22 colorWhite mt15 mb15 tabFs15 tabLgFs15 mobFs18">
                  Years of Operation
                  </h4>
                  <p className="colorLightBlack fs18 mobFs15">
                  This team was founded 1 year ago, however our members have their own related experience long before this team was formed
                  </p>
                </Col>
              
              </Row>
            </Slide>
          </section>
        </Container>
      </section>
  );
};

// Superstars Section
const Superstars = () => {
  return (
    <section className="greyishBg pt80 pb40">
  <Container>
        <section className="text-center">
          <Slide bottom>
            <p className="fs16 fw700 colorRed mb20 mobMb10">TEAM</p>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb60 mobMb30">
              We are superstars
            </h2>
          </Slide>
        </section>
        <section>
          <Row className="justify-content-center">
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section className="mt60 mobMt0">
                  <div>
                    <img src={Img.s1} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Jashpal Thakur
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Head of Digital Platform Engineering
                  </p>
                </section>
              </Slide>
            </Col>
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section>
                  <div>
                    <img src={Img.s2} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Sabrina Lonescu
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Head of Digital Platform Engineering
                  </p>
                </section>
              </Slide>
            </Col>
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section className="mt60 mobMt0">
                  <div>
                    <img src={Img.s3} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Sabrina Lonescu
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Head of Digital Platform Engineering
                  </p>
                </section>
              </Slide>
            </Col>
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section>
                  <div>
                    <img src={Img.s4} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Mahendrapal Thakur
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Head of Digital Platform Engineering
                  </p>
                </section>
              </Slide>
            </Col>
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section className="mt60 mobMt0">
                  <div>
                    <img src={Img.s5} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Sabrina Lonescu
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Head of Digital Platform Engineering
                  </p>
                </section>
              </Slide>
            </Col>
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section>
                  <div>
                    <img src={Img.s6} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Praveen Singh Solanki
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Senior UI/UX Designer
                  </p>
                </section>
              </Slide>
            </Col>
            <Col lg={3} xs={6} className="mb60 mobMb15">
              <Slide bottom>
                <section className="mt60 mobMt0">
                  <div>
                    <img src={Img.s7} alt="" className="w-100 radius20 mb15" />
                  </div>
                  <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb10">
                    Sabrina Lonescu
                  </h2>
                  <p className="fs16 tabFs13 tabLgFs13 mobFs13 colorLightBlack">
                    Head of Digital Platform Engineering
                  </p>
                </section>
              </Slide>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};
