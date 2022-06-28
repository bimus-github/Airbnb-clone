import React from "react";
import Image from "next/image";
import LogoBnb from "../public/logoBnb.jpg";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={LogoBnb}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle - search */}

      <div className="flex items-center rounded-full py-2 cursor-pointer md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search ..."
          className=" pl-5 outline-none flex-grow bg-transparent placeholder-gray-400"
        />
        <SearchIcon className="h-7 rounded-full bg-red-400 text-white p-1 md:inline-flex hidden cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className=" flex items-center space-x-4 justify-end text-gray-500">
        <h1 className="hidden md:inline">Become a host</h1>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className=" flex items-center rounded-full space-x-2 border-2 p-2">
          <MenuIcon className=" h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
