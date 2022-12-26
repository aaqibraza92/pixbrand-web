import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-reveal'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { Container } from 'reactstrap'
import Img from '../../Assets/Img/Img'
import GImage from '../../Components/GComponents/GImage/GImage'
import { allposts } from '../../Helpers/Api/Endpoint'

const SingleBlog = (props) => {
    const id=useParams();
    const [postData,setPostData]=useState("");
  useEffect(()=>{
    getAllPosts();
  },[id?.id]);

  const getAllPosts = async() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(allposts+"/"+id?.id, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data)
      }
    });
  };

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <section className="pt80 pb100 tabPt80 tabPb80 mobPt60 mobPb60">
        <Container>
        <div className="text-center">
            <Slide bottom>
              <h4 className="fs16 colorLightBlack">PUBLISHED {dateConverter(postData?.modified)}</h4>
              <h1 className="fs65 tabFs60 tabLgFs60 mobFs45 mb20 mobMb10 fw500 colorWhite">
                {postData?.title?.rendered}
              </h1>
              {/* <p className="fs22 mobFs18 tabFs18 tabLgFs18 mb40 mobMb20 colorWhite">
                Why Branding matters to your Business
              </p> */}
              <div className="d-flex justify-content-center mb100 mobMb60 overscrollx">
                <button className="btn-blog mr10">Branding</button>
                <button className="btn-blog mr10">Communication</button>
                <button className="btn-blog mr10">Experience</button>
                <button className="btn-blog">Identity</button>
              </div>
              <div className="mb60 mobMb30">
                <GImage
                  radius="24px"
                  radiusMob="15px"
                  src={postData?.x_featured_media_original ? postData?.x_featured_media_original : Img.singleblogpage}
                />
              </div>
            </Slide>
          </div>
        </Container>
    </section>
  )
}

export default SingleBlog