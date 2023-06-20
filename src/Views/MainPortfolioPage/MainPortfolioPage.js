import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import axios from "axios";
import { allportfolio, portfolioCat } from "../../Helpers/Api/Endpoint";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import GImage from "../../Components/GComponents/GImage/GImage";
import Svg from "../../Assets/Svg/Svg";
import GSection from "../../Components/GComponents/GSection";
import Img from "../../Assets/Img/Img";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";

const MainPortfolioPage = () => {
  const navigation = useNavigate();
  const [loader, setloader] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [postData, setPostData] = useState("");
  const [allCategory, setAllCategory] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );

  useEffect(() => {
    loadCategory();
  }, []);
  useEffect(() => {
    loadAllPosts();
  }, [currentPage]);

  const setCurrentPageHandle = (val) => {
    setcurrentPage(val);
    setSearchParams({ page: val });
    window.scrollTo(0, 0);
  };

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
        //setloader(false);
      }
    });
  };

  const loadAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios
      .get(`${allportfolio}?per_page=10&page=${currentPage}`, options)
      .then((res) => {
        if (res && res.status === 200) {
         
          setPostData(res?.data);
          setloader(false);
          setTotalPage(res?.headers["x-wp-totalpages"]);
          setTotalCount(res?.headers["x-wp-total"]);
          if (currentPage !== 1) {
            navigation(`/portfolio/?page=${currentPage}`);
          }
        }
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - Pixbrand</title>
        <meta name="Portfolio" content="Pixbrand Portfolio"></meta>
      </Helmet>

      <Title />
      <Container>
        {loader && (
          <div className="text-center mb60">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </Container>

      <section>
      <Container className="overflow-hidden">
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
                    <div className="protfolioWrapper position-realtive d-flex justify-content-center align-items-center radius24 overflow-hidden mb-4">
                    <Link
                              to={`/portfolio/${e?.slug}`}>
                            <GImage
                              className="scale"
                              width="100%"
                              src={
                                e?.x_featured_media_large
                                  ? e?.x_featured_media_large
                                  : Img.p1
                              }
                            />
                            </Link>
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
                </div>;
          <Pagination
            {...bootstrap5PaginationPreset}
            current={Number(currentPage)}
            total={Number(totalPage)}
            onPageChange={setCurrentPageHandle}
          />
        </Container>
      </section>
    </div>
  );
};

export default MainPortfolioPage;

const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row>
          <Col xl={10} lg={10} md={12}>
            <section>
              <Slide bottom>
                <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                  The work we do,
                </h1>
                <h1 className="fs80 mobFs30 tabFs60 tabLgFs60 fw600 colorWhite mb0">
                  and the people we help.
                </h1>
              </Slide>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
