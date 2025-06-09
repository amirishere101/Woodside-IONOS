import React from "react";
import Img1 from "../../assets/Images/Reuben-Sandwiches-Side.jpg";
import Img2 from "../../assets/Images/unnamed (1) (1).png";
import Img3 from "../../assets/Images/matzo-ball-soup-meat-2122297-hero-01-e583939fbd55487daa6bf371e5b60942.jpg";
import { Link } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "The Woodside Reuben",
    description:
      "Our Famous Reuben Sandwich with Corned Beef, Swiss Cheese, Sauerkraut, and Russian Dressing on Grilled Rye Bread.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "The Cyrano De Bergerac",
    description:
      "Our famous hot pastrami, corned beef, and russian dressing, topped with creamy slaw and melted swiss cheese on grilled rye bread.",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    name: "Matzoh Ball Soup",
    description: "A comforting bowl of our homemade matzoh ball soup.",
    aosDelay: "100",
  },
];

const Services = ({ setPage }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Catering Advertisement Section */}
          <div className="p-6 mb-20 text-center rounded-lg shadow-lg bg-primary/10">
            <h1 className="text-4xl font-bold text-primary font-cubano">
              Catering Services Available!
            </h1>
            <p className="mt-4 text-lg text-gray-700 font-din2014">
              Let us cater your next event with our delicious platters, wraps,
              and more. Perfect for parties, corporate events, and family
              gatherings.
            </p>
            <Link
              to={"/catering"}
              className="inline-block px-6 py-3 mt-6 text-white rounded-full bg-primary hover:bg-secondary font-din2014"
            >
              Learn More About Catering
            </Link>
          </div>
          {/* header title */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl font-bold text-gray-800 font-cubano">
              Our Most Popular Choices
            </h1>
          </div>
          {/* services card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  key={index}
                  className="bg-white rounded-2xl hover:bg-primary hover:text-white shadow-xl duration-200 max-w[300px] group relative mb-10 cursor-pointer"
                >
                  {/* image section */}
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-100 group-hover:rotate-6 duration-300 rounded-3xl"
                    />
                  </div>
                  {/* text content */}
                  <div className="p-4 text-center font-din2014">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
