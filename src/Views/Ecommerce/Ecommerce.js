import React, { useEffect, useState } from "react";
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
import ContactUsSection from "../Home/ContactUsSection";
import axios from "axios";
import { allportfolio } from "../../Helpers/Api/Endpoint";

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
      
      <Slider />
      <ContactRed/>
<RetailSection/>
    
      <NeuroMarketing />
     
      <div className="mb60">
      <ContactUsSection/>
      </div>
  
    </div>
  );
};

export default Ecommerce;

const RetailSection=()=>{
  const list=['Seamless UI','E-Catalogues','Complete security includes transactions and payment','Multi-Currency','Order tracking','Product reviews','Products Gallery','Personalised option to send offers, sale and other announcements','Reports & analytics','Multilingual support','Store-map for holistic shopping experience','Simple inventory management','User-friendly app navigation','Price check, product availability, price comparison','Highly secured payment methods','Unlimited products & categories','Advanced products search criteria/filters','Display and track shopping items','Easy shopping cart administration']
  return <section>
    <Container>
      <div className="greyishBg radius20 pl40 pr40 pt60 pb60">
      <h6 className="colorRed mb20 fs16 mobFs14 tabFs14 tabLgFs14 text-uppercase">COMMON FEATURES</h6>
      <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb20 colorWhite">
      Retail Mobile App
            </h2>
            <p className="colorLightBlack fs20 mobFs15 mb50">
            In order to give your customers’ best digital experience, we design and develop ecommerce mobile apps that give your users engaging and real time shopping experience as well as helps to retain and allure them to revisit your app frequently. Our ecommerce mobile apps help your business to create an online marketplace to attract multiple vendors to online sell their different product brands.
            </p>
            <Row className="gy-3">
              {list.map((e, i) => (
                <Col key={i} lg={4} md={6}>
                  <div className="d-flex">
                    <span style={{width: '25px'}}>{Svg.CircleCheck}</span>
                    <p className="colorLightGrey fs18 fw500 mobFs15 mb0 ml10">
                      {e}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>

      </div>
    </Container>
  </section>
}
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
      <Container className="pt80 mobMb40">
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
    <section className="pt0  mobPb0  mobMb60">
      <Container>
        <section className="mb40 mobMb20">
          <Slide bottom>
            <div className="bTopGrey pt60 pb20">
              <GAlign align="between" alignV="center" className="flex-wrap">
                <h2 className="fs40 tabFs28 mobMb30 tabLgFs28 mobFs24 tabMb30 colorWhite width68 mobWidth100 tabWidth100 ">
                Featured E-Commerce Work
                </h2>

                <div className="">
                <Link className="btnTransparent" to="/portfolio">
                View All Projects <span className="ml10">{Svg.arrowRight}</span> 
                </Link>
            
                </div>
              </GAlign>
            </div>
          </Slide>
        </section>
        <Swiper
             modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={true}
          spaceBetween={30}
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
              slidesPerView: 3,
            },
            1360: {
              width: 1360,
              slidesPerView: 3,
            },
          }}
        >
         
          {postData.length > 0 &&
                postData?.map((e, i) => {
                
                   return  <SwiperSlide key={i}>
                    <div className="protfolioWrapper position-realtive d-flex justify-content-center align-items-center pBgLightBlue radius24 overflow-hidden mb-4">
                            <GImage
                              className="scale"
                              width="100%"
                              src={
                                e?.x_featured_media_large
                                  ? e?.x_featured_media_large
                                  : Img.p1
                              }
                            />
                            <Link
                              to={`/portfolio/${e?.slug}`}
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
                                to={`/portfolio/${e?.slug}`}
                                className="colorWhite"
                              >
                                {e.acf === false ? "" : e?.acf?.project_title}
                              </Link>
                            </h6>
                            <p className="colorLightBlack fs18 tabFs24 tabLgFs24 mobFs18 mb36">
                              {e?.title?.rendered}
                            </p>
                          </div>
                          </SwiperSlide>
             
                
                })}
      
        
         
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


const ContactRed=()=>{
  return <section className="mb80 discuss">
    <Container>

      <div className="d-flex align-items-center position-relative justify-content-center">
      <img className="radius20 w-100" src={require('../../Assets/Img/ecommerce/redBg.png')} alt="red bg"/>
      <div className="position-absolute pl10 pr10 text-center">
      <Row className="justify-content-center">
      <Col lg={8} md={12}>
      <h3 className="mb20 colorWhite fs30 fw500">

      Let's Discuss Your Project
      </h3>
      <p className="mb40 colorWhite fs17 fw500">
      Get free consultation and let us know your project idea to turn it into an amazing digital product.
      </p>
      </Col>
    </Row>
      <div><Link className="btnTransparent" to="/contact-us">Get In Touch</Link></div></div>
      </div>
  
    
    </Container>
  </section>
}