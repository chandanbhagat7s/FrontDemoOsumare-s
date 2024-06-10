import React from "react";

import image2 from "./../assets/image-2.png";

export default function Content2() {
  return (
    <>
      <div className="flex flex-col px-2 lg:px-5 w-2/2 py-20 lg:py-40 space-y-10">
        <div className="text-xl lg:text-2xl font-bold text-center">
          Real Estate-Focused Digital Mastery
        </div>
        <div className="flex items-center lg:justify-around lg:item-center lg:px-30 py-5 flex-col lg:flex-row">
          <div className="img w-2/2 lg:w-2/3 ">
            <img src={image2} alt="" className=" mx-auto w-2/3 p-1 h-64" />
          </div>
          <div className="content w-2/2 px-3 md:px-0 lg:px-0 md:w-2/3 lg:w-2/3 mt-5 lg:mt-0">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl font-bold">
                Unlock the Potential of Digital Real Estate Excellence
              </p>
              <p className="text-gray-500 lg:pr-10">
                At Osumare, we understand that the real estate landscape demands
                a digital presence that aligns with the intricacies of property
                marketing. Our range of specialized services is meticulously
                designed to catapult your brand's success in the ever-evolving
                digital property market.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="lg:px-16 px-5 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-400 hover:text-black hover:scale-105 drop-shadow-md hover:drop-shadow-lg">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
