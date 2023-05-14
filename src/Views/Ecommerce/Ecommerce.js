import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import Svg from "../../Assets/Svg/Svg";
import "./DigitalMarketing.css";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GSectionTitle from "../../Components/GComponents/GSectionTitle";
import Fade from "react-reveal/Fade";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";

const WrapperFaq = styled.div`
  background-color: #111;
`;
const Ecommerce = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DigitalMarketing - Pixbrand</title>
        <meta
          name="DigitalMarketing"
          content="Pixbrand DigitalMarketing"
        ></meta>
      </Helmet>

      <section className="ecommorceTop pt80 pb80">
      <Container className="position-relative d-flex align-items-center justify-content-center">
      <div className="position-absolute cuttedLogo">
        <img src={require('../../Assets/Img/ecommerce/cutlogo.png')} alt="" className="img-fluid" />
      </div>
      <Row className="mobReverse gx-5 gy-5">
          <Col lg={6} md={12}>
          <div className="d-flex flex-column justify-content-between h-100">
          <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
              <Slide bottom>Ecommerce Solution</Slide>
            </h1>

            <div className="tabbing">
            <Slide bottom>
            <p className="colorRed fs16 fw600">
            WHAT WE DO
            </p>
            <h3 className="fs40 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
            SkyRocket Your Brand with our E-commerce & Retail Solutions.
            </h3>
            </Slide>
         
            </div>
          </div>
          
          </Col>
          <Col lg={6} md={12}>
          <Slide right><img  src={require('../../Assets/Img/ecommerce/ecom.jpg')} alt="" className="img-fluid radius" /></Slide>

            
          </Col>
        </Row>
      </Container>
     
      </section>

      <section className="pt0 pb80">
      <Container className="position-relative d-flex align-items-center justify-content-center">
      <Row className="gx-5 gy-5">
          <Col lg={6} md={12}>
          <div className="prr30 ecommerceAcc">
                <Accordion>
                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        UX/UI DESIGN
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Web design has become the first point of contact for
                          businesses of all shapes and sizes. With the onslaught
                          of digital resources for customers, good web design
                          has become important for businesses. Here’s why-
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        E-COMMERCE DEVELOPMENT
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          A nicely done web design makes for a great first
                          impression on every visitor coming over to the
                          business site.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>HEADLESS COMMERCE</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Without a website, it will always be difficult to
                          ensure visibility amidst competition in search engine
                          results. A great web development company assists with
                          that.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        PLATFORM MIGRATION
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          With properly designed web pages, a business can
                          create a consistent brand across the entire website
                          profile. It helps in reducing the bounce rate of the
                          web pages too. These and many more are the reasons why
                          you should always pay a lot of attention to the web
                          design for your business- a place where we can help
                          you out.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        INTERNATIONAL EXPANSION
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <ul className="mb0 ">
                          <li className="colorPara mb10 fs17 tabFs15 tabLgFs15 mobFs15 ">
                            Web design - Web design in its essence, refers to
                            the abstract aspects of a website that determine its
                            overall usability. As far as web design is
                            concerned, the developers use different tools to
                            create varying templates for designing related
                            visual aspects within the website.
                          </li>
                          <li className="colorPara fs17 tabFs15 tabLgFs15 mobFs15 ">
                            Web Development - In web development, the developers
                            choose a design and then create a fully functional
                            website with the help of web creation tools like
                            CSS, Javascript, to enliven the design files and
                            create the right website.
                          </li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        B2B COMMERCE
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          At Pix Brand, we have been creating spectacular mobile
                          and web products since 2017. To ensure that we create
                          cross-platform applications and websites, we employ
                          the use of the latest technologies and development
                          frameworks which are then followed by intense testing
                          and Quality Assurance practices. The final product
                          coming at you is, expectedly, bug-free, smooth, and
                          sticks to our Pix mantra with perfection.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        E-COMMERCE STRATEGY
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Pix Brand takes its commitment to professionalism and
                          transparency very seriously, which is why after we
                          complete your website, we take you through all the
                          logs, credentials, and using all the other features of
                          the site. Despite that, we are always there for all
                          our clients, and that’s not just client support-
                          that’s our Pix Brand promise.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>
                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        TECHNICAL DISCOVERY
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Pix Brand takes its commitment to professionalism and
                          transparency very seriously, which is why after we
                          complete your website, we take you through all the
                          logs, credentials, and using all the other features of
                          the site. Despite that, we are always there for all
                          our clients, and that’s not just client support-
                          that’s our Pix Brand promise.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>
                </Accordion>
              </div>
          </Col>
          <Col>
            <p className="colorLightBlack fs20 mobFs15">
            Avex designs, builds & optimizes e-commerce channels for the world’s largest brands. Shopify Services that include strategy, UX design, platform migrations & headless commerce development. We build conversion-focused ecommerce stores on Shopify Plus.
            </p>

            <div className="mt50">
              <Link className="btnRed" to="/contact-us">
              Get In Touch
              </Link>
            </div>
          </Col>
          </Row>
      </Container>
      </section>

    
      <NeuroMarketing />
      <Slider />

    </div>
  );
};

