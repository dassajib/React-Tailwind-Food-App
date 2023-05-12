import React, { useContext, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineHome,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite, MdHelp } from "react-icons/md";
import CartContext from "../../CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [cartSidebar, setcartSidebar] = useState(false);

  const { items } = useContext(CartContext);
  // console.log(items);

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
      <div className="hidden md:flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent w-full p-2 focus:outline-none"
          type="text"
          placeholder="Search Food"
        />
      </div>

      {/* cart */}
      <button
        onClick={() => setcartSidebar(!cartSidebar)}
        className="bg-black text-white flex items-center border border-black rounded-full px-5 py-2"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart {items.length}
      </button>

      {/* mobile view overlay */}
      {nav ? (
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div>
      ) : (
        ""
      )}

      {/* left side bar  */}
      <div
        className={
          nav
            ? "bg-white fixed w-[300px] top-0 left-0 h-screen z-10 duration-500"
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
            <Link to="/">
              <li className="flex text-xl py-4 items-center cursor-pointer">
                <AiOutlineHome size={25} className="mr-4" />
                Home
              </li>
            </Link>

            <li className="flex text-xl py-4 items-center cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Order
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="flex text-xl py-4 items-center cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
          </ul>
        </nav>
      </div>

      {/* mobile view overlay rightside */}
      {/* mobile view overlay */}
      {cartSidebar ? (
        <div className="bg-black/80 fixed top-0 right-0 w-full h-screen z-10"></div>
      ) : (
        ""
      )}

      {/* right side bar  */}
      <div
        className={
          cartSidebar
            ? "bg-white fixed w-[300px] top-0 right-0 h-screen z-10 duration-500"
            : "bg-white fixed w-[300px] top-0 right-[-100%] h-screen z-10"
        }
      >
        <AiOutlineClose
          onClick={() => setcartSidebar(!cartSidebar)}
          size={25}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="text-center text-2xl p-4">
          Your<span className="font-bold"> Order</span>
        </h2>
        <nav>
          <div>
            <div className="flex justify-between px-4">
              <div>
                {items.map((item) => (
                  <div className="">
                    {item.name}
                    <div className="flex justify-between px-4 mt-2">
                      <AiOutlineDelete className="cursor-pointer" size={20} />
                      <h6>{items.length}</h6>
                      <AiOutlinePlus className="cursor-pointer" size={20} />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {items.map((item) => (
                  <div className="">${item.price}</div>
                ))}
              </div>
            </div>

            <hr className="mt-2"></hr>
            <div className="flex justify-between px-4 mt-2">
              <p>Sub Total</p>
              <p>$100</p>
            </div>
            <div className="flex justify-between px-4 mt-2">
              <p>Delivery Fee</p>
              <p>$10</p>
            </div>
            <div className="flex justify-between px-4 mt-2">
              <p>Platform Fee</p>
              <p>$2</p>
            </div>
            <hr className="mt-2"></hr>
            <div className="flex justify-between px-4 mt-2">
              <p>Grand Total</p>
              <p>$100</p>
            </div>
            <Link to="order-details" className="flex flex-col items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-none rounded mt-4 px-4">
                Go To Checkout
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
