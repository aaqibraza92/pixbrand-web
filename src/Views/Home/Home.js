import React from "react";
import BlogList from "./BlogList";
import Faq from "./Faq";
import "./Home.css";
import HomeBanner from "./HomeBanner";
import Services from "./Services";
import Services2 from "./Services2";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio/Portfolio";
import Services3 from "./Services3";
import Skills from "./Skills";
import Marque from "../Marque/Marque";
import { Helmet } from "react-helmet";
import Slide from "react-reveal/Slide";
import 'react-creative-cursor/dist/styles.css';
import VerticalTabs from "./VerticalTabs";
import ContactUsSection from "./ContactUsSection";
import StandWithUs from "./StandWithUs";
import BannerSlider from "./BannerSlider";
import AboutUsSection from "./AboutUsSection";

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
      <AboutUsSection/>
        {/* <HomeBanner /> */}
        <Slide bottom>
          <Services />
        </Slide>
        <Services2 />
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
