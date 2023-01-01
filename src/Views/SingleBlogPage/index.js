import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import GImage from "../../Components/GComponents/GImage/GImage";
import { allposts, category } from "../../Helpers/Api/Endpoint";

const SingleBlog = (props) => {
  const id = useParams();
  const [postData, setPostData] = useState("");
  const [acfData, setacfData] = useState("");
  const [allCategory, setAllCategory] = useState("");
  useEffect(() => {
    getAllPosts();
    loadCategory();
  }, [id?.slug]);

  const getAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    await axios.get(allposts + "?slug=" + id?.slug, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data?.[0]);
        setacfData(res?.data?.[0]?.acf===false ? "" : res?.data?.[0]?.acf?.blog_flexible_data);
      }
    });
  };

  const loadCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios
      .get(category,
        options
      )
      .then((res) => {
        if (res?.status === 200) {
          setAllCategory(res?.data);
        }
      });
  };

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - </title>
        <meta name="home" content="Pixbrand Home"></meta>
      </Helmet>


      <section className="pt80 pb100 tabPt80 tabPb80 mobPt60 mobPb60">
        <Container>
          <div className="text-center">
            <Slide bottom>
              <h4 className="fs16 colorLightBlack">
                PUBLISHED {dateConverter(postData?.modified)}
              </h4>
              <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 mb20 mobMb10 fw500 colorWhite">
                {postData?.title?.rendered}
              </h1>
              {/* <p className="fs22 mobFs18 tabFs18 tabLgFs18 mb40 mobMb20 colorWhite">
                Why Branding matters to your Business
              </p> */}
              <div className="d-flex justify-content-center mb100 mobMb60 overscrollx">
                {allCategory.length > 0 &&
                  allCategory?.map((elem, i) => {
                    if(elem?.name==="Uncategorized"){
                      return ""
                    }else{
                      return (
                      <Link
                        key={i}
                        to={`/category/${elem?.id}`}
                        className="btn-blog mr10 text-capitalize"
                      >
                        {elem?.name}
                      </Link>
                    );
                    }
                
                  })}
              </div>
              <div className="mb60 mobMb30">
                <GImage
                  radius="24px"
                  radiusMob="15px"
                  src={
                    postData?.x_featured_media_original
                      ? postData?.x_featured_media_original
                      : Img.singleblogpage
                  }
                />
              </div>
            </Slide>
          </div>

          {acfData.length > 0 &&
            acfData?.map((e, i) => {
              if (e.acf_fc_layout === "paragraph") {
                e.paragraph.length > 0 &&
                  e.paragraph?.map((elem, ind) => {
                    console.log("eee", elem["para"]);
                    return (
                      <p
                        key={ind}
                        className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite "
                      >
                        {elem && elem.para}
                      </p>
                    );
                  });
              }
            })}

          <section className="mlr80 mobMl0 mobMr0 mb100 mobMb60 position-relative">
            <div className="social-icons ">
              <div className="mb15 mobMr10">
                <a href="https://www.facebook.com/pixbrandme">{Svg.fb}</a>
              </div>
              <div className="mb15 mobMr10">
                <a href="https://www.linkedin.com/company/pixbrandme/">
                  {Svg.linkedin}
                </a>
              </div>
              <div className="mb15 mobMr10">
                <a href="#">{Svg.twitter}</a>
              </div>
              <div className="mb15 mobMr10">
                <a href="#">{Svg.m}</a>
              </div>
            </div>

            {acfData?.length > 0 &&
              acfData?.map((el, index) => {
                if (el.acf_fc_layout === "paragraph") {
                  return (
                    <section key={"parent" + index} className="mb-5">
                      {el.acf_fc_layout === "paragraph" &&
                        el?.paragraph?.map((e, i) => {
                          if (i === 0) {
                            return (
                              <p
                                className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite"
                                key={i}
                              >
                                {e.para}
                              </p>
                            );
                          } else {
                            return (
                              <p
                                className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10"
                                key={i}
                              >
                                {e.para}
                              </p>
                            );
                          }
                        })}
                    </section>
                  );
                } else if (el.acf_fc_layout === "image_and_paragraph") {
                  return (
                    <section className="mb-5">
                      {el?.repeater?.map((e, i) => {
                        if (i % 2) {
                          return (
                            <section
                              key={i}
                              className="mobMl0 mobMr0 mb100 mobMb60"
                            >
                              <Row className="align-items-center">
                                <Col lg={6}>
                                  <Slide bottom>
                                    <h3 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite width80 mobWidth100 tabWidth100 tabLgWidth100 ">
                                      {e.title}
                                    </h3>
                                    <p className="fs18 colorLightBlack width85 mobWidth100 tabWidth100 tabLgWidth100 mb0 mobMb10">
                                      {e.paragraph}
                                    </p>
                                  </Slide>
                                </Col>
                                <Col lg={6}>
                                  <div>
                                    <Slide bottom>
                                      <GImage
                                        radius="24px"
                                        radiusMob="15px"
                                        src={e?.image?.url}
                                      />
                                    </Slide>
                                  </div>
                                </Col>
                              </Row>
                            </section>
                          );
                        } else {
                          return (
                            <section
                              key={i}
                              className="mobMl0 mobMr0 mb100 mobMb60"
                            >
                              <Row className="align-items-center flexreverse">
                                <Col md={6}>
                                  <div>
                                    <Slide bottom>
                                      <GImage
                                        radius="24px"
                                        radiusMob="15px"
                                        src={e?.image?.url}
                                      />
                                    </Slide>
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <section className="ml40 mobMl0 mobMb10">
                                    <Slide bottom>
                                      <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
                                        {e.title}
                                      </h2>
                                      <p className="fs17 tabFs15 tabLgFs15 mobFs15 mb0 colorLightBlack">
                                        {e.paragraph}
                                      </p>
                                    </Slide>
                                  </section>
                                </Col>
                              </Row>
                            </section>
                          );
                        }
                      })}
                    </section>
                  );
                } else if (el.acf_fc_layout === "title_and_paragraph") {
                  return (
                    <section className="mb-5">
                      {el?.repeater?.map((e, i) => {
                        return (
                          <section key={i} className="mobMl0 mobMr0">
                            <div className="mb60 mobMb30">
                              <Slide bottom>
                                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
                                  {e.title}
                                </h2>
                                <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack">
                                  {e.paragraph}
                                </p>
                              </Slide>
                            </div>
                          </section>
                        );
                      })}
                    </section>
                  );
                }
              })}

            {/* <p className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite ">
                When you are on the hunt for best designers for your website you
                definitely bump yourself with lots of questions. And yes after
                core research you will shortlist top agency that can help you
                out in the process. You meet, interact and designers explain to
                you about all the design technology or methodology, you may get
                confused with complicated proposals.
              </p>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb20 mobMb10">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p className="fs17 tabFs15 tabLgFs15 mobFs15 colorLightBlack mb0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p> */}
          </section>
        </Container>
      </section>
    </>
  );
};

export default SingleBlog;
