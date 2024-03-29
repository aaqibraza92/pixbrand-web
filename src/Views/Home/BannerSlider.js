import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import GImage from "../../Components/GComponents/GImage/GImage";
import { Fade } from "react-reveal";

const BannerSlider = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

  return (
    <section className="pt40 mb120 mobMb60">
      <Container>
        <Row className="align-items-center gx-5 gy-5">
          <Col lg={6} md={6}>
            <div className="mr30 mobMr0">
              <h2 className="colorWhite fs70 fw600 mb20 mobFs33 tabFs40">
              A Creative Digital Design Studio inspired by creativity.
              </h2>
              <p className="colorLightBlack fs20 mobFs15">
              We help our clients build delightful customer experiences. We create unique digital products from concept to final design solutions.
              </p>

              <div className="mt30">
                <Link to="/contact-us" className="btnRed">
                Start a Project
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} className="position-relative mobMt40">
          {
            screenWidth > 1024 &&  <div className="bgLogo ">
        <img className="img-fluid d-xs-none" src={require('../../Assets/Img/big_x.svg').default} alt="" />
            </div>
          }
          
            <div className="swiperTopBanner">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                speed={1500}
                autoplay={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => {}}
                onSwiper={() => {}}
                breakpoints={{
                  300: {
                    width: 300,
                    slidesPerView: 1,
                  },
                  550: {
                    width: 550,
                    slidesPerView: 1,
                  },
                  992: {
                    width: 992,
                    slidesPerView: 1,
                  },
                  1201: {
                    width: 1201,
                    slidesPerView: 1,
                  },
                  1360: {
                    width: 1360,
                    slidesPerView: 1,
                  },
                }}
              >
                <Fade bottom cascade>

                {
                  Array(6).fill().map((v,i)=>(
                    <SwiperSlide key={i}>
                    <div className="mobWHandle">
                    <GImage radius="12px" widthMob='100%' src={require('../../Assets/Img/banner1.jpg')} />
                    </div>
                  
                    </SwiperSlide>
                  ))
                }
                   
                </Fade>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSlider;
