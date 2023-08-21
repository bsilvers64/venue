import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_two from "../../resources/images/slide_two.jpeg";
import slide_three from "../../resources/images/slide.jpg";
import slide_one from "../../resources/images/image.jpeg";
import slide_four from "../../resources/images/slide_three.jpg";

console.log(slide_one);

function Carrousel() {
  const Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px`, width: "100%" }}
    >
      <Slider {...Settings}>
        <div>
          <div
            className="carrousel-image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel-image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel-image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel-image"
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
}

export default Carrousel;
