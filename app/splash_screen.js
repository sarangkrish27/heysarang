import React from "react";

export const SplashScreen = ({ fadeOut }) => {
  return (
    <div
      className={`bg-[#F7E7D8] w-full h-screen flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1
        className="text-black text-6xl fade-in"
        style={{ fontFamily: "impact" }}
      >
        SARANG
      </h1>
    </div>
  );
};
