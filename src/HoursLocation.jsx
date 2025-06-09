import React from "react";
import Map from "./Map";

const HoursLocation = () => {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold text-center text-primary font-cubano">
          Hours and Location
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Hours Section */}
          <div className="flex flex-col items-center justify-center p-6 space-y-6 bg-white rounded-lg shadow-lg">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-center text-secondary font-din2014">
                Open Hours
              </h3>
              <p className="text-lg text-center text-gray-700 font-din2014">
                Monday - Sunday: 8 am to 8 pm
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-center text-secondary font-din2014">
                Location
              </h3>
              <p className="text-lg text-center text-gray-700 font-din2014">
                13048 Middlebrook Rd
                <br />
                Germantown, MD 20874
                <br />
                (301) 972-6812
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/13048+Middlebrook+Road,+Germantown,+MD+20874"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 text-lg text-white transition duration-300 rounded-full bg-primary hover:bg-secondary font-din2014">
                  Get Directions
                </button>
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg">
            <div className="w-full h-full">
              <h3 className="mb-4 text-2xl font-semibold text-center text-secondary font-din2014">
                Our Location
              </h3>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursLocation;
