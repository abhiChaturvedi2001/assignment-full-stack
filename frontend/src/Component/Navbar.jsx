import React from "react";
import searchLogo from "/Search.png";
import messageLogo from "/message.png";
import settingsLogo from "/settings.png";
import userLogo from "/user.png";
import bellLogo from "/bell.png";
import logo4 from "/3.png";

const Navbar = () => {
  return (
    <div className="flex items-center h-[8vh] w-full justify-between  ">
      <div className="relative flex-grow md:flex-grow-0">
        <input
          className="w-full  md:w-[45vw] px-10 py-2 rounded-md border border-gray-300 outline-none"
          type="text"
          placeholder="Search your course"
        />
        <img
          className="absolute top-2.5 left-3 w-5 h-5"
          src={searchLogo}
          alt="Search Icon"
        />
      </div>

      <div className="flex items-center space-x-4 md:space-x-8 mt-3 md:mt-0">
        <img src={logo4} alt="Logo" className="w-8 h-8 hidden md:block" />

        <div className="flex items-center space-x-4">
          <img src={messageLogo} alt="Messages" className="w-6 h-6" />
          <img src={settingsLogo} alt="Settings" className="w-6 h-6" />
          <img src={bellLogo} alt="Notifications" className="w-6 h-6" />
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <img
            src={userLogo}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:block font-semibold">
            Adeline H. Dancy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
