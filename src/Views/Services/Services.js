import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import GImage from "../../Components/GComponents/GImage/GImage";
// import Svg from "../../Assets/Svg/Svg";
import GAlign from "../../Components/GComponents/GAlign";
import { Link } from "react-router-dom";
import ImageTab from "../TabAndContent/ImageTab";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import Svg from "../../Assets/Svg/Svg";
import ContactUsSection from "../Home/ContactUsSection";

const Services = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Pixbrand</title>
        <meta name="Services" content="Pixbrand Services"></meta>
      </Helmet>
      <Title />
      <ServiceSlider />
      <Website />
      <Mobile />

      <Digital />
      <Branding />

      {/* <ImageTab />
      <Slider />
      <Approach /> */}
      <Results/>
      <section className="">
        <Container>
          <div className="greyishBg tabPt30 radius20 pl40 pr40 mobPl20 mobPr20">
            <Row className="align-items-center mobMb40 gy-3 gx-5">
              <Col lg={6} md={12} className="mt0">
                <h6 className="colorRed mb20 fs16 mobFs14 tabFs14 tabLgFs14 text-uppercase">
                  Pixbrand Approach
                </h6>

                <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
                  A user-focused approach is what we aim to achieve at Pixbrand
                  every single time, with every product.
                </h3>

                <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
                  User experience is key to engagement and retention, and our
                  team at Pixbrand understands that very well. We minimize the
                  process and maximize the output with our approach.
                </p>
              </Col>

              <Col lg={6} md={12} className="mt0">
                <img
                  className="w-100"
                  src={require("../../Assets/Img/services/approach.jpg")}
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="pb60">
      <ContactUsSection />
      </section>
    
    </div>
  );
};

export default Services;

// Title Section
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={10}>
            <Slide bottom>
              <section className="text-center mobtl">
                <h1 className="fs75 mb24 mobMb10 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite">
                  Providing the Best of Services- from Startups to Large
                  Businesses
                </h1>
              </section>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Slider
const ServiceSlider = () => {
  return (
    <>
      <section className="mb100 mobMb60">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000 }}
          spaceBetween={5}
          slidesPerView={10}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          // breakpoints={{
          //   // when window width is >= 640px
          //   300: {
          //     width: 300,
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 768px
          //   550: {
          //     width: 550,
          //     slidesPerView: 2,
          //   },
          //   992: {
          //     width: 992,
          //     slidesPerView: 3,
          //   },
          //   1201: {
          //     width: 1201,
          //     slidesPerView: 4,
          //   },
          //   1360: {
          //     width: 1360,
          //     slidesPerView: 4,
          //   },
          // }}
        >
          <div className="bloggerList">
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s1.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s2.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s3.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s4.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s5.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s6.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s7.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s8.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s9.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s10.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s11.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s12.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15 mt50">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s13.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s14.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s15.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s16.jpg")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb15">
                <GImage
                  radius="18px"
                  radiusMob="5px"
                  src={require("../../Assets/Img/services/s17.jpg")}
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </>
  );
};

// Mobile Design & Development
const Mobile = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center gy-3 gx-5">
          <Col md={6}>
            <section>
              <div>
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    width="100%"
                    src={require("../../Assets/Img/services/mobile.jpg")}
                  />
                </Slide>
              </div>
            </section>
          </Col>

          <Col md={6}>
            <section>
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 width52 mobWidth100 tabWidth100 tabLgWidth100">
                  <Link to="/mobile-design" className="colorWhite">
                    Mobile Design & Development
                  </Link>
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightGrey mb20 mobMb10  width81 mobWidth100 tabWidth100 tabLgWidth100">
                  Understanding and executing what works in the smartphone age
                  of today and delivering experience and expertise in a bundle!
                </p>
                <Row>
                  <Col lg={6} xs={6}>
                    <ul className="noUl colorLightGrey fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="mb10">
                        {" "}
                        <span className="mr10">{Svg.CircleCheck}</span> iOS Apps
                      </li>
                      <li className="mb10">
                        {" "}
                        <span className="mr10">{Svg.CircleCheck}</span> Android
                        Apps
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} xs={6}>
                    <ul className="noUl colorLightGrey fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="mb10">
                        <span className="mr10">{Svg.CircleCheck}</span>Hybrid
                        Apps
                      </li>
                      <li className="mb10">
                        <span className="mr10">{Svg.CircleCheck}</span> Wearable
                        Apps
                      </li>
                    </ul>
                  </Col>
                  <div className="mt30">
                    <Link className="btnRed" to="/mobile-design">
                      Learn More
                    </Link>
                  </div>
                </Row>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Website Design & Development
