import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import VideoModal from "../../Components/CmnVideoModal/CmnVideoModal";
import GSpacing from "../../Components/GComponents/GSpacing";
import Slide from "react-reveal/Slide";
import { useEffect } from "react";

const HomeBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 500);
  }, [videoRef]);

  return (
    <div>
      <div className="bannerArea position-relative">
        <Container>
          <GSpacing
            pt="80px"
            pb="80px"
            tabpt="80px"
            tabpb="80px"
            mobpt="60px"
            mobpb="60px"
          >
            <Row className="justify-content-center">
              <Slide bottom>
                <Col lg={12}>
                  <h2 className="colorWhite fw600 mb24 mobMb30 fs80 mobFs45 tabFs60 tabLgFs60 lsneg1 width70 widthTab92 widthMob82 position-relative">
                    Future-Proof Your Brand with Pix Brand
                  </h2>

                  <p className="colorWhite fs22 mb0 mobFs18 tabFs18 tabLgFs18 position-relative">
                    <sup
                      className="colorRed position-absolute"
                      style={{ left: "-3px", top: "14px" }}
                    >
                      *
                    </sup>
                    And for the ones with grand ambitions
                  </p>
                </Col>
              </Slide>
            </Row>
          </GSpacing>
          <Slide bottom cascade>
            <div className="videoWrapper">
              <video ref={videoRef} autoPlay loop muted>
                <source src={Img?.bannerVideo} type="video/mp4" />
              </video>
            </div>
          </Slide>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
