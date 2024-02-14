import Carousel from "react-bootstrap/Carousel";
import Image1 from "../images/slider1/1.avif";
import Image2 from "../images/slider1/2.avif";
import Image3 from "../images/slider1/3.avif";
import React from 'react';
function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
       <a href="https://www.dominos.co.in/"> <img className="d-block w-100" src={Image1} alt="First slide"/></a>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <a href="https://in.bookmyshow.com/events/gaurav-kapoor-live/ET00313122"><img className="d-block w-100" src={Image2} alt="Second slide" /></a>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://www.ronankeating.com/"><img className="d-block w-100" src={Image3} alt="Third slide" /></a>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Slider;