import React from "react";
import Typed from "react-typed";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//images
import sliderImage from "../../assets/img/kts slider-01.png";
import sliderImage2 from "../../assets/img/kts slider-02.png";
import sliderImage3 from "../../assets/img/kts slider-03.png";

const LandingPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 h-full flex flex-col justify-between pr-8 mt-[8rem]">
        <div className="h-full mt-20">
          <h1 className="text-quaternary text-8xl font-bold pl-2 font-kanit">
            Welcome To KTS
          </h1>

          <Typed
            className="text-4xl font-bold pl-2 font-kanit ml-4"
            strings={[
              '<span style="color: #91D9A3;">Safer, Easier, Connected than ever</span>',
              '<span style="color: #E4CEF2;">Ethiopian Transport: RFID Revolution</span>',
              '<span style="color: #F2785C;">Pay for your trip: Scan and go</span>',
              '<span style="color: #F2DC6B;">KTS: RFID Management made simple</span>',
            ]}
            typeSpeed={80}
            backSpeed={30}
            loop
            typeHtml={true}
          />

          <div className="mt-8 max-w-lg ml-4">
            <p className="font-poppins text-[#4e4e4e]">
              KTS is a modern and innovative transportation system that has
              transformed the way people travel in Ethiopia. <br /> Passengers
              can easily sign up, purchase tickets, and view their trip history
              using our user-friendly mobile app.
            </p>

            <button className="border-quinary border mt-20 py-3 px-12 rounded-full bg-tertiary text-[#F2785C] font-poppins text-xl hover:bg-quaternary hover:text-tertiary transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/5 mt-[10rem]">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={sliderImage} alt="/" />
          </div>
          <div>
            <img src={sliderImage2} alt="/" />
          </div>
          <div>
            <img src={sliderImage3} alt="/" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LandingPage;
