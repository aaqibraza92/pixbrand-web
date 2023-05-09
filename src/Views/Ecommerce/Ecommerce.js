import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import GAlign from "../../Components/GComponents/GAlign";
import Svg from "../../Assets/Svg/Svg";
import "./DigitalMarketing.css";
import Services3 from "../Home/Services3";
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

      <section className="ecommorceTop">
      <Container>
      <Row className="mobReverse">
          <Col lg={6} md={12}>
            <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
              <Slide bottom>Ecommerce Solution</Slide>
            </h1>

            <div className="tabbing">
            <p className="colorRed fs16 fw600">
            WHAT WE DO
            </p>
            <h3 className="fs40 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
            SkyRocket Your Brand with our E-commerce & Retail Solutions.
            </h3>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <img  src={require('../../Assets/Img/digital-market/digi-banner.jpg')} alt="" className="img-fluid radius" />
          </Col>
        </Row>
      </Container>
     
      </section>

      <DigitalMarketingSlider />
      <Perceptions />
      <NeuroMarketing />
      <Slider />
      <How />

      <section>
        <div className="text-center mb50">
          <Row className="justify-content-center">
            <Col lg={5}>
              <h3 className="colorWhite fs40 ">
                More design services from pixbrand
              </h3>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                We offer the whole package of product design services so you
                could cover all your design needs in one place.
              </p>
            </Col>
          </Row>
        </div>
        <Services3 />
      </section>
    </div>
  );
};

export default Ecommerce;

// Slider
const DigitalMarketingSlider = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <section>
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
                <div>
                  <GImage
                    width="100%"
                    radius="24px"
                    radiusMob="15px"
                    src={require("../../Assets/Img/digital-market/digi-banner.jpg")}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage
                    width="100%"
                    radius="24px"
                    radiusMob="15px"
                    src={Img.digital}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage
                    width="100%"
                    radius="24px"
                    radiusMob="15px"
                    src={Img.digital}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage
                    width="100%"
                    radius="24px"
                    radiusMob="15px"
                    src={Img.digital}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <GImage
                    width="100%"
                    radius="24px"
                    radiusMob="15px"
                    src={Img.digital}
                  />
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
                  Bakim Randevu
                </h4>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorLightBlack mb0 mobMb10">
                  Bakim Randevu Salon platform Case Study
                </h2>
              </div>
              <div>
                <span className="fs14 tabFs13 tabLgFs13 mobFs13 colorWhite mr15">
                  View case study
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

// Perceptions
const Perceptions = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
              <Slide bottom>
                <img
                  src={require("../../Assets/Img/digital-market/Retention.png")}
                  alt=""
                  className="w-100"
                />
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <section className="ml90 mobMl0 ml0Tab mobMb10">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                  Developing the Right Retention Measures & Solutions
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                  To differentiate the right marketing from just marketing, our
                  digital marketing experts at Pix Brand focus on delivering
                  measurable results for enhancing your digital visibility
                  across the virtual ecosystem.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                  The results of our digital marketing campaign are built to
                  last and offer more for your investment than any other
                  marketing process. With our branding expertise, we incorporate
                  digital marketing from the very first day, so that it all
                  comes together seamlessly.
                </p>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// NeuroMarketing Section
const NeuroMarketing = () => {
  let NeuroData = [
    {
      svg: require("../../Assets/Img/digital-market/mail.svg"),
      title: "Mail Marketing",
      desc: "Take your brand to the right audiences by reaching their inboxes through customized mails for the right pitch and impact. ",
    },
    {
      svg: require("../../Assets/Img/digital-market/search.svg"),
      title: "Search Engine Optimization",
      desc: "We have mastered the SEO process, helping you rank better and more dominantly on search engines with 100% organic results. ",
    },
    ,
    {
      svg: require("../../Assets/Img/digital-market/AffiliateMarketing.svg"),
      title: "Affiliated Marketing",
      desc: "Pix Brand helps you earn and assist your marketing efforts by using other products or services through affiliate marketing, a great way to grow!",
    },
    {
      svg: require("../../Assets/Img/digital-market/outline.svg"),
      title: "Social Media Marketing",
      desc: "Leverage the social media trend to grow and create a community where the right content can prove to be a highly engaging tool for your brand. ",
    },
    {
      svg: require("../../Assets/Img/digital-market/InboundMarketing.svg"),
      title: "Inbound Marketing",
      desc: "We know the importance of tailored content better than anyone else, and we use it to create retention rates that are truly effective and efficient. ",
    },
    {
      svg: require("../../Assets/Img/digital-market/OnlinePR.svg"),
      title: "Online PR",
      desc: "In a digital world, digital reputation is everything, which is why our online reputation-building methods provide a delightful branding avenue to you. ",
    },
    {
      svg: require("../../Assets/Img/digital-market/PPCManagement.svg"),
      title: "PPC Management",
      desc: "PPC gives you a lot of control over your digital advertising as you are in charge of every penny you spend. We help you with the right allocation!",
    },
    {
      svg: require("../../Assets/Img/digital-market/ContentMarketing.svg"),
      title: "Content Marketing",
      desc: "Pix Brand does understand the value of great content, and with our marketing efforts focused on content quality, we ensure you can leverage that too. ",
    },
    {
      svg: require("../../Assets/Img/digital-market/SocialMediaOptimization.svg"),
      title: "Social Media Optimisation",
      desc: "Our digital marketing experts are armed with the right technical knowledge to completely revamp & optimize your existing social media strategy.",
    },
  ];

  return (
    <>
      <Container className="mb60 mobMb40">
        <section className="text-center">
          <Slide bottom>
            <h3 className="fs16 colorRed fw700 mb20 mobMb10 text-uppercase">
              Want to know more?
            </h3>
            <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb40 mobMb20 colorWhite width63 mobWidth100 tabWidth100 mx-auto">
              We offer an end-to-end Digital Marketing suite for Absolute
              Sophistication
            </h2>
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

// How we do it
const How = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6} className="mobMb15">
            <section className="width80 mobWidth100 tabWidth100 tabLgWidth100">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb20 mobMb10">
                  Digital Marketing With Pixbrand
                </h2>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                  Our philosophy has always been making organizations of all
                  sizes scalable and efficient in their digital efforts to have
                  their own standing in this increasingly virtual world. With
                  the right technology, tools, and human resources, we ensure
                  measurable marketing results professionally.
                </p>
              </Slide>
            </section>
          </Col>
          <Col md={6}>
            <section>
              <div>
                {/* <img src={Img.} alt="" className="w-100" /> */}
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="12px"
                    src={require("../../Assets/Img/digital-market/digital_mark.jpg")}
                  />
                </Slide>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
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


