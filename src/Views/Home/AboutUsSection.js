import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

let data = [
  {
    img: "https://placehold.jp/300x300.png",
    title: "Analysis",
    url: "#",
  },
  {
    img: "https://placehold.jp/300x300.png",
    title: "Analysis",
    url: "#",
  },
  {
    img: "https://placehold.jp/300x300.png",
    title: "Analysis",
    url: "#",
  },
  {
    img: "https://placehold.jp/300x300.png",
    title: "Analysis",
    url: "#",
  },
];
const AboutUsSection = () => {
  return (
    <section>
      <Container>
        <div className="bgGreyish radius20 pt30 pb30 pl30 pr30">
          <Row className="mb80">
            <Col lg={6} md={6}>
              <h6 className="colorRed fs16 mobFs14 tabFs14 tabLgFs14 text-uppercase">
                We're different
              </h6>

              <h3 className="fs40 colorWhite fw500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                provident.
              </h3>

              <div className="d-flex">
                <Link class="btnRed mb0" to="/#">
                  Lorem ipsum
                </Link>
                <Link class="btnTransparent" to="/#">
                  Lorem ipsum{" "}
                </Link>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <p className="colorLightBlack fs20 mb30">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                illo cumque placeat animi tempore molestias nobis cupiditate
                eligendi, blanditiis sit.
              </p>

              <p className="colorLightBlack fs20">Lorem ipsum dolor</p>
            </Col>
          </Row>

          <Row className="gy-3">
            {data.map((e, i) => (
              <Col key={i} lg={3} md={3} xs={6}>
                <div className="position-relative d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid radius20"
                    src={e.img}
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
