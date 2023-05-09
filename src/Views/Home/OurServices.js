import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import { useState } from "react";
import { useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
const OurServices = () => {
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
    <section className="mb100 mobMb30">
      <Container>
        <h2 className="fs40 fw500 colorWhite mb30 mobFs33">Our Services</h2>

        <Row className="gy-3 gx-5">
          <Col lg={8} md={8}>
            <ScrollSpy offsetTop="0">
              <div id="sr1">
                <ServiceItem
                  icon={require("../../Assets/Img/laptop.svg")}
                  title="Website Design & Development"
                  content="Websites are the first point of contact between brands and customers today, and we help ensure that it’s just perfect!"
                  list={[
                    "UI/UX Design",
                    "E-commerce Stores",
                    "Audit and Analytics",
                    "Web Development",
                    "Frameworks",
                    "Hosting",
                    "CMS Integration",
                    "Maintenance & Support",
                  ]}
                />
              </div>

              <div id="sr2">
                <ServiceItem
                  icon={require("../../Assets/Img/mobile.svg")}
                  title="Mobile Design & Development"
                  content="Understanding and executing what works in the smartphone age of today and delivering experience and expertise in a bundle!"
                  list={[
                    "iOS Apps",
                    "Hybrid Apps",
                    "Android Apps",
                    "Wearable Apps",
                  ]}
                />
              </div>

              <div id="sr3">
                <ServiceItem
                  icon={require("../../Assets/Img/markinting.svg")}
                  title="Digital Marketing"
                  content="Understanding and executing what works in the smartphone age of today and delivering experience and expertise in a bundle!"
                  list={[
                    "Social Media Marketing",
                    "Search Engine Optimization (SEO)",
                    "Social Media Optimisation (SMO)",
                    "Content Marketing",
                    "Inbound Marketing",
                    "E-mail Marketing",
                    "Affiliate Marketing",
                    "Online PR",
                  ]}
                />
              </div>

              <div id="sr4">
                <ServiceItem
                  icon={require("../../Assets/Img/branding.svg")}
                  title="Branding"
                  content="Understanding and executing what works in the smartphone age of today and delivering experience and expertise in a bundle!"
                  list={[
                    "Brand Identity",
                    "Brand Strategy",
                    "Brand Positioning ",
                    "Brand Guide",
                    "Packaging Solutions",
                  ]}
                />
              </div>
            </ScrollSpy>
          </Col>
          {screenWidth > 1024 && (
            <Col lg={4} md={4}>
              <div
                className="d-flex justify-content-end flex-wrap position-sticky pb30 serviceStiky"
                style={{
                  width: "100%",
                  top: "100px",
                }}
              >
                <a
                  href="#sr1"
                  data-to-scrollspy-id="sr1"
                  className=" w-100"
                >
                  <img
                    src={require("../../Assets/Img/home/website-design-development.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <a
                  href="#sr2"
                  data-to-scrollspy-id="sr2"
                  className="w-100"
                >
                  <img
                    src={require("../../Assets/Img/home/mobile-design-development.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <a
                  href="#sr3"
                  data-to-scrollspy-id="sr3"
                  className="w-100"
                >
                  <img
                    src={require("../../Assets/Img/home/digital-marketing.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <a
                  href="#sr4"
                  data-to-scrollspy-id="sr4"
                  className="w-100"
                >
                  <img
                    src={require("../../Assets/Img/home/branding.svg").default}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;

const ServiceItem = (props) => {
  const { icon, title, content, list } = props;
  const [toggle, settoggle] = useState(true);
  return (
    <div className="radius20 greyishBg pb30 mb30">
      <div className="serviceTitle fs28 colorWhite d-flex justify-content-between align-items-center     pt30 pl30 pr30">
        <div className="d-flex align-items-center">
          <img src={icon.default} alt="laptop" />
          <h3 className="w-100 mobFs20 ml15">{title}</h3>
        </div>

        <button onClick={() => settoggle(!toggle)} className="noBtn">
          <span className={`transition ${!toggle && "rotate180"}`}>
            {Svg.ArrowUp}
          </span>
        </button>
      </div>
      {toggle && (
        <div className="contentSection">
          <p className="colorLightBlack fs22 mb30 pt30 pl30 pr30 mobFs18">
            {content}
          </p>
          <div className="borderTop">
            <Row className="pt30 pl30 pr30 gy-3">
              {list.map((e, i) => (
                <Col key={i} lg={6} md={6}>
                  <div className="d-flex align-items-center">
                    {Svg.CircleCheck}
                    <p className="colorLightGrey fs18 fw500 mobFs15 mb0 ml10">
                      {e}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};
