import React from "react";
import logo from "../assets/navLogo.png";

export default function Navbar() {
  return (
    <div className="absolute z-[100] ">
      <div className="bg-white w-[100vw] flex justify-between px-5 lg:px-16 py-1 lg:flex-row items-center fixed ">
        <div className="logo">
          <img src={logo} alt="logo image" />
        </div>
        <div className="p-1">
          <button className="px-3 lg:px-16 py-2 border border-1 border-black rounded-xl">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
