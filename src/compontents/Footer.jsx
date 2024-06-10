import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/navLogo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiSpacex } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-5 px-10 space-y-5 lg:space-y-0 lg:px-20 bg-blue-100">
        <div className="p-1 flex flex-col space-y-2">
          <div className="logo">
            <img src={logo} alt="logo image" />
          </div>
          <div className="p-1">
            The best digital marketing agency in Pune with a proven track record
            of consistently delivering quality service.
          </div>
          <div className="p-1 flex-flex-col">
            <p className="font-bold text-xl">Address</p>
            <p className="text-gray-500">
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>
          <div className="p-1 flex-flex-col">
            <p className="font-bold text-xl">Contacts</p>
            <p className="space-x-3 flex items-center">
              <FaPhoneAlt /> <p> hello@osumare.in</p>{" "}
            </p>
            <p className="space-x-3 flex items-center">
              <IoMdMail />
              <p> 9856789876</p>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl">Menu</p>
          <p className="p-1 cursor-pointer hover:text-blue-500 hover:scale-105 ">
            Home
          </p>
          <p className="p-1 cursor-pointer hover:text-blue-500 hover:scale-105 ">
            About
          </p>
          <p className="p-1 cursor-pointer hover:text-blue-500 hover:scale-105 ">
            Services
          </p>
          <p className="p-1 cursor-pointer hover:text-blue-500 hover:scale-105 ">
            Work
          </p>
          <p className="p-1 cursor-pointer hover:text-blue-500 hover:scale-105 ">
            Blog
          </p>
          <p className="p-1 cursor-pointer hover:text-blue-500 hover:scale-105 ">
            Career
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="p-1 font-bold">Social</p>
          <div className="grid grid-cols-3 gap-1 text-xl w-1/3">
            <div className="p-2  text-black ">
              {"  "}
              <IoLogoWhatsapp className="rounded-full bg-white text-black text-3xl p-1" />
            </div>
            <div className="p-2  text-black ">
              <FaPinterest className="rounded-full bg-white text-black text-3xl p-1" />
            </div>
            <div className="p-2  text-black ">
              <FaYoutube className="rounded-full bg-white text-black text-3xl p-1" />
            </div>
            <div className="p-2  text-black ">
              <SiSpacex className="rounded-full bg-white text-black text-3xl p-1" />
            </div>
            <div className="p-2  text-black ">
              <FaFacebook className="rounded-full bg-white text-black text-3xl p-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
