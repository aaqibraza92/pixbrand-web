import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import axios from "axios";
import { allportfolio, portfolioCat } from "../../Helpers/Api/Endpoint";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import GImage from "../../Components/GComponents/GImage/GImage";
import { Cursor } from "react-creative-cursor";
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

  useEffect(()=>{
    loadCategory();
  },[])
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
        setloader(false);
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
      <Container className="mb120 mobMb75">
        <section className="port-btn">
          <Slide bottom>
            <div className="port-btn-scroll">
              {allCategory.length > 0 &&
                allCategory?.map((cat, ind) => {
                  return (
                    <Link
                      key={ind}
                      className="btnRed"
                      to={`/portfolio-category/${cat?.id}`}
                    >
                      {cat?.name}
                    </Link>
                  );
                })}
            </div>
          </Slide>
        </section>
      </Container>
      <section>
        <Container className="overflow-hidden">
          <div>
            <Row className="gx-5 gXl10 mb100">
              {postData.length > 0 &&
                postData?.map((e, i) => {
                  if (i % 2) {
                    return (
                      <Col
                        lg={6}
                        md={6}
                        key={i}
                        className="d-flex flex-column justify-content-between revColMob"
                      >
                        <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                          <Slide bottom>
                            <div className="aboutPortfolio ">
                              <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                                {e.acf === false ? "" : e?.acf?.project_title}
                              </h6>
                              <h3 className="colorLightBlack fs32 tabFs24 col-md-7 col-sm-12 col-xs-12 tabLgFs24 mobFs20 fThin mb36">
                                {e?.title?.rendered}
                              </h3>
                            </div>
                          </Slide>
                          <div className="magnetWrapper">
                            <Link
                              to={`/portfolio/${e?.slug}`}
                              className="arrowLink colorWhite hover-me "
                            >
                              <Cursor isGelly={true} />
                              <div data-cursor-magnetic>
                                <div className="mb15">
                                  <span className="d-flex align-items-center">
                                    <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                                      View the project
                                    </span>
                                    <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                                      {Svg.arrowRight}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </GSection>
                        <GSection mb="0px">
                          <Slide bottom>
                            <div className="protfolioWrapper pBgLightBlue  radius24 overflow-hidden">
                              <GImage
                                className="scale"
                                width="100%"
                                src={
                                  e?.x_featured_media_large
                                    ? e?.x_featured_media_large
                                    : Img.p1
                                }
                              />
                            </div>
                          </Slide>
                        </GSection>
                      </Col>
                    );
                  } else {
                    return (
                      <Col
                        lg={6}
                        md={6}
                        key={i}
                        className="d-flex flex-column justify-content-between "
                      >
                        <GSection mb="0px">
                          <Slide bottom>
                            <div className="protfolioWrapper pBgGreen pr20 radius24 overflow-hidden">
                              <GImage
                                className="scale"
                                width="100%"
                                src={Img.p1}
                              />
                            </div>
                          </Slide>
                        </GSection>

                        <div className="aboutPortfolio">
                          <Slide bottom>
                            <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                              {e.acf === false ? "" : e?.acf?.project_title}
                            </h6>
                            <h3 className="colorLightBlack fs32 tabFs24 col-md-7 col-sm-12 col-xs-12 tabLgFs24 mobFs20 fThin mb36">
                              {e?.title?.rendered}
                            </h3>
                          </Slide>
                          <div className="magnetWrapper">
                            <Link
                              to={`/portfolio/${e?.slug}`}
                              className="arrowLink colorWhite hover-me "
                            >
                              <Cursor isGelly={true} />
                              <div data-cursor-magnetic>
                                <div className="mb15">
                                  <span className="d-flex align-items-center">
                                    <span className="mr15 fs14 tabFs13 tabLgFs13 mobFs13">
                                      View the project
                                    </span>
                                    <span className="circleArrow hvr-sweep-to-top  d-flex align-items-center radius100 justify-content-center">
                                      {Svg.arrowRight}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    );
                  }
                })}
            </Row>
          </div>
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
