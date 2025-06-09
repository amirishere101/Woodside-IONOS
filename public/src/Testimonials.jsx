import React from "react";
import Slider from "react-slick";
import deandre from "../assets/Images/pfps/Deandre.png";
import jerry from "../assets/Images/pfps/jerry.png";
import kitty from "../assets/Images/pfps/Kitty.png";
import zac from "../assets/Images/pfps/zac.png";

const TestimonialData = [
  {
    id: 1,
    name: "Jerry Sanders",
    text: "We dine at the Deli for over 20 years. What makes it such a treat is the willingness to deliver a quality comfort meal. The entire staff are always friendly and interested to make sure the meal meets your expectations and have breakfast lunch or dinner any time. They still hold standards of quality for many meals like subs burgers and on and on. Thank you Deli!",
    img: jerry,
  },
  {
    id: 2,
    name: "Deandre' Jackson",
    text: "My fiancé and I really loved this location from the service to the homey feel and delicious food. We got everything fresh and even the baked items were just delivered today freshly made. We got a wide range of items from pancakes to waffles and a sandwich. I got sides of corned beef hash and bacon. I will continue to come here and put more people onto this hidden gem.",
    img: deandre,
  },
  {
    id: 3,
    name: "Kitty Anderson",
    text: "In all my years in the area - I’m glad I finally was able to make a trip. The time I came Wednesday was nice and quiet. I got to enjoy my meal without being interrupted multiple times nor any loud music to bust my ear drums. The decor is a bit antiquated but it adds to the charm! Spacious place and the server was prompt maybe even too prompt/not a fault by any means lol shows efficiency. The sandwich/serving size was AWESOME! Esp these days you can’t find generous portions anywhere without having to pay an up charge - totally get what you pay for here. Fresh ingredients and the triangle cuts in the sandwich just added to the overall home vibe as well. Simply a great experience I will be coming back for sure.",
    img: kitty,
  },
  {
    id: 5,
    name: "Zac R",
    text: "Germantown has very few neighborhood places, but this is a good one. They've been around for years, and it's always a good go to. The food is consistently good, and there's something for everyone here. It's a good place to go when like one person is craving a burger, but the other person wants Italian. Plus, the service here is always great. We go almost every weekend for breakfast, and by now they've got our faces and orders memorized. I will agree though, the food is a tad pricey for what it is, but overall it's a good little place.",
    img: zac,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-center font-cubano"
          >
            Hearing From You
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in" data-aos-delay="50">
          {" "}
          {/* Reduced delay */}
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl bg-primary/10">
                  <div className="mb-4">
                    <img src={data.img} alt="" />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-din2014">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute top-0 right-0 font-serif text-black/20 text-9xl">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
