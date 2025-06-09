import React from "react";
import FooterBg from "../assets/Images/coffee-footer.jpg";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/catering",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center", // Align the bottom of the image
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "200px", // Reduced height
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white font-din2014">
      <div className="bg-black/40 min-h-[200px]">
        {" "}
        {/* Reduced height */}
        <div className="container grid pt-5 pb-10 md:grid-cols-3">
          {/* company details */}
          <div className="px-4 py-8">
            <a
              href="#"
              className="text-2xl font-semibold tracking-widest sm:text-3xl font-cubano "
            >
              Woodside Deli
            </a>
            <p className="pt-4 ">
              Serving Fresh Sandwiches, Homemade Soups, and Local Favorites –
              Your Neighborhood Deli
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block duration-200 hover:scale-105"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block duration-200 hover:scale-105 "
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Address
              </h1>
              <div>
                <p className="mb-3">
                  13048 Middlebrook Road, Germantown, MD 20874
                </p>
                <p>(301) 972-6812</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
