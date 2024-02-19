import React from "react";
import logo from "../../assets/images/aheadlogo.png";
const Header = () => {
  return (
    <header className="h-14 w-full bg-white z-10  fixed top-0 p-5">
      <nav className="w-full flex justify-between items-center mx-auto">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-8" />
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-black font-semibold">
              Emotions
            </a>
          </li>
          <li>
            <a href="/" className="text-black font-semibold">
              Manifesto
            </a>
          </li>
          <li>
            <a href="/" className="text-black font-semibold">
              Self-awareness test
            </a>
          </li>
          <li>
            <a href="/" className="text-black font-semibold">
              Work With Us
            </a>
          </li>
        </ul>

        <button className="bg-black text-sm text-white font-medium py-2  px-8 rounded-2xl ">
          Download app
        </button>
      </nav>
    </header>
  );
};

export default Header;
