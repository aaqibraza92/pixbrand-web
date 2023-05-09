import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { allportfolio, portfolioCat } from "../../Helpers/Api/Endpoint";
import {
  Link,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import "react-creative-cursor/dist/styles.css";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";
import { Cursor } from "react-creative-cursor";
import Svg from "../../Assets/Svg/Svg";
import { Slide } from "react-reveal";
import GSection from "../../Components/GComponents/GSection";

const PortfolioCat = () => {
  const categoryId = useParams();
  const [loading, setloading] = useState(true);
  const [postData, setPostData] = useState("");
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [loader, setloader] = useState(true);
  const [allCategory, setAllCategory] = useState("");
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );

  const setCurrentPageHandle = (val) => {
    setcurrentPage(val);
    setSearchParams({ page: val });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    postOfCategory();
    loadCategory();
  }, [categoryId?.name,currentPage]);

  const loadCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${portfolioCat}`, options).then((res) => {
      if (res?.status === 200) {
        setAllCategory(res?.data);
        setloader(false);
      }
    });
  };

  const postOfCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    await axios
      .get(
        allportfolio +
          "?portfolio-category=" +
          categoryId?.name +
          "&per_page=10&page=" +
          currentPage,
        options
      )
      .then((res) => {
        if (res && res.status === 200) {
          console.log(res?.data);
          setPostData(res?.data);
          setloading(false);

          setTotalPage(res?.headers["x-wp-totalpages"]);
          setTotalCount(res?.headers["x-wp-total"]);
          if (currentPage !== 1) {
            navigation(`/portfolio-category/${categoryId?.name}/?page=${currentPage}`);
          }
          setloader(false);
        }
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category - Pixbrand</title>
        <meta name="Blog" content="Pixbrand Blog"></meta>
      </Helmet>

      <Title />

      <Container>
      {
          loader &&   <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        }
        <div className="brick-grid">
        {postData.length > 0 &&
                postData?.map((e, i) => {
                
                   return  <div className="brick" key={i}>
                   {i === 0 && (
                          <div className="mb120">
                            <p className="colorLightBlack fs18 tabFs24 tabLgFs24 mobFs18 mb36">
                              Our projects are the result of meticulous
                              research, attention to details and of improving
                              the customer and users´ needs.
                            </p>
                            <section className="port-btn">
                              <Slide bottom>
                                <div className="port-btn-scroll">
                                  {allCategory.length > 0 &&
                                    allCategory?.map((cat, ind) => {
                                      return (
                                        <Link
                                          key={ind}
                                          className="btnTransparent mr10"
                                          to={`/portfolio-category/${cat?.id}`}
                                        >
                                          {cat?.name}
                                        </Link>
                                      );
                                    })}
                    
                                </div>
                              </Slide>
                            </section>
                          </div>
                        )}
                        
                    <Slide bottom >
                    <div className="mb80 mobMb30">
                    <div className="protfolioWrapper position-realtive d-flex justify-content-center align-items-center pBgLightBlue radius24 overflow-hidden mb-4">
                            <GImage
                              className="scale"
                              width="100%"
                              src={
                                e?.x_featured_media_large
                                  ? e?.x_featured_media_large
                                  : Img.p1
                              }
                            />
                            <Link
                              to={`/portfolio/${e?.slug}`}
                              className="arrowLink colorWhite hover-me position-absolute"
                            >
                              <div className="btnPortfolio transition">
                                <span className="fs17 fw500 colorBlack">
                                  Case Study
                                </span>{" "}
                                <span className="ml10">{Svg.ArrowDiagnal}</span>
                              </div>
                            </Link>
                          </div>
                          <div className="aboutPortfolio mb60 mobMb30">
                            <h6 className="fs28 tabFs18  mobFs18 mb9 mobMb10 tabMb10 colorWhite">
                              <Link
                                to={`/portfolio/${e?.slug}`}
                                className="colorWhite"
                              >
                                {e.acf === false ? "" : e?.acf?.project_title}
                              </Link>
                            </h6>
                            <p className="colorLightBlack fs18 tabFs24 tabLgFs24 mobFs18 mb36 col-md-7 col-sm-12 col-xs-12">
                              {e?.title?.rendered}
                            </p>
                          </div>
                    </div>
                        
                        </Slide>
                    </div>
              
             
                
                })}

               

                </div>

                {
                  postData.length===0 &&
                  <h2 className="colorWhite fs30 text-center mb60">
                    Sorry! No Data found, Go to  <Link to="/portfolio" className="colorRed"> All Portfolio</Link>
                  </h2>
                }

          <Pagination
            {...bootstrap5PaginationPreset}
            current={Number(currentPage)}
            total={Number(totalPage)}
            onPageChange={setCurrentPageHandle}
          />
   
      </Container>
    </>
  );
};

export default PortfolioCat;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 tabFs60 tabLgFs60 mobFs45 fw600 colorWhite mb20">
              The work we do,and the people we help.
              </h1>
              {/* <p className="fs24 colorWhite width70 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                Here are some of our curated blogs, fitting for a New Jersey web
                development company like us.
              </p> */}
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};



const BlogListings = (props) => {
  const { data } = props;

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <Col lg={4} md={4} className="">
      <section className="mb80 mobMb40">
        <div className="mb20 mobMb10">
          {data?.x_featured_media_large ? (
            <div className="postImgWrapper mb-2">
              <Link to={`/blog/${data?.slug}`}>
                <GImage
                  radius="24px"
                  radiusMob="15px"
                  src={data?.x_featured_media_large}
                />
              </Link>
            </div>
          ) : (
            <Link to={`/blog/${data?.slug}`}>
              <GImage radius="24px" radiusMob="15px" src={Img?.goodreads1} />
            </Link>
          )}
        </div>
        <p className="fs16 colorLightBlack mb0">
          {dateConverter(data?.modified)}
        </p>
        <div className="mb20 mobMb10">
          <Link
            to={`/blog/${data?.slug}`}
            className="colorWhite fs28 tabFs20 tabLgFs20 mobFs18 lh33"
          >
            {data?.title?.rendered}
          </Link>
        </div>
        <div className="fs20 colorLightBlack mobFs16 mb0 excerptData">
          {
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
            />
          }
        </div>
      </section>
    </Col>
  );
};
