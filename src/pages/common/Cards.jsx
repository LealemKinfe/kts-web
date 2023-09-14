import React from "react";

//images
import cardAsset1 from "../../assets/img/Card Assets-31.png";
import cardAsset2 from "../../assets/img/Card Assets-32.png";
import cardAsset3 from "../../assets/img/Card Assets-33.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-alpha">
          <img
            className=" mx-auto mt-[3rem] bg-white"
            src={cardAsset1}
            alt="/"
          />
          <h2 className="mt-[2rem] text-2xl font-poppins">Secured</h2>
          <p className=" font-poppins100">
          Emphasizing utmost security with robust <br /> measures, providing a reliable access <br /> control solution.
          </p>

          <div className="flex py-8">
            <div className="border-2 px-2 w-25 rounded-full border-quaternary mr-4">
              <h6 className="font-poppins400 text-quaternary">Secured </h6>
            </div>
            <div className="border-2 px-1 w-25 rounded-full border-quaternary">
              <h6 className="font-poppins100 text-quaternary">Connected </h6>
            </div>
          </div>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-beta">
          <img
            className=" mx-auto mt-[3rem] bg-white"
            src={cardAsset2}
            alt="/"
          />
          <h2 className="mt-[2rem] text-2xl font-poppins">Easy</h2>
          <p className=" font-poppins100">
          Simplifying access management processes with a <br /> user-friendly interface, ensuring hassle-free operations.
          </p>

          <div className="flex py-8">
            <div className="border-2 px-2 w-25 rounded-full border-quaternary mr-4">
              <h6 className="font-poppins400 text-quaternary">RFID </h6>
            </div>
            <div className="border-2 px-1 w-25 rounded-full border-quaternary">
              <h6 className="font-poppins100 text-quaternary">Simple Scan </h6>
            </div>
          </div>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gamma">
          <img
            className=" mx-auto mt-[3rem] bg-white"
            src={cardAsset3}
            alt="/"
          />
          <h2 className="mt-[2rem] text-2xl font-poppins">Fast</h2>
          <p className=" font-poppins100">
          Delivering swift and efficient access control, <br /> optimizing productivity br and minimizing <br /> wait times.
          </p>

          <div className="flex py-8">
            <div className="border-2 px-2 w-25 rounded-full border-quaternary mr-4">
              <h6 className="font-poppins400 text-quaternary">Instant </h6>
            </div>
            <div className="border-2 px-1 w-25 rounded-full border-quaternary">
              <h6 className="font-poppins100 text-quaternary">Swift  </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
