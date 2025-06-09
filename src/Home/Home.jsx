import React from "react";
import HeroImg from "../../assets/Images/unnamed (1) (1).png";
import { Link } from "react-router-dom";
import { BsLink } from "react-icons/bs";

const Home = ({}) => {
  return (
    <div className="h-[400px] sm:h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container flex items-center h-full pt-4 pb-2 sm:pb-0 sm:pt-16">
        <div className="grid h-full grid-cols-1 sm:grid-cols-2">
          {/*text content*/}
          <div className="flex flex-col order-2 gap-1 pt-0 text-center sm:text-left sm:order-1">
            <h1 className="text-2xl font-bold leading-snug sm:text-6xl lg:text-7xl font-din2014 sm:leading-normal">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/90 font-cubano">
                The Woodside Deli
              </span>{" "}
              <br />
              Serving Legendary Breakfast & Sandwiches Since 1947.
            </h1>
            <Link to="/menu">
              <button className="px-2 py-1 text-xs text-white duration-200 border-2 rounded-full sm:text-base bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105 font-din2014">
                Check Out Our Famous Sandwich Specialties
              </button>
            </Link>
          </div>

          {/*image content*/}
          <div className="relative flex items-center justify-center sm:items-center sm:justify-center sm:order-2">
            <img
              src={HeroImg}
              alt="spinning food"
              className="w-[200px] sm:w-[450px] sm:scale-125 mx-auto sm:mx-0"
            />
            <div className="absolute hidden p-3 bg-gradient-to-r from-primary to-secondary rounded-xl top-10 left-10 font-din2014 sm:block">
              <h1 className="text-white">Takeout</h1>
            </div>
            <div className="absolute hidden p-3 bg-gradient-to-r from-primary to-secondary rounded-xl bottom-10 right-10 font-din2014 sm:block">
              <h1 className="text-white">Dine-in</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
