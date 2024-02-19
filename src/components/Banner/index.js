import React from "react";
import AppleIcon from "../../assets/images/apple-512.png";
import stars from "../../assets/images/AdobeStock_531767656_Preview.png";
import banner from "../../assets/images/aheadbanner.png";
const Banner = () => {
  return (
    <div className="bg-[#EEEBFE] flex justify-center items-center p-20">
      <div className="flex flex-col space-y-10 ">
        <h1 className="text-3xl">Ahead app</h1>
        <h1 className="text-6xl font-bold">
          Master your life by mastering emotions
        </h1>
        <div className="flex space-x-3 items-center">
          <button className="flex bg-black rounded-md p-2.5 space-x-3 h-18">
            <img
              src={AppleIcon}
              alt="applelogo"
              className="fill-white w-10 bg-black"
            />
            <div className=" bg-black">
              <h1 className="text-wrap text-white">
                Download on the
                <span className="block text-xl font-semibold">App Store</span>
              </h1>
            </div>
          </button>
          <div>
            <img src={stars} alt="stars" className="w-32" />
            <p>100+ AppStore reviews</p>
          </div>
        </div>
      </div>
      <img src={banner} alt="banner" className="w-1/2" />
    </div>
  );
};

export default Banner;
