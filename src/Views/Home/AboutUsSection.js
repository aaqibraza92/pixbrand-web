import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Svg from "../../Assets/Svg/Svg";

let data = [
  {
    img: require('../../Assets/Img/Analysis.svg'),
    title: "Analysis",
    url: "#",
  },
  {
    img: require('../../Assets/Img/design.svg'),
    title: "Design",
    url: "#",
  },
  {
    img: require('../../Assets/Img/Development.svg'),
    title: "Development",
    url: "#",
  },
  {
    img: require('../../Assets/Img/qa.svg'),
    title: "QA",
    url: "#",
  },
];
const AboutUsSection = () => {
  return (
    <section className="mb60">
      <Container>
        <div className="greyishBg radius20 pt60 pb60 pl40 pr40 mobPl20 mobPr20">
          <Row className="mb80 mobMb40 gy-3 gx-5">
            <Col lg={6} md={12}>
              <h6 className="colorRed mb20 fs16 mobFs14 tabFs14 tabLgFs14 text-uppercase">
                We're different
              </h6>

              <h3 className="fs40 mb30 colorWhite fw500 mobFs33">
              Don’t think of us as ‘just another marketing or web design company’. Our Pix mantra makes us your collaborative partner.
              </h3>

              <div className="d-flex">
                <Link className="btnRed mb0 mr15" to="/#">
                Get In Touch
                </Link>
                <Link className="btnTransparent" to="/#">
                About Us <span className="ml10">{Svg.arrowRight}</span> 
                </Link>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <p className="colorLightGrey mt40 fs18 mb30 mobFs15">
              At Pix Brand, we cover all facets of business enterprises by bringing stupendous branding campaigns and equally revolutionary products by leveraging the experience of our team with the most sophisticated technical method-logies, that maximize revenue and deliver impeccable client satisfaction and retention.
              </p>

              <p className="colorLightGrey fs18 mobFs15">Our services at a glance- </p>
            </Col>
          </Row>

          <Row className="gy-3">
            {data.map((e, i) => (
              <Col key={i} lg={3} md={6} xs={6}>
                <div className="position-relative d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid radius20"
                    src={e.img.default}
                    alt="analysis"
                  />
                  <Link
                    className="position-absolute UponImg colorWhite fs22 fw500"
                    to={e.url}
                  >
                    {e.title}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
