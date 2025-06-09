import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 39.18145, lng: -77.2717 }, // Coordinates for 13048 Middlebrook Rd, Germantown, MD 20874
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: 39.18145, lng: -77.2717 },
          map,
          title: "Woodside Deli",
        });
      }
    };

    // Make initMap globally accessible
    window.initMap = initMap;

    const loadScript = () => {
      if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
        console.error(
          "Google Maps API key is missing. Please set VITE_GOOGLE_MAPS_API_KEY in your environment variables."
        );
        return;
      }

      if (document.getElementById("google-maps-script")) return; // Prevent multiple script loads

      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.setAttribute("loading", "async"); // Best practice for async loading
      document.head.appendChild(script);

      script.onerror = () => {
        console.error("Google Maps API failed to load.");
      };
    };

    if (!window.google || !window.google.maps) {
      loadScript();
    } else {
      initMap();
    }

    return () => {
      if (window.google && window.google.maps) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div
      id="map"
      className="w-full h-full"
      style={{ height: "400px", width: "100%" }}
    ></div>
  );
};

export default Map;
