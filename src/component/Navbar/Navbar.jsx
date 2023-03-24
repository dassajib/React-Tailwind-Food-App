import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* nav left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
          Best
          <span className="font-bold"> Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full text-[14px] p-1">
          <p className="p-2 bg-black text-white rounded-2xl">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent w-full p-2 focus:outline-none"
          type="text"
          placeholder="Search Food"
        />
      </div>

      {/* cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile view overlay, */}
      {nav ? (
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div>
      ) : (
        ""
      )}

      {/* left side bar  */}
      <div
        className={
          nav
            ? "bg-white fixed w-[300px] top-0 left-0 h-screen z-10"
            : "bg-white fixed w-[300px] top-0 left-[-100%] h-screen z-10"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Order
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <FaWallet size={25} className="mr-4" />
              Walet
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Promotions
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Best One
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;