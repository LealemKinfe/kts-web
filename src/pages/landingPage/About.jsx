import React from "react";
import Cards from "../common/Cards";
import Footer from "../common/Footer";
import { NavLink } from "react-router-dom";

//image
import sideImg from "../../assets/img/KTS Side Img 2-02.png";
import sideImg2 from "../../assets/img/Side Img 2-34.png";

export const About = () => {
  return (
    <div className="flex flex-col h-[100rem] w-full">
      <div className="flex h-[52.5rem] bg-primary">
        <div className="w-2/5 flex-col justify-between mt-[10rem]">
          <h1 className="ml-[10rem] mt-[10rem] text-quaternary text-7xl font-bold pl-2 font-poppins">
            Safer, <br /> Connected, <br /> Easier than Ever
          </h1>
          <NavLink to="/login">
            <button className="ml-[10rem] border-quinary border mt-20 py-3 px-12 rounded-full bg-tertiary text-[#F2785C] font-poppins text-xl hover:bg-quaternary hover:text-tertiary transition-colors">
              Get Started
            </button>
          </NavLink>
        </div>

        <div className="w-3/5 flex-col justify-between mt-[10rem]">
          <img
            className="mr-[6rem] w-300 transform-gpu transition-transform hover:scale-95 hover:rotate-3"
            src={sideImg}
            alt="/"
          />
        </div>
      </div>

      <div className="flex h-[100rem]">
        <Cards />
      </div>

      <div className="flex w-full h-[50rem]">
        <div className="ml-[7rem] w-3/5 flex-col justify-between">
          <img className="w-400" src={sideImg2} alt="/" />
        </div>
        <div className="w-3/5 flex-col justify-between">
          <h1 className="mt-[2rem] text-quaternary text-6xl font-bold pl-2 font-poppins">
            Claim Your Card Now
          </h1>
          <p className="mt-[2rem] ml-[1rem] font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sunt
            tempora nobis quasi quis error inventore <br /> voluptate quo rem
            libero reiciendis?
          </p>

          <NavLink to={"/login"}>
            {" "}
            <button className="ml-[1rem] border-quinary border mt-5 py-3 px-12 rounded-full bg-beta text-quaternary font-poppins text-xl hover:bg-quaternary hover:text-tertiary transition-colors">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};
