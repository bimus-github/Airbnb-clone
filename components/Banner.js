import Image from "next/image";
import React from "react";
import BannerImage from "../public/banner.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={BannerImage} layout="fill" objectFit="cover" />
      <div className=" absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-black">
          Not sure where to go? Perfect.
        </p>

        <button
          className=" text-purple-500 bg-white px-10 py-4 shadow-md 
        rounded-full font-bold md:shadow-xl m-3 active:scale-150 cursor-pointer
        transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
