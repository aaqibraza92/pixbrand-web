import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link,useParams } from "react-router-dom";
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
  const [loader, setloader] = useState(true);
  useEffect(() => {
    getAllPosts();
    loadCategory();
    window.scrollTo(0, 0);
    
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
        setloader(false);
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
    var date = new Date(str);
    var options = {  year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options)
  };

  

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog -  {postData && postData?.title?.rendered}</title>
        <meta name="home" content="Pixbrand Home"></meta>
      </Helmet>
    

      <section className="pt80 pb100 tabPt80 tabPb80 mobPt60 mobPb60 singleBlogData">
        <Container>
        <Row className="justify-content-center">
            <Col lg={10}>
            {
          loader &&  <div>
          <div class="skeleton" style={{height: '40px'}}/>
          <div class="skeleton" style={{height: '100px'}}/>
          <div class="skeleton" style={{height: '40px'}}/>
          <div class="skeleton" style={{height: '400px', marginTop: '100px' }}/>
          </div>
        }
          <div className="">
          <Row className="justify-content-center"> 
            <Col lg={10}>
              <h4 className="fs16 colorLightBlack">
                {dateConverter(postData?.modified)}
              </h4>
              <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 mb20 mobMb10 fw500 colorWhite">
                {postData?.title?.rendered}
              </h1>
              {/* <p className="fs22 mobFs18 tabFs18 tabLgFs18 mb40 mobMb20 colorWhite">
                Why Branding matters to your Business
              </p> */}
              <div className=" mb100 mobMb60 overscrollx">
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
            </Col>
          </Row>
          
          </div>

          <div className="mb30 mobMb30">
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

          {acfData.length > 0 &&
            acfData?.map((e, i) => {
              if (e.acf_fc_layout === "paragraph") {
                e.paragraph.length > 0 &&
                  e.paragraph?.map((elem, ind) => {
                    return (
                      <Row className="justify-content-center"> 
                      <Col lg={10}>
                      <div key={ind} className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite " dangerouslySetInnerHTML={{ __html: elem && elem.para }} />
                      </Col>
                      </Row>
                    );
                  });
              }
            })}

          <section className="mlr80 mobMl0 mobMr0 mb100 mobMb60 position-relative">
            {/* <div className="social-icons ">
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
            </div> */}

            {acfData?.length > 0 &&
              acfData?.map((el, index) => {
                if (el.acf_fc_layout === "paragraph") {
                  return (
                    <Row className="justify-content-center"> 
                    <Col lg={10}>
                    <section key={"parent" + index} className="mb-5">
                      {el.acf_fc_layout === "paragraph" &&
                        el?.paragraph?.map((e, i) => {
                          if (i === 0) {
                            return (
                              <div key={i} className="fs22 mobFs18 tabFs18 tabLgFs18 mobFs16 colorWhite" dangerouslySetInnerHTML={{ __html: e.para }} />
                          
                            );
                          } else {
                            return (
                              <div  className="fs20 tabFs15 tabLgFs15 mobFs15 colorWhite mb20 mobMb10"  key={i} dangerouslySetInnerHTML={{ __html: e.para }} />
                            
                            );
                          }
                        })}
                    </section>
                    </Col>
                    </Row>
                  );
                }
                else if (el.acf_fc_layout === "image_full"){
                  return(
                    <section className="mb-5">
                      {
                        el?.repeater?.map((e,i)=>(
                          <div key={i}>
                          <GImage
                            radius="24px"
                            radiusMob="15px"
                            src={e?.image?.url}
                          />
                        </div>
                        ))
                      }
                      </section>
                  )
                }
                else if (el.acf_fc_layout === "image_and_paragraph") {
                  return (
                    <section className="mb-5">
                      {el?.repeater?.map((e, i) => {
                        if (i % 2) {
                          return (
                            <Row className="justify-content-center"> 
                            <Col lg={10}>
                            <section
                              key={i}
                              className="mobMl0 mobMr0 mb100 mobMb60"
                            >
                              <Row className="align-items-center">
                                <Col lg={6}>
                                    <h3 className="fs36 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite width80 mobWidth100 tabWidth100 tabLgWidth100 ">
                                      {e.title}
                                    </h3>
                                    <div className="fs18 colorWhite width85 mobWidth100 tabWidth100 tabLgWidth100 mb0 mobMb10" dangerouslySetInnerHTML={{ __html: e.paragraph }} />
                                 
                                </Col>
                                <Col lg={6}>
                                  <div>
                                      <GImage
                                        radius="24px"
                                        radiusMob="15px"
                                        src={e?.image?.url}
                                      />
                                  </div>
                                </Col>
                              </Row>
                            </section>
                            </Col>
                            </Row>
                          );
                        } else {
                          return (
                            <Row className="justify-content-center"> 
                            <Col lg={10}>
                            <section
                              key={i}
                              className="mobMl0 mobMr0 mb100 mobMb60"
                            >
                              <Row className="align-items-center flexreverse">
                                <Col md={6}>
                                  <div>
                                      <GImage
                                        radius="24px"
                                        radiusMob="15px"
                                        src={e?.image?.url}
                                      />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <section className="ml40 mobMl0 mobMb10">
                                      <h3 className="fs36 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
                                        {e.title}
                                      </h3>
                                      <div className="fs20 tabFs15 tabLgFs15 mobFs15 mb0 colorWhite" dangerouslySetInnerHTML={{ __html: e.paragraph }} />
                                 
                                  </section>
                                </Col>
                              </Row>
                            </section>
                            </Col>
                            </Row>
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
                          <Row className="justify-content-center"> 
                          <Col lg={10}>
                          <section key={i} className="mobMl0 mobMr0">
                            <div className="mb30 mobMb30">
                                <h3 className="fs36 tabFs28 tabLgFs28 mobFs24 mb20 mobMb10 colorWhite">
                                  {e.title}
                                </h3>
                                <div className="fs20 tabFs15 tabLgFs15 mobFs15 colorWhite" dangerouslySetInnerHTML={{ __html: e.paragraph}} />
                              
                            </div>
                          </section>
                          </Col>
                          </Row>
                        );
                      })}
                    </section>
                  );
                }
              })}

          </section>
            </Col>
        </Row>
    
        </Container>
      </section>
    </>
  );
};

export default SingleBlog;