const Website = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center gy-3 gx-5 flexreverse">
          <Col md={6}>
            <section className="">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 width67 mobWidth100 tabWidth100 tabLgWidth100">
                  <Link to="/web-design" className="colorWhite">
                    Website Design & Development
                  </Link>
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightGrey  mb20 mobMb10 ">
                  Websites are the first point of contact between brands and
                  customers today, and we help ensure that it’s just perfect!
                </p>
                <Row>
                  <Col lg={6} xs={6}>
                    <ul className="noUl colorLightGrey  fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="mb10 d-flex align-items-center">
                        {" "}
                        <span className="mr10">{Svg.CircleCheck}</span> UI/UX
                        Design
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span> Audit
                        and Analytics
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span>{" "}
                        Frameworks
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        {" "}
                        <span className="mr10">{Svg.CircleCheck}</span> CMS
                        Integration
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} xs={6}>
                    <ul className="noUl colorLightGrey  fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span>{" "}
                        E-commerce Stores
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span> Web
                        Development
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span> Hosting
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span>{" "}
                        Maintenance & Support
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div className="mt30">
                  <Link className="btnRed" to="/web-design">
                    Learn More
                  </Link>
                </div>
              </Slide>
            </section>
          </Col>

          <Col md={6}>
            <section>
              <Slide bottom>
                <div>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    width="100%"
                    src={require("../../Assets/Img/services/web.jpg")}
                  />
                </div>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Digital Marketing
const Digital = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center">
          <Col md={6}>
            <Slide bottom>
              <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10">
                <Link to="/digital-marketing" className="colorWhite">
                  Digital Marketing
                </Link>
              </h2>
              <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightGrey mb20 mobMb10  width83 mobWidth100 tabWidth100 tabLgWidth100">
                Enhancing online presence on all platforms is the recipe to
                success, and our great content and campaigns make that happen.
              </p>
              <Row>
                <Col lg={6} xs={6}>
                  <ul className="noUl colorLightGrey fs17 tabFs15 tabLgFs15 mobFs15">
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> Social
                      Media Marketing
                    </li>
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> SEO
                    </li>
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> SMO
                    </li>
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> Content
                      Marketing
                    </li>
                  </ul>
                </Col>
                <Col lg={6} xs={6}>
                  <ul className="noUl colorLightGrey fs17 tabFs15 tabLgFs15 mobFs15">
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> Inbound
                      Marketing
                    </li>
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> E-mail
                      Marketing
                    </li>
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> Affiliate
                      Marketing
                    </li>
                    <li className="mb10 d-flex align-items-center">
                      <span className="mr10">{Svg.CircleCheck}</span> Online PR
                    </li>
                  </ul>
                </Col>
              </Row>
              <div className="mt30">
                <Link className="btnRed" to="/digital-marketing">
                  Learn More
                </Link>
              </div>
            </Slide>
          </Col>
          <Col md={6}>
            <section>
              <div className="mb15">
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    width="100%"
                    src={require("../../Assets/Img/services/digital.png")}
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

// Branding
const Branding = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse gx-5 gy-3">
          <Col md={6}>
            <section>
              <div>
                <Slide bottom>
                  <GImage
                    radius="24px"
                    radiusMob="5px"
                    width="100%"
                    src={require("../../Assets/Img/services/branding.jpg")}
                  />
                </Slide>
              </div>
            </section>
          </Col>
          <Col md={6}>
            <section className="mobMl0 ml0Tab">
              <Slide bottom>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10">
                  <Link to="/branding" className="colorWhite">
                    Branding
                  </Link>
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightGrey mb20 mobMb10  width94 mobWidth100 tabWidth100 tabLgWidth100">
                Websites are the first point of contact between brands and customers today, and we help ensure that it’s just perfect!
                </p>
                <Row>
                  <Col lg={6} xs={6}>
                    <ul className="noUl colorLightGrey fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span> Brand
                        identity
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span>Brand Strategy
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span> Brand Positioning
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} xs={6}>
                    <ul className="noUl colorLightGrey fs17 tabFs15 tabLgFs15 mobFs15">
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span> Brand
                        Guide
                      </li>
                      <li className="mb10 d-flex align-items-center">
                        <span className="mr10">{Svg.CircleCheck}</span>{" "}
                        Packaging Solutions
                      </li>
                    </ul>
                  </Col>
                </Row>

                <div className="mt30">
                  <Link className="btnRed" to="/branding">
                    Learn More
                  </Link>
                </div>
              </Slide>
            </section>
          </Col>
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
            <div className="bBottom pb15">
              <GAlign align="between" alignV="center" className="flex-wrap">
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb0 mobMb10">
                  Steps Involved in the Process
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
          // navigation={{clickable: true}} (Arrow)
          // pagination={{ clickable: true }}(Dots)
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000 }}
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
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Research
                  </h3>
                  <p className="fs16 colorLightBlack  mb0">
                    Understanding market dynamics and trends are the stepping
                    stone to further success. In-depth research and analysis,
                    and then the derived inferences form the foundation of our
                    work ahead.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Analysis
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    Our analysis is no mean feat and involves much more head and
                    heart than the traditional surveys that once ruled the
                    market analysis. The right analysis brings the right
                    strategic approach.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Concept
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    With the right inferences on the side, we then develop a
                    concept to make the business objective relatable &
                    executable. Once the concept becomes watertight, the
                    execution becomes seamless.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Design
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    With a solid theoretical concept in place, it’s then time
                    for creating designs that resonate with trends and make the
                    perfect impact, every time a design element leaves the
                    stables for the target audience.
                  </p>
                </section>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <section className="scards pt30 pb30 pl20 pr20 radius20">
                  <div className="radius shadow width15 pt25 pb25 pl25 pr25 scards-img mb20 mobMb10"></div>
                  <h3 className="fs20 tabFs16 tabLgFs16 mobFs16 colorWhite mb20 mobMb10">
                    Improve
                  </h3>
                  <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mb0">
                    With things evolving every day, constant improvements are
                    the need of the hour. We ensure that despite creating great
                    products, constant improvements are always made for
                    future-proofing purposes.
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

