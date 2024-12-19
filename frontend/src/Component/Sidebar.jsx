import React, { useState } from "react";
import logo1 from "/Vector.png";
import { sidebarData } from "../utils/constant";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="relative">
      <button
        className="absolute top-4 left-4 md:hidden z-50 bg-white shadow-lg"
        onClick={() => settoggle(!toggle)}
      >
        {!toggle ? <FaBars size={24} /> : null}
      </button>

      <div
        className={`fixed top-0 left-0 h-screen bg-white z-50 w-[15rem] px-3 py-5 transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:block`}
      >
        {toggle && (
          <button
            className="absolute top-4 right-4 text-gray-600 lg:hidden"
            onClick={() => settoggle(false)}
          >
            <RxCross2 size={24} />
          </button>
        )}
        <img className="w-[100px]" src={logo1} alt="Logo" />

        <ul className="mt-[40px]">
          {sidebarData.map((links) => (
            <li
              key={links.id}
              className="flex items-center space-x-4 mt-3 transition-all hover:bg-gray-200 p-3 rounded-md hover:text-black cursor-pointer"
            >
              <img src={links.sideLogo} alt={links.linkName} />
              <span className="font-medium text-gray-600">
                {links.linkName}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {toggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => settoggle(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
