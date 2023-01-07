import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GImage from "../../Components/GComponents/GImage/GImage";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { allposts } from "../../Helpers/Api/Endpoint";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "react-creative-cursor/dist/styles.css";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";

const Allblogs = () => {
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [postData, setPostData] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );


  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const [loading, setloading] = useState(true);
  useEffect(() => {
    loadAllPosts();
  }, [currentPage]);

  const setCurrentPageHandle = (val) => {
    setcurrentPage(val);
    setSearchParams({ page: val });
    window.scrollTo(0, 0);
  };


  const loadAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${allposts}?per_page=10&page=${currentPage}`, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data);
        setloading(false);
        setTotalPage(res?.headers["x-wp-totalpages"]);
        setTotalCount(res?.headers["x-wp-total"]);
        if (currentPage !== 1) {
          navigation(`/blogs/?page=${currentPage}`);
        }

      }
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Pixbrand</title>
        <meta name="Blog" content="Pixbrand Blog"></meta>
      </Helmet>
      <Title />
      {loading ? (
        <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
        {
          currentPage===1 && <Container className="mb100 mobMb60">
            <Row className="align-items-center flexreverse">
              <Col md={6}>
                <div>
                  <Link to={`/blog/${postData?.[0]?.slug}`}>
                    <GImage
                      radius="24px"
                      radiusMob="15px"
                      src={postData?.[0]?.x_featured_media_large}
                    />
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                <section className="d-flex justify-content-between mobMl0 ml40">
                  <div>
                    <p className="fs16 colorLightBlack">
                      {dateConverter(postData?.[0]?.modified)}
                    </p>
                    <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite">
                      <Link
                        to={`/blog/${postData?.[0]?.slug}`}
                        className="colorWhite"
                      >
                        {postData?.[0]?.title?.rendered}
                      </Link>
                    </h2>

                    <div className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightBlack excerptData">
                      {
                        <div
                          dangerouslySetInnerHTML={{
                            __html: postData?.[0]?.excerpt?.rendered,
                          }}
                        />
                      }
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
     
          </Container>
        }
      
          <Container>
            <Row>
              {postData.length > 0 &&
                postData.map((item, ind) => {
                  if (ind === 0) {
                    return "";
                  } else {
                    return <BlogListing key={ind} data={item} />;
                  }
                })}
            </Row>

            <Pagination
          {...bootstrap5PaginationPreset}
          current={Number(currentPage)}
          total={Number(totalPage)}
          onPageChange={setCurrentPageHandle}
       
        />
          </Container>
        </>
      )}
    </>
  );
};

export default Allblogs;

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

const BlogListing = (props) => {
  const { data } = props;
  console.log("props1", data);

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
