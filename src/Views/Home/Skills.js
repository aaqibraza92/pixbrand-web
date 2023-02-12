import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import { Fragment } from "react";

const WrapperSkills = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  background: #111111; /* Old browsers */
  background: -moz-linear-gradient(
    to right,
    #111 33%,
    #191919 20%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    to right,
    #111 33%,
    #191919 20%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #111 33%, #191919 20%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#111111', endColorstr='#707070',GradientType=1 ); /* IE6-9 */
  @media only screen and (max-width: 767px) {
    background: none;
    .tabMobView {
      background: #191919;
      padding: 50px 35px;
      margin-top: 20px;
    }
  }
  h3 {
    padding-bottom: 10px;
  }
  .verticalTrigger1 {
    border-bottom: 1px solid transparent;
  }
  .activeTabVer {
    border-color: #fff;
  }
  .verticalTrigger1 {
    display: inline-block;
    padding-bottom: 5px !important;
  }
  .runningLine::after {
    background: #fff;
  }
`;

const WrapperTabContent = styled.div``;

const TabTriggerWrapper = styled.div``;

const tabTriggerContent = [
  {
    title: "Perfection",
  },
  {
    title: "Ideas",
  },
  {
    title: "Xcellence",
  },
];

const TabContent = [
  {
    content:
      "For every project or client onboarded, Pix Brand is committed to utmost perfection in delivery and support. In this industry, perfection is the bare minimum and we understand that completely.",
  },
  {
    content:
      "At the end of the day, it is the right set of ideas that need to be thought upon to deliver something unique and cutting-edge, every single time. This is what we strive to do at Pix Brand.",
  },
  {
    content:
      "For us, it's Xcellence, because we ensure to bring the X-factor in everyday excellence. It's important to help you stay ahead of whichever domain you belong to, and this counts in the long-term.",
  },
];

const Skills = () => {
  const [verticalTab, setverticalTab] = useState("v0");
  const handleTab = (ind) => {
    setverticalTab(ind);
  };
  return (
    <>
      <div>
        <WrapperSkills>
          <Container>
            <Slide bottom>
              <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb100 mobMb15 lineAnimateSkill">
                We make you stand with PIX
              </h3>
            </Slide>

            <div
              id="demo"
              className="sliderTab carousel slide vert"
              data-ride="carousel"
              data-interval="10000"
            >
              <div className="row no-gutters">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <div className="verticalTabbing">
                    <div className="carousel-indicators text-start">
                      <div
                        data-target="#demo"
                        data-slide-to="0"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                          Perfection
                        </span>
                      </div>
                      <div
                        data-target="#demo"
                        data-slide-to="1"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                          Ideas
                        </span>
                      </div>
                      <div
                        data-target="#demo"
                        data-slide-to="2"
                        className="item active pointer mb25 mobMb10"
                      >
                        <span
                          className={`runningLine verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10`}
                        >
                          Xcellence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                              For every project or client onboarded, Pix Brand
                              is committed to utmost perfection in delivery and
                              support. In this industry, perfection is the bare
                              minimum and we understand that completely.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                    <div className="carousel-item">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                     At the end of the day, it is the right set of ideas that need to be thought upon to deliver something unique and cutting-edge, every single time. This is what we strive to do at Pix Brand.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                    <div className="carousel-item">
                      <Row className="justify-content-center">
                        <Col lg={7} md={8}>
                          <Slide bottom>
                            <p
                              style={{ color: "#7D7D7D" }}
                              className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                            >
                   For us, it's Xcellence, because we ensure to bring the X-factor in everyday excellence. It's important to help you stay ahead of whichever domain you belong to, and this counts in the long-term.
                            </p>
                          </Slide>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Row>
              <Col lg={3} md={3}>
                <TabTriggerWrapper>
                  <Row>
                    <Slide bottom>
                      <div className="verticalTabbing">
                        {tabTriggerContent &&
                          tabTriggerContent.map((elem, ind) => {
                            return (
                              <div
                                key={ind}
                                className="pointer mb25 mobMb10"
                                onClick={(e) => handleTab("v" + ind)}
                              >
                                <span
                                  className={`verticalTrigger1 runningLine colorWhite transition fs32 tabFs24 tabLgFs24 mobFs20 lh24 mobMr10 ${
                                    "v" + ind === verticalTab && "runningLine"
                                  }`}
                                >
                                  {elem.title}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </Slide>
                  </Row>
                </TabTriggerWrapper>
              </Col>
              <Col lg={9} md={9}>
                {TabContent &&
                  TabContent.map((elem, index) => {
                    return (
                      <Fragment key={"o" + index}>
                        {"v" + index === verticalTab && (
                          <WrapperTabContent key={"q" + index}>
                            <Row
                              className={`${
                                "v" + index === verticalTab && ""
                              } justify-content-center`}
                            >
                              <Col lg={7} md={8}>
                                <Slide bottom>
                                  <p
                                    style={{ color: "#7D7D7D" }}
                                    className="colorWhite fs17 tabFs15 tabLgFs15 mobFs15 lh25 tabMobView"
                                  >
                                    {elem.content}
                                  </p>
                                </Slide>
                              </Col>
                            </Row>
                          </WrapperTabContent>
                        )}
                      </Fragment>
                    );
                  })}
              </Col>
            </Row> */}
          </Container>
        </WrapperSkills>
      </div>
    </>
  );
};

export default Skills;
