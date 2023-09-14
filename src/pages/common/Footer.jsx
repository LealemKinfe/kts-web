import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

//image
import kts from "../../assets/img/KTS Logo bw-01.png";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-14 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 bg-background rounded-[25px] mb-[rem] border-quinary border">
      <div>
        <img className="w-[150px] mx-4" src={kts} alt="/" />
        <p className="py-4">
          KTS is a modern and innovative transportation system that has
          revolutionized the way people in Ethiopia travel. With our
          user-friendly mobile application, passengers can easily sign up,
          purchase tickets, and view their trip history. Our drivers are highly
          trained and equipped with GPS navigation systems, ensuring that
          passengers are taken to their destinations safely and efficiently.
        </p>
        <div className="flex justify-between md:w[75%] my-6">
          <FaFacebook className="size={30}" />
          <FaInstagram className="size={30}" />
          <FaTwitter className="size={30}" />
          <FaYoutube className="size={30}" />
          <FaLinkedin className="size={30}" />
        </div>
        <p className="text-gray-500 text-sm mt-4">
          &copy; 2023 KTS. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Let's hear from you</h2>
        <form className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 rounded px-4 py-2"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 rounded px-4 py-2"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border border-gray-400 rounded px-4 py-2"
              type="tel"
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="border border-gray-400 rounded px-4 py-2"
              id="message"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-tertiary text-[#F2785C] font-poppins py-2 px-6 rounded-full border border-quinary hover:bg-quaternary hover:text-tertiary transition-colors self-start">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
