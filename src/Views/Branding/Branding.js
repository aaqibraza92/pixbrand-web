import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import Svg from "../../Assets/Svg/Svg";
import GButton from "../../Components/GComponents/GButton";
import "./SingleServicePage.css";
import Services3 from "../Home/Services3";
import ImageTab from "../TabAndContent/ImageTab";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import { useState } from "react";
import styled from "styled-components";

const Branding = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Desing Services - Pixbrand</title>
        <meta
          name="Web Desing Services"
          content="Pixbrand Web Desing Services"
        ></meta>
      </Helmet>
      <Title />
      <SingleServiceSlider />
      <Invent />
      <Benefit />
      
   
      <Invent2/>
      {/* <Pixels /> */}
      {/* <Planning /> */}
      {/* <Prototyping /> */}
      {/* <Collaborate /> */}
      {/* <ImageTab /> */}
      {/* <Started /> */}

      {/* <DesignServiceHeading /> */}
      <Skills />
      {/* <Services3 /> */}

      <BrandingProcess />
    </div>
  );
};

export default Branding;

const BrandingProcess = () => {
  const [process, setprocess] = useState("pr1");
  const [process2, setprocess2] = useState(false);
  const [process3, setprocess3] = useState(false);
  const [process4, setprocess4] = useState(false);

  const slide2=()=>{
    setprocess("pr2");
    setprocess2(true);
    setTimeout(()=>{
      if(process==="pr2"){
        setprocess3(false);
        setprocess4(false);
      }
    },200)
   
  }
  return (
    <section className="pt80 pb80"> 
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={7} md={12}>
            <div className="text-center">
              <h3 className="fs40 mb0 colorWhite fw500 mobFs33">
                Our Branding Process
              </h3>
              <p className="colorLightGrey mt20 fs18 mb30 mobFs15">
                The execution of a rightly formulated brand strategy is going to
                make all the difference in the world when it means doing
                something truly amazing.
              </p>
            </div>
          </Col>
        </Row>
      

        <div className="triggerArea position-relative mt30">
          <Row className="align-items-center justify-content-center">
            <Col lg={3} md={6}>
              <div className="trigWrapper " onClick={() => setprocess("pr1")}>
                <div className="text-center">
                  <img
                    src={require("../../Assets/Img/branding/pr1.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                  
                </div>
                <h6 className="fs20 mb30 text-center mt20 colorWhite fw500 mobFs33">
                Discovery
                </h6>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="trigWrapper " onClick={() =>slide2() }>
                <div className="text-center">
                {
                  process2 ?    <img
                    src={require("../../Assets/Img/branding/pr2.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  /> :   <img
                    src={require("../../Assets/Img/branding/p2.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                }
                
                  
                </div>
                <h6 className="fs20 mb30 text-center mt20 colorWhite fw500 mobFs33">
                Research & Strategizing
                </h6>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="trigWrapper " onClick={() => {setprocess("pr3"); setprocess3(true)}}>
                <div className="text-center">
                {
                  process3 ?    <img
                    src={require("../../Assets/Img/branding/pr3.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  /> :     <img
                    src={require("../../Assets/Img/branding/p3.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                }
                 
                    
                </div>
                <h6 className="fs20 mb30 text-center mt20 colorWhite fw500 mobFs33">
                Media Tactics
                </h6>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="trigWrapper " onClick={() => {setprocess("pr4"); setprocess4(true)}}>
                <div className="text-center">
                {
                  process4 ?    <img
                    src={require("../../Assets/Img/branding/pr4.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  /> :         <img
                    src={require("../../Assets/Img/branding/p4.svg").default}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                }

                 
                    
                </div>
                <h6 className="fs20 mb30 text-center mt20 colorWhite fw500 mobFs33">
                Analyze & Tweak
                </h6>
              </div>
            </Col>
          </Row>
        </div>
        <div className="contentArea">
          {process === "pr1" && (
            <Slide right>
            <Row className="gy-3 gx-5 align-items-center">
              <Col lg={4}>
                <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
                  1 Don’t think of us as
                </h3>
                <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, modi. Molestiae vel quasi quibusdam explicabo eveniet
                  nihil reprehenderit facere! Consequatur
                </p>
              </Col>
              <Col lg={8}>
                <div className="mt40">
                  <img
                    src={require("../../Assets/Img/branding/cnt1.jpg")}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                </div>
              </Col>
            </Row>
            </Slide>
          )}

          {process === "pr2" && (
            <Slide right>
            <Row className="gy-3 gx-5 align-items-center">
              <Col lg={4}>
                <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
                  2 Don’t think of us as
                </h3>
                <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, modi. Molestiae vel quasi quibusdam explicabo eveniet
                  nihil reprehenderit facere! Consequatur
                </p>
              </Col>
              <Col lg={8}>
                <div className="mt40">
                  <img
                    src={require("../../Assets/Img/branding/cnt1.jpg")}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                </div>
              </Col>
            </Row>
            </Slide>
         
          )}

          {process === "pr3" && (
            <Slide right>
            <Row className="gy-3 gx-5 align-items-center">
              <Col lg={4}>
                <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
                 3 Don’t think of us as
                </h3>
                <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, modi. Molestiae vel quasi quibusdam explicabo eveniet
                  nihil reprehenderit facere! Consequatur
                </p>
              </Col>
              <Col lg={8}>
                <div className="mt40">
                  <img
                    src={require("../../Assets/Img/branding/cnt1.jpg")}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                </div>
              </Col>
            </Row>
            </Slide>
           
          )}

          {process === "pr4" && (
            <Slide right>
            <Row className="gy-3 gx-5 align-items-center">
              <Col lg={4}>
                <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
                 4 Don’t think of us as
                </h3>
                <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, modi. Molestiae vel quasi quibusdam explicabo eveniet
                  nihil reprehenderit facere! Consequatur
                </p>
              </Col>
              <Col lg={8}>
                <div className="mt40">
                  <img
                    src={require("../../Assets/Img/branding/cnt1.jpg")}
                    alt="banner"
                    className="img-fluid radius20"
                  />
                </div>
              </Col>
            </Row>
            </Slide>
         
          )}
        </div>
      </Container>
    </section>
  );
};
// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={8} lg={8} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                <Slide bottom>Helping You Become the Brand You Always Aspire to be</Slide>
              </h1>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const SingleServiceSlider = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <section className="dynam_pad_left">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={2000}
            autoplay={{ delay: 1000 }}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={() => {}}
            className="mb40 mobMb20"
            //   breakpoints={{
            //     // when window width is >= 640px
            //     300: {
            //       width: 300,
            //       slidesPerView: 1,
            //     },
            //     // when window width is >= 768px
            //     550: {
            //       width: 550,
            //       slidesPerView: 2,
            //     },
            //     992: {
            //       width: 992,
            //       slidesPerView: 3,
            //     },
            //     1201: {
            //       width: 1201,
            //       slidesPerView: 4,
            //     },
            //     1360: {
            //       width: 1360,
            //       slidesPerView: 4,
            //     },
            //   }}
          >
            <div className="bloggerList">
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={require('../../Assets/Img/branding/brand.jpg')} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb15">
                  <GImage radius="24px" radiusMob="15px" src={Img.Game} />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </section>
        <Slide bottom>
          <section className="bBottom pb100 mobPb20 tabPb80">
            <GAlign
              align="between"
              alignV="center"
              mobWrap="wrap"
              tabWrap="wrap"
            >
              <div>
                <h4 className="fs17 tabFs15 tabLgFs15 mobFs15 colorWhite mb20 mobMb10">
                Bluebix Solutions Inc
                </h4>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorLightBlack mb0 mobMb10">
                Bluebix complete branding design
                </h2>
              </div>
              <div>
                <span className="fs14 tabFs13 tabLgFs13 mobFs13 colorWhite mr15">
                View branding
                </span>
                <span className="arrow-circle">
                  {Svg.arrowwithLightBground}
                </span>
              </div>
            </GAlign>
          </section>
        </Slide>
      </Container>
    </>
  );
};

const Benefit = () => {
  let data = [
    {
      sno: "01",
      title: "Better Client Retention",
      para: "When branding is done right, your clients don’t need further motivation to keep coming back to you. Our branding makes that happen for you.",
    },
    {
      sno: "02",
      title: "Engaging The Teams",
      para: "Given how meticulous the process of branding is, it also acts as a creative outlet for different teams to provide their inputs and keep your operational efficiency high.",
    },
    {
      sno: "03",
      title: "Wider Appeal",
      para: "Branding allows you to connect with a larger audience and the acceptance of your product and service becomes more pronounced too. This makes you big!",
    },
  ];
  return (
    <section className="pt60 pb60">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={7} md={12}>
            <div className="text-center">
              <h3 className="fs40 mb0 colorWhite fw500 mobFs33">
                Benefits of Branding with Pix Brand
              </h3>
              <p className="colorLightGrey mt20 fs18 mb30 mobFs15">
                Creating the right connection with your customers is the essence
                of the right branding. Pix Brand brings multiple benefits for
                you with its branding suite-
              </p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center gy-3 gx-5">
          <Col lg={6} md={12}>
            <Slide bottom>
              <img
                src={require("../../Assets/Img/branding/brand-left2.png")}
                alt=""
                className="img-fluid"
              />
            </Slide>
          </Col>

          <Col lg={6} md={12}>
            {data.map((e, i) => (
              <div className="mb30" key={i}>
                <p className="fs16 mb0 colorRed fw500 mobFs14">{e.sno}</p>
                <h3 className="fs20 mb0 colorWhite fw500 mobFs18">{e.title}</h3>
                <p className="colorLightGrey mt20 fs17 mb30 mobFs15">
                  {e.para}
                </p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
// Invent
const Invent = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6} className="mobMb15">
            <div>
              <Slide bottom>
                <img
                  src={require("../../Assets/Img/branding/brand-left.png")}
                  alt=""
                  className="w-100"
                />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width85 mobWidth100 tabWidth100 tabLgWidth100">
                Designing the Right Branding Strategy for You
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                If you always dreamt of creating a brand of your business setup, Pix Brand can be your perfect branding partner. Tap into markets in a consolidated manner with ease.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                Our branding solutions help you define your organization in the best way possible-
                </p>
                <ul className="noUl mobile-ul fs17 tabFs15 tabLgFs15 mobFs15">
                  <li className=" colorLightBlack mb10 ml11">Brand identity</li>
                  <li className=" colorLightBlack mb10 ml11">
                  Brand Strategy
                  </li>
                  <li className=" colorLightBlack mb10 ml11">
                  Brand Positioning
                  </li>
                  <li className=" colorLightBlack ml11">
                  Brand Guide
                  </li>
                </ul>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Invent2 = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
        <Col md={6}>
            <section className="mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 width85 mobWidth100 tabWidth100 tabLgWidth100">
                Design and Deliver the Perfect Brand Message
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                Our experts have a lot of experience in offering bespoke branding services. Embrace accelerated growth with our impeccable tools.
                </p>
           
                <ul className="noUl mobile-ul fs17 tabFs15 tabLgFs15 mobFs15">
                  <li className=" colorLightBlack mb10 ml11">Logos</li>
                  <li className=" colorLightBlack mb10 ml11">
                  Lead Magnets
                  </li>
                  <li className=" colorLightBlack mb10 ml11">
                  Social Media Branding
                  </li>
                  <li className=" colorLightBlack ml11">
                  Target Messaging
                  </li>
                  <li className=" colorLightBlack mb10 ml11">
                  Brand Guide
                  </li>
                  <li className=" colorLightBlack ml11">
                  Business Asset Branding
                  </li>
                </ul>
              </Slide>
            </section>
          </Col>
          <Col md={6} className="mobMb15">
            <div>
              <Slide bottom>
                <img
                  src={require("../../Assets/Img/branding/brand_right.png")}
                  alt=""
                  className="w-100"
                />
              </Slide>
            </div>
          </Col>
       
        </Row>
      </Container>
    </>
  );
};

// Pixels
const Pixels = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <section>
          <Slide bottom>
            <div className="width41 mobWidth100 tabWidth100 ">
              <h2 className="fs70 tabFs60 tabLgFs60 mobFs45 colorWhite mb0 mobMb10 mb15Tab">
                We turn pixels into products
              </h2>
            </div>
            <GAlign align="right">
              <div className="width53 mobWidth100 tabWidth100  mb40 mobMb20">
                <h2 className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb0">
                  We specialize in designing SaaS applications. From complex to
                  simple and from simple to breathtaking – we help you create a
                  product from start to finish.
                </h2>
              </div>
            </GAlign>
          </Slide>
        </section>
        <Row className="align-items-center">
          <div>
            <Slide bottom>
              <img src={Img.brief} alt="" className="w-100" />{" "}
            </Slide>
          </div>
        </Row>
      </Container>
    </>
  );
};

// Planning
const Planning = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center mb60 mobMb30">
          <Col lg={6} sm={6}>
            <div className="width70 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h3 className="fs16 mb20 mobMb10 fw700 colorRed">PLAN</h3>
                <h2 className="fs32 tabFs20 tabLgFs20 mobFs18 colorWhite mb0 mobMb10">
                  With a planning stage in the product design, you want to
                  understand people's pains and how other products solve or
                  don't solve them. We do research to make your product the best
                  possible solution.
                </h2>
              </Slide>
            </div>
          </Col>
          <Col lg={6} sm={6}>
            <div>
              <Slide bottom>
                <img
                  src={Img.btngroup1}
                  alt=""
                  className="h275 ml40 mobMl0 ml0Tab mobWidth100"
                />
              </Slide>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  01.
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                  Through stakeholder interviews, user research, and competitive
                  analysis we come up with design assumptions.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  02
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                  Then we sum up those assumptions and share them with the whole
                  product team in the form of customer journeys and user flows.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  03
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15  colorLightBlack mb0">
                  We brainstorm possible solutions, create quick hand-drawn
                  paper sketches and from there, build wireframes.
                </p>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Prototyping
const Prototyping = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="mb60 mobMb30 align-items-center flexreverse">
          <Col lg={6} md={6}>
            <div>
              <Slide bottom>
                <img src={Img.btngroup2} alt="" className="h275 mobWidth100" />
              </Slide>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="width70 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h3 className="fs16 mb20 mobMb10 fw700 colorRed">ITERATE</h3>
                <h2 className="fs32 tabFs20 tabLgFs20 mobFs18 mb0  mobMb10 colorWhite">
                  Since we're in the product design, continuous iterations and
                  testing are going to be our daily routines. You want your app
                  to provide the best user experience, so we're going to
                  discover what this means.
                </h2>
              </Slide>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  01
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  The visual design of your product is as important as the UX.
                  We do visual research and share our findings via a moodboard.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  02
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  Time to turn wireframes into clickable prototypes! Prototypes
                  are a quick way to test your product with real people.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  03
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  User testing gives us the feedback we need to iterate on the
                  prototype. Then we'll test it again, and then again, and
                  then...you get it.
                </p>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Collaborate
const Collaborate = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="mb60 mobMb30 align-items-center">
          <Col md={6}>
            <div className="width70 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h3 className="fs16 fw700 colorRed">Collaborate</h3>
                <h2 className="fs32 tabFs20 tabLgFs20 mobFs18 colorWhite mb0 mobMb10">
                  One great product designer is good. One great product team is
                  better. We collaborate with your team on every stage of
                  product development including usability testing, user
                  interviews, & analysis.{" "}
                </h2>
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <Slide bottom>
                <img
                  src={Img.btngroup3}
                  alt=""
                  className="h275 ml40 mobMl0 ml0Tab mobWidth100"
                />{" "}
              </Slide>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  01
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  When the design is good and ready, we'll hand it off to
                  developers making sure they have no questions regarding the
                  implementation.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  02
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  If you want to scale, we will help you build a design system.
                  We will also do UX audits to pinpoint any flows when the
                  product is live.
                </p>
              </Slide>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div>
              <Slide bottom>
                <h2 className="fs20 tabFs16 tabLgFs16 mobFs16 mb20 mobMb10 colorWhite">
                  03
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                  From proof-of-concept prototyping to complete web solutions –
                  we bring our expertise in all stages of product development.{" "}
                </p>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Started
const Started = () => {

  return (
    <>
      <section className="bgLightGrey pt100 pb100 tabPt80 tabPb80 mobPt60 mobPb60 mb100 mobMb60">
        <Container>
          <section className="text-center">
            <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 fw700 colorWhite mb40 mobMb20 ">
              <Slide bottom> Ready to get started? </Slide>
            </h1>
            <h3 className="fs22 mobFs18 tabFs18 tabLgFs18 colorWhite mb40 mobMb20">
              <Slide bottom>
                Get a product designer or a team of designers.{" "}
              </Slide>
            </h3>
            <div className="position-relative h_145 dNoneXs lineView3"></div>

            <h3 className="fs16 colorRed mb10 mt30 mobMt0 fw700">
              <Slide bottom>Step 1 </Slide>
            </h3>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
              <Slide bottom> Fill out the brief. </Slide>
            </h3>
            <div className="position-relative h_145 dNoneXs lineView3"></div>

            <h3 className="fs16 colorRed mb10 mt30 mobMt0 fw700">
              <Slide bottom>Step 2 </Slide>
            </h3>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
              <Slide bottom> Get a designer </Slide>
            </h3>
            <div className="position-relative h_145 dNoneXs lineView3"></div>

            <h3 className="fs16 colorRed mb10 mt30 mobMt0 fw700">
              <Slide bottom>Step 3 </Slide>
            </h3>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb40 mobMb20">
              <Slide bottom>Start your project </Slide>
            </h3>
            <Slide bottom>
              <GButton
                bgColor="#FF0A2B"
                color="#fff"
                pl="35px"
                pr="35px"
                hoverBg="#FF0A2B"
                hoveColor="#fff"
                borderRadius="45px"
              >
                Fill out the brief
              </GButton>{" "}
            </Slide>
          </section>
        </Container>
      </section>
    </>
  );
};

// More design services from pixbrand
const DesignServiceHeading = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <section className="text-center">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10 ">
                  More design services from pixbrand
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb40 mobMb20 width76 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                  The more meaningful the design, the more is its relatability
                  with every user. For long-term success, this is something
                  vitally important.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};


const WrapperSkills = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  background: #111111; /* Old browsers */
  background: -moz-linear-gradient(
    to right,
    #111 33%,
    #191919 20%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    to right,
    #111 33%,
    #191919 20%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #111 33%, #191919 20%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#111111', endColorstr='#707070',GradientType=1 ); /* IE6-9 */
  @media only screen and (max-width: 767px) {
    background: none;
    .tabMobView {
      background: #191919;
      padding: 50px 35px;
      margin-top: 20px;
    }
  }
  h3 {
    padding-bottom: 10px;
  }
  .verticalTrigger1 {
    border-bottom: 1px solid transparent;
  }
  .activeTabVer {
    border-color: #fff;
  }
  .verticalTrigger1 {
    display: inline-block;
    padding-bottom: 5px !important;
  }
  .runningLine::after {
    background: #fff;
  }
`;

const Skills = () => {
  const [verticalTab, setverticalTab] = useState("v0");
  const handleTab = (ind) => {
    setverticalTab(ind);
  };
  return (
    <>
      <div>
        <WrapperSkills>
          <Container>
            <Slide bottom>
              <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb100 mobMb15 lineAnimateSkill">
                We make you stand with PIX
              </h3>
            </Slide>

            <div
              id="demo"
              className="sliderTab carousel slide vert"
             data-ride="carousel"
              data-interval="6000"
            >
              <div className="row no-gutters">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <div className="verticalTabbing">
                    <div className="carousel-indicators text-start">
                      <div
                        data-target="#demo"
                        data-slide-to="0"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                          Brand Strategy
                        </span>
                      </div>
                      <div
                        data-target="#demo"
                        data-slide-to="1"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                          Brand Positioning
                        </span>
                      </div>
                      <div
                        data-target="#demo"
                        data-slide-to="2"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                          Brand Architecture
                        </span>
                      </div>
                      <div
                        data-target="#demo"
                        data-slide-to="2"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                         Brand Identity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                          Understanding the long-term implications of branding, we create result-driven brand strategy that allows users becoming loyal to using your brand’s products or services over a considerable period of time.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                    <div className="carousel-item">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                     At the end of the day, it is the right set of ideas that need to be thought upon to deliver something unique and cutting-edge, every single time. This is what we strive to do at Pix Brand.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                    <div className="carousel-item">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                   For us, it's Xcellence, because we ensure to bring the X-factor in everyday excellence. It's important to help you stay ahead of whichever domain you belong to, and this counts in the long-term.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                    <div className="carousel-item">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                   For us, it's Xcellence, because we ensure to bring the X-factor in everyday excellence. It's important to help you stay ahead of whichever domain you belong to, and this counts in the long-term.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </Container>
        </WrapperSkills>
      </div>
    </>
  );
};
