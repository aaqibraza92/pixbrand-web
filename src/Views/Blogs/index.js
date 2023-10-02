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
    var date = new Date(str);
    var options = {  year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options)
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

    await axios
      .get(`${allposts}?per_page=10&page=${currentPage}`, options)
      .then((res) => {
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
        <title>
          PixBrand Blog | Website Design & Development, Digital Marketing and
          Strategy Related Content{" "}
        </title>
        <meta
          name="description"
          content="Stay ahead in trends with PixBrand Blog. Explore the insightful articles & expert tips to enhance your creative strategies & boost your brand"
        ></meta>
      </Helmet>
      <Title />
      {loading ? (
        <Container className="mb60">
          <Row className="gy-5">
            <Col md={6}>
              <div class="skeleton" style={{ height: "300px" }}></div>
              <div class="skeleton" style={{ height: "30px" }}></div>
              <div class="skeleton" style={{ height: "60px" }}></div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: "300px" }}></div>
              <div class="skeleton" style={{ height: "30px" }}></div>
              <div class="skeleton" style={{ height: "60px" }}></div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: "300px" }}></div>
              <div class="skeleton" style={{ height: "30px" }}></div>
              <div class="skeleton" style={{ height: "60px" }}></div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: "300px" }}></div>
              <div class="skeleton" style={{ height: "30px" }}></div>
              <div class="skeleton" style={{ height: "60px" }}></div>
            </Col>

            <Col md={6}>
              <div class="skeleton" style={{ height: "300px" }}></div>
              <div class="skeleton" style={{ height: "30px" }}></div>
              <div class="skeleton" style={{ height: "60px" }}></div>
            </Col>
            <Col md={6}>
              <div class="skeleton" style={{ height: "300px" }}></div>
              <div class="skeleton" style={{ height: "30px" }}></div>
              <div class="skeleton" style={{ height: "60px" }}></div>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Container>
            <Row>
              {postData.length > 0 &&
                postData.map((item, ind) => {
                  return <BlogListing key={ind} data={item} />;
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
        <section className="mobtl">
          <p className="fs24 colorWhite mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
            Blog
          </p>
          <h1 className="fs80 tabFs60 tabLgFs60 mobFs45 fw600 colorWhite mb20">
            Some Good Reads for You!
          </h1>
          <Row>
            <Col lg={12}>
              <p className="fs24 colorWhite mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                Here are some of our curated blogs, fitting for a New Jersey web
                development company like us.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

const BlogListing = (props) => {
  const { data } = props;

  const dateConverter = (str) => {
    var date = new Date(str);
    var options = {  year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options)
  };

  return (
    <Col lg={6} md={6} className="">
      <section className="mb70 mobMb30 blogList">
        <div className="mb20 mobMb10">
          {data?.x_featured_media_large ? (
            <div className="postImgWrapper mb-2">
              <Link to={`/blog/${data?.slug}`}>
                <GImage
                  radius="10px"
                  radiusMob="10px"
                  src={data?.featured_image_url}
                />
              </Link>
            </div>
          ) : (
            <Link to={`/blog/${data?.slug}`}>
              <GImage radius="24px" radiusMob="15px" src={Img?.goodreads1} />
            </Link>
          )}
        </div>
        <p className="fs16 mt10 colorLightBlack mb0 dateView" style={{backgroundColor: data?.acf?.date_button_bg_color, color: data?.acf?.date_button_text_color}}>
          {dateConverter(data?.modified)}
        </p>
        <div className="mt20 listTitle">
          <Link
            to={`/blog/${data?.slug}`}
            className="colorWhite fs28 tabFs20 tabLgFs20 mobFs18 lh33"
          >
            <div
              dangerouslySetInnerHTML={{ __html: data?.title?.rendered}}
            />
          </Link>
        </div>
        {/* <div className="fs20 colorLightBlack mobFs16 mb0 excerptData">
          {
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
            />
          }
        </div> */}
      </section>
    </Col>
  );
};
