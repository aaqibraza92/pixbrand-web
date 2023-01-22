import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import GImage from "../../Components/GComponents/GImage/GImage";
import GLink from "../../Components/GComponents/GLink/GLink";
import Fade from "react-reveal/Fade";
import { Fragment } from "react";
import ScrollSpy from "react-ui-scrollspy";
const WrapperTestimonial = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
 
  background-color: #111;
  @media only screen and (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 75px;
  }
`;

const WrapperTabContent = styled.div`
 margin-bottom: 100px;
  .ratingNum {
    border-left: 1px solid #3d3e42;
  }

  @media only screen and (min-width: 767px) {
    padding-left: 30px;
  }
`;

const TabTriggerWrapper = styled.div`
  max-height: 550px;
  overflow-y: auto;
  overflow-x: hidden;
  .hoverZoom:hover {
    transform: translate(0px, 8px);
  }
`;

const tabTriggerContent = [
  {
    id: 1,
    img: Img.test1,
    title: "Bob Glazebrook",
    description: "Principal, visual engineering Inc.",
  },
  {
    id: 2,
    img: Img.test2,
    title: "Craig Barbar",
    description: "Principal, visual engineering Inc.",
  },
  {
    id: 3,
    img: Img.test3,
    title: "Revget Raut",
    description: "Principal, visual engineering Inc.",
  },
  {
    id: 4,
    img: Img.test4,
    title: "Adrian Lunga",
    description: "Principal, visual engineering Inc.",
  },
];

const TabContent = [
  {
    id: 1,
    star: 5,
    rating: "5.0",
    text: "Pixbrand IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
    clutch: "",
  },
  {
    id: 2,
    star: 5,
    rating: "4.8",
    text: "Pixbrand IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
    clutch: "",
  },
  {
    id: 3,
    star: 5,
    rating: "4.5",
    text: "Pixbrand IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
    clutch: "",
  },
  {
    id: 4,
    star: 5,
    rating: "4.5",
    text: "Pixbrand IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
    clutch: "",
  },
];

const Testimonials = () => {
  const [verticalTab, setverticalTab] = useState("v0");

  const handleTab = (ind) => {
    setverticalTab(ind);
  };
  return (
    <div>
      <WrapperTestimonial>
        <Container>
          <Row>
            <Col lg={3} md={3}>
              <TabTriggerWrapper className="position-sticky">
                <div className="tab_menu ">
                  {tabTriggerContent &&
                    tabTriggerContent?.map((elem, ind) => {
                      return (
                        <div key={ind} data-to-scrollspy-id={`spying${elem.id}`}>
                          <Fade bottom >
                            <div className="mb5">
                              <GImage src={elem.img} />
                            </div>

                            <h5 className="colorWhite fs20 tabFs18 tabLgFs18 mobFs16 ">
                              {elem.title}
                            </h5>
                            <p className="colorLightBlack fs17 tabFs15 tabLgFs15 mobFs14  maxWidth70 lh24">
                              {elem.description}
                            </p>
                          </Fade>
                        </div>
                      );
                    })}
                </div>
              </TabTriggerWrapper>
            </Col>
            <Col lg={9} md={9}>
              {TabContent &&
                TabContent.map((elem, index) => {
                  return (
                    <Fragment key={"o" + index}>
                    <ScrollSpy offsetTop="0">
                        <WrapperTabContent id={`spying${elem.id}`} className="heightVh100">
                          <div className="ratingArea d-flex align-items-center">
                            {elem.star === 5 && (
                              <>
                                {/* <Fade bottom > */}
                                  <span className="mr6">{Svg.redStar}</span>
                                  <span className="mr6">{Svg.redStar}</span>
                                  <span className="mr6">{Svg.redStar}</span>
                                  <span className="mr6">{Svg.redStar}</span>
                                  <span className="mr6">{Svg.redStar}</span>
                                {/* </Fade> */}
                              </>
                            )}
                            {/* <Fade bottom > */}
                              <span className="ratingNum ml12 pl17 colorWhite fs22 tabFs18 tabLgFs18 mobFs16">
                                {elem.rating}
                              </span>
                            {/* </Fade> */}
                          </div>

                          <div className="mt20">
                            <Row>
                              <Col lg={9}>
                                {/* <Fade bottom > */}
                                  <p className="colorWhite fs28 tabFs20 tabLgFs20 mobFs18 ">
                                    {elem.text}
                                  </p>
                                  <div className="mt50 mobMt30">
                                    <a
                                      className="btnTheme"
                                      href={elem.clutch}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      View on Clutch
                                    </a>
                                  </div>
                                {/* </Fade> */}
                              </Col>
                            </Row>
                          </div>
                        </WrapperTabContent>
                        </ScrollSpy>
</Fragment>
                  );
                })}
            </Col>
          </Row>
        </Container>
      </WrapperTestimonial>
    </div>
  );
};

export default Testimonials;
