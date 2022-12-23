import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import VideoModal from "../../Components/CmnVideoModal/CmnVideoModal";
import GSpacing from "../../Components/GComponents/GSpacing";
import Slide from "react-reveal/Slide";

const HomeBanner = () => {
  const videoRef = useRef(null);
  const [playStatus, setplayStatus] = useState(false);

  const playPauseToggle = (status) => {
    if (playStatus === false) {
      videoRef.current.play();
      setplayStatus(true);
    } else {
      videoRef.current.pause();
      setplayStatus(false);
    }
  };
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
                    </sup>{" "}
                    And for the ones with grand ambitions
                  </p>
                </Col>
              </Slide>
            </Row>
          </GSpacing>
          <Slide bottom cascade>
            <div className="videoWrapper">
              <video ref={videoRef} poster={Img.videoThumb} className="radius">
                <source src={Img?.bannerVideo} type="video/mp4" />
              </video>

              <button onClick={() => playPauseToggle()}>
                {playStatus ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 100 100"
                  >
                    <g
                      id="Group_50346"
                      data-name="Group 50346"
                      transform="translate(-914 -1128)"
                    >
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="50"
                        cy="50"
                        r="50"
                        transform="translate(914 1128)"
                        fill="#fff"
                      ></circle>
                      <path
                        id="Polygon_2"
                        data-name="Polygon 2"
                        d="M10.454,2.827a2,2,0,0,1,3.422,0l8.617,14.237A2,2,0,0,1,20.782,20.1H3.548a2,2,0,0,1-1.711-3.036Z"
                        transform="translate(976.165 1165.835) rotate(90)"
                        fill="#ff0a2b"
                      ></path>
                    </g>
                  </svg>
                )}
              </button>
            </div>
          </Slide>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
