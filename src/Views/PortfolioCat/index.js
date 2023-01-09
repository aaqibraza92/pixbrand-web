import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { allportfolio } from "../../Helpers/Api/Endpoint";
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
  }, [categoryId?.name,currentPage]);

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
          setPostData(res?.data);
          setloading(false);

          setTotalPage(res?.headers["x-wp-totalpages"]);
          setTotalCount(res?.headers["x-wp-total"]);
          if (currentPage !== 1) {
            navigation(`/category/4/?page=${currentPage}`);
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
      <Row className="gx-5 gXl10 mb100">
          {
            postData.length > 0 && postData?.map((e,i)=>{
              if(i%2){
               return <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-between "
            >
              <GSection mb="150px" tabLgmb="80px" className="mobMb0">
                <Slide bottom>
                  <div className="aboutPortfolio ">
                    <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                      {e.acf===false ? "" : e?.acf?.project_title}
                    </h6>
                    <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
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
                  <div className="protfolioWrapper pBgLightBlue pl20 radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={e?.x_featured_media_large ? e?.x_featured_media_large : Img.p1} />
                  </div>
                </Slide>
              </GSection>
            </Col>
            
              }else{
              return   <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-between "
            >
              <GSection mb="0px">
                <Slide bottom>
                  <div className="protfolioWrapper pBgGreen pl20 pr20 radius24 overflow-hidden">
                    <GImage className="scale" width="100%" src={Img.p1} />
                  </div>
                </Slide>
              </GSection>

              <div className="aboutPortfolio">
                <Slide bottom>
                  <h6 className="fs17 tabFs13 tabLgFs13 mobFs13 mb20 mobMb10 tabMb10 colorWhite">
                  {e.acf===false ? "" : e?.acf?.project_title}
                  </h6>
                  <h3 className="colorLightBlack fs32 tabFs24 tabLgFs24 mobFs20 fThin mb36">
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
              }
            })
          }
         

          
          </Row>

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
                Some Good Reads for You!
              </h1>
              <p className="fs24 colorWhite width70 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                Here are some of our curated blogs, fitting for a New Jersey web
                development company like us.
              </p>
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
