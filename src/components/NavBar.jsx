import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Kts from "../assets/img/KTS-Logo-stroked.png";
import adminIcon from "../assets/img/admin icon.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <div class="fixed w-[85rem] shadow-md z-50 flex justify-center items-center h-24  mx-auto px-20 mt-4 ml-10 mr-2 text-black bg-background  border-2 rounded-full border-tertiary">
      <div className=" flex items-center w-full ">
        <img className=" w-[100px] mx-4" src={Kts} alt="/" />
        <div className="border-2 px-1 w-25 rounded-full border-accent">
          <h6 className="font-ubuntu text-accent">Development </h6>
        </div>
      </div>
      <ul className="flex justify-center items-center">
        <li className="p-4 font-poppins">Home</li>
        <NavLink to={"/about"}><li className="p-4 font-poppins">About</li></NavLink>
        
        <li className="p-4">
          <a href="/login">
              <button className="shadow-md border py-2 px-10 rounded-full bg-tertiary text-beta font-poppins hover:bg-quaternary hover:text-tertiary transition-colors">
            Login
          </button>
        </a>
        </li>
        {/* <li className="p-2">
          <button className="border-quinary border py-2 px-10 rounded-full bg-beta text-quaternary font-poppins hover:bg-quaternary hover:text-tertiary transition-colors">
            Signup
          </button>
        </li> */}
        {/* <li>
          <div className="avatar flex items-center gap-4 ml-3 cursor-pointer">
            <div className="avatar__info hidden sm:block">
              <h3 className=" text-gray-500 text-beta font-poppins">Lillian</h3>
              <p className="lowercase text-xs text-gray-500 font-poppins">
                Admin
              </p>
            </div>
            <img
              src={adminIcon}
              alt="user"
              className="w-16 h-12 border-2 object-cover rounded-full"
            />
          </div>
        </li> */}
      </ul>

      <div onClick={handelNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
     
    </div>
  );
}

export default Navbar;
