import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingBag,
} from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-[#e7eaed] py-3 px-16 flex flex-wrap">
      <div className="w-16">
        <img src={require("../assets/logo.png")} alt="logo" />
      </div>

      <div className="flex px-10 items-center gap-5">
        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-red-500">
          Home <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-red-500">
          Pages <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-red-500">
          Events <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-red-500">
          Blog <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex items-center gap-1 hover:cursor-pointer hover:text-red-500">
          Shop <MdOutlineKeyboardArrowDown />
        </div>
      </div>

      <div className="flex items-center gap-8 ml-auto text-2xl">
        <MdOutlineShoppingBag className="hover:text-red-500 hover:cursor-pointer" />

        <FiSearch className="hover:text-red-500 hover:cursor-pointer" />

        <RxHamburgerMenu className="hover:text-red-500 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
