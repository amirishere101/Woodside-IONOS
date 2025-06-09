import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiRestaurantFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menus = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Hours & Location", link: "/hours-location" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Catering", link: "/catering" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-[50px]"></div>
      <div className="fixed top-0 z-50 w-full bg-transparent shadow-md backdrop-blur-sm">
        <div className="text-white bg-gray-900 shadow-md bg-gradient-to-r from-secondary to-secondary/90">
          <div className="container py-2">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wider sm:text-3xl font-cubano"
                >
                  Woodside Deli
                </Link>
              </div>
              <div className="flex items-center justify-between gap-4 font-din2014">
                <ul className="items-center hidden gap-4 sm:flex">
                  {Menus.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={data.link}
                        className="inline-block px-4 py-4 text-xl duration-200 text-white/70 hover:text-white"
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/menu"
                  className="items-center hidden gap-3 px-4 py-2 duration-200 rounded-full sm:flex bg-primary/70 hover:scale-105"
                >
                  Menu <RiRestaurantFill className="text-xl cursor-pointer" />
                </Link>
                <div className="sm:hidden">
                  <button onClick={toggleMenu}>
                    {isOpen ? (
                      <RiCloseLine className="text-3xl" />
                    ) : (
                      <RiMenu3Line className="text-3xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`sm:hidden overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col items-center gap-4 mt-4">
                {Menus.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      onClick={toggleMenu}
                      className="inline-block px-4 py-4 text-xl duration-200 text-white/70 hover:text-white"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/menu"
                    onClick={toggleMenu}
                    className="flex items-center gap-3 px-4 py-2 duration-200 rounded-full bg-primary/70 hover:scale-105"
                  >
                    Menu <RiRestaurantFill className="text-xl cursor-pointer" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
