import React from "react";
import BlogList from "./BlogList";
import Faq from "./Faq";
import "./Home.css";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio/Portfolio";
import { Helmet } from "react-helmet";
import 'react-creative-cursor/dist/styles.css';
import ContactUsSection from "./ContactUsSection";
import StandWithUs from "./StandWithUs";
import BannerSlider from "./BannerSlider";
import AboutUsSection from "./AboutUsSection";
import OurServices from "./OurServices";

const Home = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Pixbrand</title>
        <meta name="home" content="Pixbrand Home"></meta>
      </Helmet>
      <div className="overflow-hidden">
      <BannerSlider/>
      </div>
      <OurServices/>
      <AboutUsSection/>
      
        {/* <HomeBanner /> */}
        {/* <Slide bottom>
          <Services />
        </Slide> */}
        {/* <Services2 /> */}
        <Portfolio />
        {/* <div className="overflow-hidden">
        <Marque />
        </div> */}
       
        <StandWithUs/>
        <ContactUsSection/>
        {/* <Services3 /> */}
        {/* <Skills /> */}
        <Testimonials />
        <BlogList />
        <Faq />
    </>
  );
};

export default Home;
