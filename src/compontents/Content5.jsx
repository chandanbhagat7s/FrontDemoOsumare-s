import React from "react";

import image4 from "./../assets/image-4.png";

export default function Content5() {
  return (
    <>
      <div className="flex-flex-col px-5 py-3 my-20">
        <div className="title flex flex-col space-y-3">
          <p className="font-bold text-center text-2xl ">
            Driving Property Inquiries to Conversions
          </p>
          <p className="  text-center text-[#333]">
            Streamlined Strategies for Real Estate Success
          </p>
        </div>
        <div className="flex items-center lg:justify-around lg:item-center lg:px-30 py-5 flex-col lg:flex-row">
          <div className="img w-2/2 lg:w-2/3 ">
            <img src={image4} alt="" className=" mx-auto w-2/3 p-1 h-64" />
          </div>
          <div className="content w-2/2 px-5 md:w-2/3 lg:w-2/3 mt-5 lg:mt-0">
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
