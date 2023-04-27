import React from "react";
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
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={5}>
            <div>
              <h2 className="colorWhite fs45 fw600 mb20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="colorLightBlack fs15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                quos officiis laborum ducimus molestias iure facilis iusto eos
                placeat fuga quidem dolorum laudantium dolorem id, doloremque
                dolores corporis iste incidunt.
              </p>

              <div className="mt30">
                <Link to="#" className="btnRed">
                  Explore All Services
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={7} md={7}>
            <div className="bgLogo">
        <img className="img-fluid" src="" alt="" />
            </div>
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
                      <GImage radius="12px" src="https://placehold.jp/500x800.png" />
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