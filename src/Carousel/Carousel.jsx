import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Images/carousel1.avif";
import img2 from "../../assets/Images/carousel2.avif";
import img3 from "../../assets/Images/carousel3.avif";
import img4 from "../../assets/Images/carousel4.jpg";
import img5 from "../../assets/Images/carousel5.avif";

const slides = [
  { img: img1 },
  { img: img5 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false, // Disable center mode to align images properly
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="m-auto">
        <div className="mb-10">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="">
                <div className="flex items-center justify-center">
                  <img
                    src={slide.img}
                    className="object-cover w-full h-64" // Use object-cover to fill the space and remove gaps
                    loading="lazy"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
