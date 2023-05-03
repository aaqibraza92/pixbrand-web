import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Fade from "react-reveal/Fade";

const Data = [
  {
    icon: require('../../Assets/Img/digital-market/MobileDesign.svg'),
    title: "Mobile Design & Development",
    titlelink: "#",
    data1: "IOS Mobile",
    link1: "#",
    data2: "Android Mobile",
    link2: "#",
    data3: "Android Mobile",
    link3: "#",
    data4: "Hybrid Mobile",
    link4: "#",
    data5: "Wearable App",
    link5: "#",
  },
  {
    icon: require('../../Assets/Img/digital-market/Website Design.svg'),
    title: "Website Design & Development",
    titlelink: "#",
    data1: "Audit & Analytics",
    link1: "#",
    data2: "CMS Integration",
    link2: "#",
    data3: "Ecommerce Store",
    link3: "#",
    data4: "Hosting & Maintenance",
    link4: "#",
    data5: "UX/UI Design",
    link5: "#",
    data6: "Framework",
    link6: "#",
    data7: "Mobile Responsive",
    link7: "#",
    data8: "Web Development",
    link8: "#",
  },
  {
    icon: require('../../Assets/Img/digital-market/DigitalMarketing.svg'),
    title: "Digital Marketing",
    titlelink: "#",
    data1: "Search Engine Optimization",
    link1: "#",
    data2: "Social Media Marketing",
    link2: "#",
    data3: "Email Marketing",
    link3: "#",
    data4: "Inbound Marketing",
    link4: "#",
    data5: "PPC Management",
    link5: "#",
    data6: "Content Marketing",
    link6: "#",
    data7: "Affiliated Marketing",
    link7: "#",
    data8: "Online PR",
    link8: "#",
  },
  {
    icon: require('../../Assets/Img/digital-market/Branding.svg'),
    title: "Branding ",
    titlelink: "#",
    data1: "Brand Strategy",
    link1: "",
    data2: "Brand Positioning",
    link2: "#",
    data3: "Brand Style Guide",
    link3: "#",
    data4: "Packaging Design",
    link4: "#",
    data5: "Brand Identity",
    link5: "#",
    data6: "Brand Architecture",
    link6: "#",
    data7: "Marketing Materials",
    link7: "#",
  },
];

const Services3 = () => {
  return (
    <div>
      <section className="pt30 pb100 mobPb0">
        <Container className="">
          <Row className="">
            {Data.map((elem, ind) => {
              return (
                <Col lg={3} md={3} xs={6} key={ind}>
                  <Fade bottom >
                    <div>
                      <img src={elem.icon.default} alt="" className="w60" />
                    </div>
                    <h3 className="colorWhite fs20 tabFs16 tabLgFs16 mobFs18 mt20 mb18 width72">
                      <Link to="#" className="colorWhite ">
                        {elem.title}
                      </Link>
                    </h3>

                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data1}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack runningLine d-inline-block" 
                      >
                        {elem.data2}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs16 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data3}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs16 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data4}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs16 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data5}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs16 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data6}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs16 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data7}
                      </Link>
                    </div>
                    <div className="mb10">
                      <Link
                        to="#"
                        className="fs17 tabFs15 tabLgFs16 mobFs15 colorLightBlack runningLine d-inline-block"
                      >
                        {elem.data8}
                      </Link>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services3;
