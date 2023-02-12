import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";


import { Container } from "reactstrap";

const VerticalTabs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Helmet>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous"
        /> */}
        {/* <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
          integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
          integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
          crossorigin="anonymous"
        ></script> */}
      </Helmet>
      <Container>
      <div class="container-fluid">

<div id="demo" class="sliderTab carousel slide vert" data-ride="carousel" data-interval="10000">

  <div class="row no-gutters">

    <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
      <div class="carousel-indicators">
        <div data-target="#demo" data-slide-to="0" class="item active"></div>
        <div data-target="#demo" data-slide-to="1" class="item">Lorem 1</div>
        <div data-target="#demo" data-slide-to="2" class="item">Lorem 2</div>
        <div data-target="#demo" data-slide-to="3" class="item">Lorem 3</div>
        <div data-target="#demo" data-slide-to="4" class="item">Lorem 4</div>
        <div data-target="#demo" data-slide-to="5" class="item">Lorem 5</div>
      </div>
    </div>


    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
      <div class="carousel-inner">
        <div class="carousel-item active">
       <h3>lorem</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque at ipsum suscipit illo cupiditate aspernatur dolore earum similique excepturi id consequatur voluptatum facilis ullam, iste sint quaerat ipsa dolor!</p>
        </div>
        <div class="carousel-item">
            <h3>lorem 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque at ipsum suscipit illo cupiditate aspernatur dolore earum similique excepturi id consequatur voluptatum facilis ullam, iste sint quaerat ipsa dolor!</p>
     
        </div>
        <div class="carousel-item">
            <h3>lorem 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque at ipsum suscipit illo cupiditate aspernatur dolore earum similique excepturi id consequatur voluptatum facilis ullam, iste sint quaerat ipsa dolor!</p>
        
        </div>
        <div class="carousel-item">
            <h3>lorem 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque at ipsum suscipit illo cupiditate aspernatur dolore earum similique excepturi id consequatur voluptatum facilis ullam, iste sint quaerat ipsa dolor!</p>
      
        </div>
        <div class="carousel-item">
            <h3>lorem 4</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque at ipsum suscipit illo cupiditate aspernatur dolore earum similique excepturi id consequatur voluptatum facilis ullam, iste sint quaerat ipsa dolor!</p>
     
        </div>
        <div class="carousel-item">
            <h3>lorem 5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque at ipsum suscipit illo cupiditate aspernatur dolore earum similique excepturi id consequatur voluptatum facilis ullam, iste sint quaerat ipsa dolor!</p>
    
        </div>
      </div>
    </div>


  </div>
</div></div>
      </Container>
    </>
  );
};

export default VerticalTabs;
