"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import notionAnimation from "../../../public/animation/Animation1.json";

const Heroes = () => {
  return (
    <div
      className="flex items-center
     justify-center max-w-5xl"
    >
      <div
        className="relative w-[350px] h-[350px]
             sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] flex items-center justify-center"
      >
        <Lottie
          loop={true}
          animationData={notionAnimation}
        />
      </div>
     
    </div>
  );
};

export default Heroes;
