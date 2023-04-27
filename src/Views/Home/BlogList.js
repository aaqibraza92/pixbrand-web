import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import GSectionTitle from "../../Components/GComponents/GSectionTitle";
import GImage from "../../Components/GComponents/GImage/GImage";
import GSpacing from "../../Components/GComponents/GSpacing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Img from "../../Assets/Img/Img";
import { Link } from "react-router-dom";
import Svg from "../../Assets/Svg/Svg";
import Fade from "react-reveal/Fade";
import { Cursor } from "react-creative-cursor";
import { useEffect } from "react";
import axios from "axios";
import { allposts } from "../../Helpers/Api/Endpoint";
import { useState } from "react";

const WrapperBlog = styled.div`
  background: #191919;
`;
const BlogList = () => {
const [postData,setPostData]=useState("");
  useEffect(()=>{
    getAllPosts();
  },[]);

  const getAllPosts = async() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(allposts, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data)
      }
    });
  };

  return ( 
    <WrapperBlog className="pt100 pb100 mobPb40 mobPt40">
      <Container>


      <Fade bottom cascade>
          <GSpacing mb="40px" mobmb="0px">
          
              <GSectionTitle
                mtTitle="10px"
                widthTitle="68%"
                WidthTabLgTitle="56%"
                WidthTabTitle="75%"
                tt="uppercase"
                fsT="40px"
                pretitle="Our Blogs"
                fwPt="bold"
                colorPt="#FF0A2B"
                title="Latest stories, insights and ideas about design and technology of modern times."
              />
          </GSpacing>
       

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            550: {
              width: 550,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1201: {
              width: 1201,
              slidesPerView: 4,
            },
            1360: {
              width: 1360,
              slidesPerView: 4,
            },
          }}
        >
           <Fade bottom cascade>


       

           <div className="bloggerList">

           {
            postData.length > 0 && postData?.map((item,ind)=>{
              return <SwiperSlide key={ind}>
              <div >
              <div className="mb15">
              <Link
                  className="colorWhite fs20 tabFs16 tabLgFs16 mobFs16 lh28 hoverRed"
                  to={`/blog/${item?.slug}`}
                >
                <GImage radius="24px" src={item?.x_featured_media_medium ? item?.x_featured_media_medium : Img.b1} />
                </Link>
              </div>
              <p>
                <Link
                  className="colorWhite fs20 tabFs16 tabLgFs16 mobFs16 lh28 hoverRed"
                  to={`/blog/${item?.slug}`}
                >
                  {item.title?.rendered}
                </Link>
              </p>
              </div>  
              </SwiperSlide> 
            })
           }

        
      
          </div>
           </Fade>
       
        </Swiper>


        </Fade>

        <div className="magnetWrapper">
                  <Link
                    to="/contactus"
                    className="arrowLink colorWhite hover-me "
                  >
                    <Cursor isGelly={true} />
                    <div data-cursor-magnetic>
                      <div className="mb15 d-flex align-items-center">
                      <span className="mr10 fs14 tabFs12 tabLgFs12 mobFs12">
                      View All Blog
            </span>{" "}
            <span className="circleArrow d-flex align-items-center radius100 justify-content-center">
              {Svg.arrowRight}
            </span>
                      </div>
                    </div>
                  </Link>
                </div>
      </Container>
    </WrapperBlog>
  );
};

export default BlogList;
