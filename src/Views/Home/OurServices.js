import React from "react";
import { Col, Container, Row } from "reactstrap";
import Svg from "../../Assets/Svg/Svg";
import { useState } from "react";

const OurServices = () => {
  return (
    <section>
      <Container>
        <h2 className="fs45 fw500 colorWhite mb30">Our Services</h2>

        <Row className="gy-3">
          <Col lg={8} md={8}>
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

            
<ServiceItem
              icon={require("../../Assets/Img/branding.svg")}
              title="Branding"
              content="Understanding and executing what works in the smartphone age of today and delivering experience and expertise in a bundle!"
              list={[
                "Brand Identity",
                "Brand Strategy",
                "Brand Positioning ",
                "Brand Guide",
                "Packaging Solutions"
              ]}
            />
          </Col>
          <Col lg={4} md={4}>
            <div className="d-flex justify-content-end">
              <img
                src={require("../../Assets/Img/serviceRight.svg").default}
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
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
          <h3 className="w-100 ml15">{title}</h3>
        </div>

        <button onClick={() => settoggle(!toggle)} className="noBtn">
          <span className={`transition ${!toggle && "rotate180"}`}>
            {Svg.ArrowUp}
          </span>
        </button>
      </div>
      {toggle && (
        <div className="contentSection">
          <p className="colorLightBlack fs20 mb30 pt30 pl30 pr30">{content}</p>
          <div className="borderTop">
            <Row className="pt30 pl30 pr30 gy-3">
              {list.map((e, i) => (
                <Col key={i} lg={6} md={6}>
                  <div className="d-flex align-items-center">
                    {Svg.CircleCheck}
                    <p className="colorLightGrey fs18 fw500 mb0 ml10">{e}</p>
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
