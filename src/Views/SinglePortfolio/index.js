import axios from "axios";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { allportfolio } from "../../Helpers/Api/Endpoint";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Slide } from "react-reveal";

const SinglePortfolio = () => {
  const id = useParams();
  const [postData, setPostData] = useState("");
  const [acfData, setacfData] = useState("");
  const [loader, setloader] = useState(true);
  const [allCategory, setAllCategory] = useState("");

  useEffect(() => {
    getAllPosts();
    window.scrollTo(0, 0);
  }, [id?.slug]);

  const getAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    await axios.get(allportfolio + "?slug=" + id?.slug, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data?.[0]);
        setacfData(
          res?.data?.[0]?.acf === false
            ? ""
            : res?.data?.[0]?.acf?.flexible_content
        );
        setloader(false);
      }
    });
  };

  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - {postData && postData?.title?.rendered}</title>
        <meta name="home" content="Pixbrand Home"></meta>
      </Helmet>
      <div className="pt80">
      <section className="mb100 mobMb30">
        <Container>
          {loader && (
            <div className="text-center mb60">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <section className="mb80 mobMb30">
          <Slide bottom>
            <h4 className="fs16 colorWhite">{postData?.acf?.project_title}</h4>
            <h1 className="fs60 mobMb10 mobFs45 tabFs60  colorWhite">
              {postData?.title?.rendered}
            </h1>
            <div
              className="fs16 fThin colorWhite width50 mobWidth100 tabWidth100 tabLgWidth100"
              dangerouslySetInnerHTML={{ __html: postData?.content?.rendered }}
            />
             </Slide>
          </section>
        </Container>
        <div>
        <Slide bottom>
          <img
            src={postData?.x_featured_media_original}
            alt=""
            className="w-100 mobMb15"
          />
          </Slide>
        </div>
      </section>

      <section className="mb100 mobMb30">
      <Slide bottom>
        <Container className="overflow-hidden">
          {acfData?.length > 0 &&
            acfData?.map((el, index) => {
              if (el.acf_fc_layout === "single_image") {
                return el.image.map((e, i) => {
                  return (
                    <Slide bottom>
                    <div key={i}>
                    
                      <img
                        src={e.image?.url}
                        alt=""
                        className="w-100 mb50 mobMb30"
                      />
                    </div>
                    </Slide>
                  );
                });
              } else if (el.acf_fc_layout === "two_row_image") {
                return (
                  <Row className="gx-5">
                    {el.two_image_repeater.map((e, i) => {
                      return (
                        <Col lg={6} xs={6} key={i}>
                        <Slide bottom>
                          <div>
                            <img
                              src={e?.image?.url}
                              alt=""
                              className="w-100 mb50 mobMb30"
                            />
                          </div>
                          </Slide>
                        </Col>
                      );
                    })}
                  </Row>
                );
              } else if (el.acf_fc_layout === "title_and_content") {
                return (
                  <section className="bBottom mb80 mobMb30">
                    {el.paragraph_repeater.map((e, i) => {
                      return (
                        <Slide bottom>
                        <div key={i} className="mb30 mobMb30">
                          {e?.title !== "" && (
                            <h3 className="fs30 colorWhite mb25 mobMb10">
                              {e?.title}
                            </h3>
                          )}

                          <p className="colorLightBlack mb0">{e?.paragraph}</p>
                        </div>
                        </Slide>
                      );
                    })}
                  </section>
                );
              } else if (el.acf_fc_layout === "about_portfolio") {
                return (
                  <section className="mb100 mobMb30">
                    <Container>
                      <Row>
                        <Col lg={4} className="mobMb10">
                          <section>
                            {el?.sidebar_content?.map((e, i) => {
                              return (
                                <div key={i} className="mb30 mobMb15">
                                <Slide bottom>
                                  <h3 className="fs16 colorWhite">
                                    {" "}
                                    {e?.title}
                                  </h3>
                                  <div
                                    className="colorLightBlack mb0 inlineData"
                                    dangerouslySetInnerHTML={{
                                      __html: e?.content,
                                    }}
                                  />
                                        </Slide>
                                </div>
                              );
                            })}
                          </section>
                        </Col>
                        <Col lg={8}>
                          <section>
                            {el?.title_and_content?.map((e, i) => {
                              return (
                                <div key={i} className="mb30">
                                <Slide bottom>
                                <h3 className="fs30 colorWhite mb25 mobMb10">
                                    {e?.title}
                                  </h3>
                                  <p className="colorLightBlack mb0">
                                    {e?.paragraph}
                                  </p>
                                </Slide>
                             
                                </div>
                              );
                            })}
                          </section>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                );
              }
            })}
        </Container>

        </Slide>
      </section>
    </div>
    </>
   
  );
};

export default SinglePortfolio;
