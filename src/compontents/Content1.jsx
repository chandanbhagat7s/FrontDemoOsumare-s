import React from "react";
import image1 from "./../assets/image-1.png";

export default function Content1() {
  return (
    <>
      <div className="flex w-2/2 lg:w-2/3 flex-col mx-auto pt-32 items-center px-3">
        <div className="content w-2/2 flex flex-col py-5 px-2 space-y-5 text-center ">
          <p>
            <p className="text-xl lg:text-3xl">
              Elevate{" "}
              <span className="text-blue-500 font-bold">
                Real Estate Success
              </span>{" "}
              with
              <p>Osumare's Digital Expertise</p>
            </p>
          </p>
          <p className="text-xl text-gray-500">
            Tailored Solutions for Thriving in the Digital Reak Estate Landscape
          </p>
          <div>
            <button className="bg-blue-500 text-white px-10 lg:px-20 lg:px-16 py-2 rounded-full font-bold">
              Get started
            </button>
          </div>
        </div>
        <div className="img w-2/2 ">
          <img src={image1} alt="local image" className="w-2/2 max-h-80" />
        </div>
      </div>
    </>
  );
}