// Approach
const Approach = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center justify-content-center gy-3">
          <Col md={4} className="mb20 mobMb10 dNoneXs">
            <div>
              <Slide bottom>
                <GImage radius="24px" src={Img.a1} />
              </Slide>
            </div>
          </Col>
          <Col md={5} className="mb20 mobMb0">
            <div className="ml40 mobMl0">
              <Slide bottom>
                <p className="fs16 colorRed fw700 mb15">Pixbrand Approach</p>
                <p className="fs28 tabFs20 tabLgFs20 mobFs18 colorWhite ">
                  A user-focused approach is what we aim to achieve at Pixbrand
                  every single time, with every product.
                </p>
                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack  mobMb0">
                  {" "}
                  User experience is key to engagement and retention, and our
                  team at Pixbrand understands that very well. We minimize the
                  process and maximize the output with our approach.
                </p>
              </Slide>
            </div>
          </Col>
          <Col md={5} className="dNoneXs">
            <div>
              <Slide bottom>
                <GImage radius="24px" src={Img.a2} />
              </Slide>
            </div>
          </Col>
          <Col md={5} className="dNoneXs">
            <div>
              <Slide bottom>
                <GImage radius="24px" src={Img.a3} />
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Results = () => {
  let data=[
    {
      icon: require('../../Assets/Img/services/research.svg'),
      title: 'Research',
      content: 'Understanding market dynamics and trends are the stepping stone to further success. In-depth research and analysis, and then the derived inferences form the foundation of our work ahead.'
    },
    {
      icon: require('../../Assets/Img/services/Analysis.svg'),
      title: 'Analysis',
      content: 'Our analysis is no mean feat and involves much more head and heart than the traditional surveys that once ruled the market analysis. The right analysis brings the right strategic approach.'
    },
    {
      icon: require('../../Assets/Img/services/Concept.svg'),
      title: 'Concept',
      content: 'With the right inferences on the side, we then develop a concept to make the business objective relatable & executable. Once the concept becomes watertight, the execution becomes seamless. '
    },
    {
      icon: require('../../Assets/Img/services/Design.svg'),
      title: 'Design',
      content: 'With a solid theoretical concept in place, it’s then time for creating designs that resonate with trends and make the perfect impact, every time a design element leaves the stables for the target audience. '
    },
    {
      icon: require('../../Assets/Img/services/Improve.svg'),
      title: 'Improve',
      content: 'We prefer long-term relationships and are by your side even after delivering your project. We test it when necessary, so you can be sure it is always a hundred per cent.'
    },
    {
      icon: require('../../Assets/Img/services/Development.svg'),
      title: 'Development',
      content: 'With things evolving every day, constant improvements are the need of the hour. We ensure that despite creating great products, constant improvements are always made for future-proofing purposes. '
    }
  ]
  return (
    <section className="greyishBg pb30 pt30 mb60">
      <Container>
        <Row className="pt60 pb60">
          <Col lg={4}>
            <h6 className="colorRed mb20 fs16 mobFs14 tabFs14 tabLgFs14 text-uppercase">
              STEP BY STEP
            </h6>
          </Col>
          <Col lg={8}>
            <h2 className="fs60 mb30 colorWhite fw500 mobFs33">
              Great results come <br />
              from a six-tuned process
            </h2>
          </Col>
        </Row>
        {
          data.map((e,i,arr)=>(
            <div className={`${i === arr.length - 1 ? '' : 'bBottom'} mb30 pb15`} key={i}>
            <Row className="gy-3"> 
              <Col lg={4}>
              <div className="d-flex align-items-center">
                <div>
                  <img src={e.icon.default} alt={e.title} className="img-fluid" />
                </div>
                <div className="ml15">
                  <h3 className="fs40 mb0 colorWhite fw500 mobFs33">
                    {e.title}
                  </h3>
                </div>
              </div>
              </Col>

              <Col lg={8}>
              <p className="fs20 mobFs18 tabFs18 tabLgFs18 colorLightBlack  ">
                {
                  e.content
                }
              </p>
              </Col>
            </Row>
            </div>
         
          ))
        }
      </Container>
    </section>
  );
};
