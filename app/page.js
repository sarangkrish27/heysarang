"use client";
import "./globals.css";
import { SplashScreen } from "./splash_screen";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out animation
      setTimeout(() => {
        setLoading(false); // after fade out, hide splash
      }, 1000); // 1 second (should match transition duration)
    }, 1500); // wait 2 seconds before fading out

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black fade-in">
      <img
        src="/logo.jpg"
        alt="profile picture"
        className=" w-[24vh] rounded-full"
      />
      <h1
        className="text-[#F7E7D8] text-4xl mt-2"
        style={{ fontFamily: "impact" }}
      >
        SARANG
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 w-[90%] max-w-md mt-10">
        <a
          href="https://github.com/sarangkrish27"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F7E7D8] w-full h-[8vh] flex items-center justify-center gap-3 rounded-[10px] cursor-pointer"
        >
          <img src="/github.png" alt="github logo" className="w-[4vh]" />
          <p
            className="text-black flex justify-center items-center"
            style={{ fontFamily: "SFPRODISPLAYMEDIUM" }}
          >
            @sarangkrish27
          </p>
        </a>
        <a
          href="https://youtube.com/@sarang.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F7E7D8] w-full h-[8vh] flex items-center justify-center gap-3 rounded-[10px] cursor-pointer"
        >
          <img src="/youtube.png" alt="github logo" className="w-[4vh]" />
          <p
            className="text-black flex justify-center items-center"
            style={{ fontFamily: "SFPRODISPLAYMEDIUM" }}
          >
            @sarang.mp4
          </p>
        </a>
        <a
          href="https://instagram.com/sarang27.code"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F7E7D8] w-full h-[8vh] flex items-center justify-center gap-3 rounded-[10px] cursor-pointer"
        >
          <img src="/instagram.png" alt="github logo" className="w-[4vh]" />
          <p
            className="text-black flex justify-center items-center"
            style={{ fontFamily: "SFPRODISPLAYMEDIUM" }}
          >
            @sarang27.code
          </p>
        </a>
      </div>
    </div>
  );
}
