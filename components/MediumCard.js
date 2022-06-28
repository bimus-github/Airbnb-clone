import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  console.log(img);
  return (
    <div className=" cursor-pointer duration-300 transform hover:scale-105 transition ease-out">
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className=" text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
