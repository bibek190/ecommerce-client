import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../components/layouts/images/img1.jpeg";
import img2 from "../../components/layouts/images/img2.jpeg";
import img3 from "../../components/layouts/images/img3.jpeg";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={img1} className="image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className="image" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
