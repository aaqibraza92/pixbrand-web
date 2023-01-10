import axios from "axios";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import Svg from "../../Assets/Svg/Svg";
import { allportfolio } from "../../Helpers/Api/Endpoint";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div className="pt80">
      <section className="mb100 mobMb30">
        <Container>
        {
          loader &&   <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        }
          <section className="mb80 mobMb30">
            <h4 className="fs16 colorWhite">{postData?.acf?.project_title}</h4>
            <h1 className="fs60 mobMb10 mobFs45 tabFs60  colorWhite">
              {postData?.title?.rendered}
            </h1>
            <div
              className="fs16 fThin colorWhite width50 mobWidth100 tabWidth100 tabLgWidth100"
              dangerouslySetInnerHTML={{ __html: postData?.content?.rendered }}
            />
          </section>
        </Container>
        <div>
          <img
            src={postData?.x_featured_media_original}
            alt=""
            className="w-100 mobMb15"
          />
        </div>
      </section>
     

      <section className="mb100 mobMb30">
        <Container className="overflow-hidden">
          {acfData?.length > 0 &&
            acfData?.map((el, index) => {
              if (el.acf_fc_layout === "single_image") {
                return el.image.map((e, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={e.image?.url}
                        alt=""
                        className="w-100 mb50 mobMb30"
                      />
                    </div>
                  );
                });
              } else if (el.acf_fc_layout === "two_row_image") {
                return (
                  <Row className="gx-5">
                    {el.two_image_repeater.map((e, i) => {
                      return (
                        <Col lg={6} xs={6} key={i}>
                          <div>
                            <img
                              src={e?.image?.url}
                              alt=""
                              className="w-100 mb50 mobMb30"
                            />
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                );
              } else if (el.acf_fc_layout === "title_and_content") {
                return    <section  className="bBottom mb80 mobMb30"> 
               { el.paragraph_repeater.map((e, i) => {
                  return (
                 
                      <div key={i} className="mb30 mobMb30">
                      {e?.title!=="" &&
                      <h3 className="fs30 colorWhite mb25 mobMb10">
                          {e?.title}
                        </h3>
                      }
                     
                        <p className="colorLightBlack mb0">
                          {e?.paragraph}
                        </p>
                      </div>
                    
                  );
                })}
                </section>
              }else if (el.acf_fc_layout === "about_portfolio") {
return  <section className="mb100 mobMb30">
      <Container>
        <Row>
          <Col lg={4} className="mobMb10">
            <section>
            {
              el?.sidebar_content?.map((e,i)=>{
                return     <div key={i} className="mb30 mobMb15">
                <h3 className="fs16 colorWhite"> {e?.title}</h3>
                <div
              className="colorLightBlack mb0 inlineData"
              dangerouslySetInnerHTML={{ __html: e?.content }}
            />
              </div>
              })
            }
           
            </section>
          </Col>
          <Col lg={8}>
            <section>
            {
              el?.title_and_content?.map((e,i)=>{
                return     <div key={i} className="mb30">
                <h3 className="fs30 colorWhite mb25 mobMb10">{e?.title}</h3>
                <p className="colorLightBlack mb0">
                {e?.paragraph}
                </p>
              </div>
              })
            }

              
            </section>
          </Col>
        </Row>
      </Container>
    </section>
              }
            })}

  
        </Container>
      </section>
    </div>
  );
};

export default SinglePortfolio;

// Challenge
const Challenge = () => {
  return (
    <section className="mb100 mobMb30">
      <Container>
        <Row>
          <Col lg={4} className="mobMb10">
            <section>
              <div className="mb30 mobMb15">
                <h3 className="fs16 colorWhite">Location</h3>
                <p className="colorLightBlack mb0">New Jersey, United States</p>
              </div>
              <div className="mb30 mobMb15">
                <h3 className="fs16 colorWhite">Location</h3>
                <p className="colorLightBlack mb0">New Jersey, United States</p>
              </div>
              <div className="mb30 mobMb15">
                <h3 className="fs16 colorWhite mb10">Location</h3>
                <span className="mr10">{Svg.android}</span>
                <span className="mr10">{Svg.mac}</span>
                <span className="mr10">{Svg.node}</span>
                <span>{Svg.react}</span>
              </div>
              <div className="mb20 mobMb15">
                <h3 className="fs16 colorWhite">Services se provided</h3>
                <p className="colorLightBlack mb0">- Visual Identity</p>
                <p className="colorLightBlack mb0">- Visual Identity</p>
                <p className="colorLightBlack mb0">- Visual Identity</p>
                <p className="colorLightBlack mb0">- Visual Identity</p>
              </div>
              <div className="mb30 mobMb15">
                <span className="fs16 colorWhite mr15">Visit Giofox</span>
                <span>{Svg.arrowwithLightBground}</span>
              </div>
            </section>
          </Col>
          <Col lg={8}>
            <section>
              <div className="mb30">
                <h3 className="fs30 colorWhite mb25 mobMb10">The Client</h3>
                <p className="colorLightBlack mb0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
              </div>
              <div className="mb30 ">
                <h3 className="fs30 colorWhite mb25 mobMb10">The Client</h3>
                <p className="colorLightBlack mb25 mobMb15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
                <p className="colorLightBlack mb0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
              </div>
              <div className="mb30">
                <h3 className="fs30 colorWhite mb25 mobMb10">The Client</h3>
                <p className="colorLightBlack mb25 mobMb15">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
                <p className="colorLightBlack mb0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quod nihil non dolorum dolores consectetur, accusamus
                  provident harum! Blanditiis ex voluptatem qui recusandae
                  reiciendis, ipsum nemo deserunt! Porro doloribus qui
                  perspiciatis inventore autem doloremque delectus sequi saepe,
                  dolorum, atque, animi quam. Alias autem minima quas voluptatem
                  eaque, ad at quaerat!
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
