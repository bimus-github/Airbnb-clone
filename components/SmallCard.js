import Image from "next/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
    <div
      className="flex items-center m-2 mt-4 space-x-4 rounded-r-lg cursor-pointer 
    hover:bg-gray-100 hover:scale-105
    transition transform duration-200"
    >
      {/* left */}

      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* right */}

      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
