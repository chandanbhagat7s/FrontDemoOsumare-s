import React from "react";

import box5 from "./../assets/box5.png";
import box6 from "./../assets/box6.png";
import box7 from "./../assets/box7.png";
import box8 from "./../assets/box8.png";

export default function Content7() {
  return (
    <>
      <div className="flex flex-col px-5 py-3 my-20">
        <div className="title text-center">
          <p className="text-2xl font-bold">Our Expertise in Action</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 lg:gap-x-20 lg:gap-y-10 px-3 lg:px-40 lg:gap-y-10 my-20">
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box5}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">Effective CTAs</p>
              <p className="text-center text-gray-500">
                See how our strategic CTAs drove a significant increase in
                property inquiries and accelerated sales for a real estate
                agency.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box8}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">
                Conversion-Optimized Landing Pages
              </p>
              <p className="text-center text-gray-500">
                Explore a case study where our landing page optimization
                increased property lead conversion rates by 30%
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box6}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">
                Trust Building with Social Proof
              </p>
              <p className="text-center text-gray-500">
                Discover how leveraging client testimonials boosted buyer
                confidence, leading to higher conversion rates for a property
                development project
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="image py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box7}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">Mobile-First Success</p>
              <p className="text-center text-gray-500">
                Learn how our mobile-responsive design approach resulted in a
                25% increase in inquiries from mobile users for a real estate
                agency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