export default Ecommerce;


// NeuroMarketing Section
const NeuroMarketing = () => {
  let NeuroData = [
    {
      svg: require("../../Assets/Img/ecommerce/eyeview.svg"),
      title: "Customer Satisfaction",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation!",
    },
    {
      svg: require("../../Assets/Img/ecommerce/bow.svg"),
      title: "Aglie Procedure",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation!",
    },
    ,
    {
      svg: require("../../Assets/Img/ecommerce/diamond.svg"),
      title: "Dedicated Teams",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation!",
    },
    {
      svg: require("../../Assets/Img/ecommerce/eyeview.svg"),
      title: "Integrity & Transparency",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation! ",
    },
    {
      svg: require("../../Assets/Img/ecommerce/bow.svg"),
      title: "Engagement Models",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation!",
    },
    {
      svg: require("../../Assets/Img/ecommerce/diamond.svg"),
      title: "Competitive Pricing",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation! ",
    }
  ];

  return (
    <>
      <Container className="mb60 mobMb40">
        <section className="text-center">
          <Slide bottom>
            <h3 className="fs16 colorRed fw700 mb20 mobMb10 text-uppercase">
            Why Choose US
            </h3>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb20 colorWhite width63 mobWidth100 tabWidth100 mx-auto">
            Why Choose Pixbrand for
Ecommerce Website Development
            </h2>
            <p className="colorLightBlack fs20 mobFs15 width63 mobWidth100 tabWidth100 mx-auto mb60">
            Being a well-known Ecommerce solution provider. Pixbrand is recognized for serving modern business needs and delivering the best-in-class solutions.
            </p>
          </Slide>
        </section>

        <Row>
          {NeuroData.map((obj, index) => {
            return (
              <Col md={4} className="mb40 mobMb20" key={index}>
                <section className="text-center">
                  <Slide bottom>
                    <div className="mb20 mobMb10">
                      <img
                        className="img-fluid"
                        src={obj.svg.default}
                        alt={obj.title}
                      />
                    </div>
                    <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                      {obj.title}
                    </h3>
                    <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                      {obj.desc}
                    </p>
                  </Slide>
                </section>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

// Slider
const Slider = () => {
  return (
    <section className="bgLightGrey pt100 pb100 mobPt40 mobPb40 mobPb0 mb100 mobMb60">
      <Container>
        <section className="mb40 mobMb20">
          <Slide bottom>
            <div className="bBottom pb20">
              <h3 className="fs16 colorRed fw700 mb20 mobMb10 text-uppercase">
                How we nail Digital Marketing
              </h3>
              <GAlign align="between" alignV="center" className="flex-wrap">
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb0 mobMb10 width68 mobWidth100 tabWidth100 ">
                  We follow a well-defined 5-step process that delivers
                  exceptional digital marketing results.
                </h2>
                <div className="">
                  <span>
                    <img
                      src={Img.leftarrow}
                      alt=""
                      className="img-fluid mr15"
                    />
                  </span>
                  <span>
                    <img src={Img.rightarrow} alt="" className="img-fluid" />
                  </span>
                </div>
              </GAlign>
            </div>
          </Slide>
        </section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          // autoplay={{ delay: 1000 }}
          spaceBetween={10}
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
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        require("../../Assets/Img/digital-market/sl-r1.svg")
                          .default
                      }
                      alt="Research"
                    />
                  </div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Research
                  </h3>
                  <p className="fs16 colorLightBlack mb0">
                    It is crucial to understand market trends and competitors
                    before developing a digital marketing strategy. Meticulous
                    research is where we begin.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        require("../../Assets/Img/digital-market/Positioning.svg")
                          .default
                      }
                      alt="Positioning"
                    />
                  </div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Positioning
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    Understanding market sentiments and the right brand position
                    has a lot to do with the long-term results of every digital
                    marketing campaign we execute. Delivers a better brand
                    message.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        require("../../Assets/Img/digital-market/Creative.svg")
                          .default
                      }
                      alt="Creative"
                    />
                  </div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Creative
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    To stand out from the rest, creativity plays a huge role and
                    our digital marketers know that best. Every design for
                    digital marketing has a strong underlying philosophy.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        require("../../Assets/Img/digital-market/Marketing.svg")
                          .default
                      }
                      alt="Marketing"
                    />
                  </div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Marketing
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    After everything, it’s essential to take the prepared
                    resources to the right target audiences, made possible with
                    our customized digital marketing services.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        require("../../Assets/Img/digital-market/Marketing.svg")
                          .default
                      }
                      alt="Management"
                    />
                  </div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Management
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                    For digital marketing to keep delivering results on a
                    consistent basis, our digital marketing experts take their
                    own sweet time managing existing campaigns so that results
                    are always measurable.
                  </p>
                </section>
              </section>
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};


const Faq = () => {
  return (
    <div>
      <WrapperFaq className="pt80 pb100">
        <Container className="overflow-hidden">
          <Fade bottom >
            <div>
              <GSectionTitle
                titlecolor="#fff"
                maxWidth="90%"
                fsT="40px"
                fsSubT="22px"
                fsTitleMob="33px"
                subtitlecolor="#fff"
                title="Frequently asked questions"   
              />
            </div>
          </Fade>

          <Row className="mt25 mobMt0 gx-5">
            <Col lg={7} md={7}>
              <div className="prr30">
                <Accordion>
                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How a good web design helps businesses?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Web design has become the first point of contact for
                          businesses of all shapes and sizes. With the onslaught
                          of digital resources for customers, good web design
                          has become important for businesses. Here’s why-
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Perfect First Impression
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          A nicely done web design makes for a great first
                          impression on every visitor coming over to the
                          business site.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>Better SEO</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Without a website, it will always be difficult to
                          ensure visibility amidst competition in search engine
                          results. A great web development company assists with
                          that.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Better Consistency
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          With properly designed web pages, a business can
                          create a consistent brand across the entire website
                          profile. It helps in reducing the bounce rate of the
                          web pages too. These and many more are the reasons why
                          you should always pay a lot of attention to the web
                          design for your business- a place where we can help
                          you out.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is the difference between web design and web
                          development?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <ul className="mb0 ">
                          <li className="colorPara mb10 fs17 tabFs15 tabLgFs15 mobFs15 ">
                            Web design - Web design in its essence, refers to
                            the abstract aspects of a website that determine its
                            overall usability. As far as web design is
                            concerned, the developers use different tools to
                            create varying templates for designing related
                            visual aspects within the website.
                          </li>
                          <li className="colorPara fs17 tabFs15 tabLgFs15 mobFs15 ">
                            Web Development - In web development, the developers
                            choose a design and then create a fully functional
                            website with the help of web creation tools like
                            CSS, Javascript, to enliven the design files and
                            create the right website.
                          </li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Are our websites mobile responsive?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          At Pix Brand, we have been creating spectacular mobile
                          and web products since 2017. To ensure that we create
                          cross-platform applications and websites, we employ
                          the use of the latest technologies and development
                          frameworks which are then followed by intense testing
                          and Quality Assurance practices. The final product
                          coming at you is, expectedly, bug-free, smooth, and
                          sticks to our Pix mantra with perfection.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>

                  <Fade bottom >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Can I get access to the website after it is finished?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="fs17 tabFs15 tabLgFs15 mobFs15 ">
                          Pix Brand takes its commitment to professionalism and
                          transparency very seriously, which is why after we
                          complete your website, we take you through all the
                          logs, credentials, and using all the other features of
                          the site. Despite that, we are always there for all
                          our clients, and that’s not just client support-
                          that’s our Pix Brand promise.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Fade>
                </Accordion>
              </div>
            </Col>
            <Col lg={5} md={5} className="dNoneXs">
              <Row className="justify-content-right text-end mb28">
                <Col lg={2}></Col>
                <Col lg={10}>
                  <Fade bottom >
                    <GImage src={Img.faq1} radius="10px" />
                  </Fade>
                </Col>
              </Row>
              <Row className="justify-content-right text-end">
                <Col lg={4} md={4}>
                  <Fade bottom >
                    <GImage src={Img.faq2} radius="10px" />
                  </Fade>
                </Col>
                <Col lg={8} md={8}>
                <Fade bottom >
                  <GImage src={Img.faq3} width="100%" radius="10px" />
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </WrapperFaq>
    </div>
  );
};


