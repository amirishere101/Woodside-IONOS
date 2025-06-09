import React from "react";
import img1 from "../assets/Images/reuben-card.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold text-center text-primary font-cubano">
          About Us
        </h2>
        <div className="grid items-center grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex justify-center sm:order-2">
            <img
              src={img1}
              alt="Woodside Deli"
              className="object-cover w-full max-w-sm transition-transform duration-300 rounded-lg shadow-lg hover:scale-105 sm:max-w-md"
            />
          </div>
          <div className="flex flex-col justify-center p-5 space-y-6 bg-white rounded-lg shadow-lg sm:order-1">
            <p className="text-lg text-gray-700 font-din2014">
              The Woodside Deli is not just a restaurant, it's a culinary
              experience. With over 60 years of history, we have mastered the
              art of delivering consistent, high-quality, and affordable food.
              Our loyal customers have made us a household name, and we take
              pride in providing them with a sense of nostalgia and comfort.
            </p>
            <p className="text-lg text-gray-700 font-din2014">
              At Woodside Deli, we offer a diverse menu that caters to all
              tastes. From traditional deli sandwiches to Italian specialties
              and hearty soul food, we have something for everyone. Our catering
              services are flexible and can accommodate any budget and culinary
              imagination.
            </p>
            <p className="text-lg text-gray-700 font-din2014">
              Since our humble beginnings in 1947, we have grown into a local
              business that also does catering. Despite the changing times, our
              owner Phil Park remains committed to our core values of providing
              affordable, quality food to the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
