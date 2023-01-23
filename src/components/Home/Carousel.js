import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css'
import Carousel from "react-bootstrap/Carousel";
import banner1 from "./salebanners/Black and Red Modern Discount Banner.png";
import banner2 from "./salebanners/Blue Dynamic Fashion Special Sale Banner.png";
import banner3 from "./salebanners/Dark Blue Modern Discount Banner.png";

 
const CarouselSlide = () => {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="banner">
          <img
            className="d-block w-100 banner-image"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="banner">
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item className="banner">
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
  )
}

export default CarouselSlide;