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
            <Helmet>
     
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
          integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
          integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <div>
      <WrapperSkills>
        <Container>
          <Slide bottom>
            <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite mb100 mobMb15 lineAnimateSkill">
              We make you stand with PIX
            </h3>
          </Slide>

          <Row>
            <Col lg={3} md={3}>
              <TabTriggerWrapper>
                <Row>
                  <Slide bottom>
                    <div className="verticalTabbing">
                      {/* {tabTriggerContent &&
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
                        })} */}
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
          </Row>
        </Container>
      </WrapperSkills>
    </div>
    </>
 
  );
};

export default Skills;
