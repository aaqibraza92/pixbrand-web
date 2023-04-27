import React from "react";
import { Col, Container, Row } from "reactstrap";

const StandWithUs = () => {
  return (
    <section>
      <Container>
      <div className="wrapperStand">
        <h2 className="colorWhite fs36 fw600 mb20">
    Lorem ipsum dolor sit amet.
        </h2>
        <Row>
          <Col lg={8} md={8}>
            <div className="radius20 borderGrey mb30">
              <Row className="align-items-center">
                <Col lg={6} md={6}>
                  <img
                    src="https://placehold.co/600x400"
                    className="img-fluid radiusLeft"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6}>
                  <div className="standTextWrapper pl30 pr30 pt30 pb30">
                    <h4 className="colorWhite fs20 fw500">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="colorLightBlack  fs15">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi, quos officiis laborum ducimus molestias iure facilis
                      iusto eos placeat fuga quidem dolorum laudantium dolorem
                      id, doloremque dolores corporis iste incidunt.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="radius20 borderGrey">
              <Row className="align-items-center">
                <Col lg={6} md={6}>
                  <div className="standTextWrapper pl30 pr30 pt30 pb30">
                    <h4 className="colorWhite fs20 fw500">
                      Lorem ipsum dolor sit amet.
                    </h4>
                    <p className="colorLightBlack  fs15">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi, quos officiis laborum ducimus molestias iure facilis
                      iusto eos placeat fuga quidem dolorum laudantium dolorem
                      id, doloremque dolores corporis iste incidunt.
                    </p>
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <img
                    src="https://placehold.co/600x400"
                    className="img-fluid radiusRight"
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={4} md={4}>
            <div className="radius20 borderGrey">
              <img
                src="https://placehold.co/600x400"
                className="img-fluid radiusRight"
                alt=""
              />
              <div className="standTextWrapper pl30 pr30 pt30 pb30">
                <h4 className="colorWhite fs20 fw500">
                  Lorem ipsum dolor sit amet.
                </h4>
                <p className="colorLightBlack  fs15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  quos officiis laborum ducimus molestias iure facilis iusto eos
                  placeat fuga quidem dolorum laudantium dolorem id, doloremque
                  dolores corporis iste incidunt.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
       
      </Container>
    </section>
  );
};

export default StandWithUs;
