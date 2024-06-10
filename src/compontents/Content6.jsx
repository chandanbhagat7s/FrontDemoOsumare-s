import React from "react";

import box1 from "./../assets/box1.png";
import box2 from "./../assets/box2.png";
import box3 from "./../assets/box3.png";
import box4 from "./../assets/box4.png";

export default function Content6() {
  return (
    <>
      <div className="flex flex-col px-10 py-3 my-20">
        <div className="title text-center">
          <p className="text-2xl font-bold">
            Driving Property Inquiries to Conversions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-x-20 lg:gap-y-10 my-20 px-3 md:px-10 lg:px-40 ">
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box2}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">Landing Page Efficiency</p>
              <p className="text-center text-gray-500">
                Tailored landing pages are designed for maximum property lead
                conversion. They provide seamless user experiences and clear
                pathways for inquiry submission.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box3}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">Social Proof Utilization</p>
              <p className="text-center text-gray-500">
                Leverage the power of testimonials and success stories from
                satisfied buyers to build trust and credibility, encouraging
                hesitant prospects to take action
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box1}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">
                Mobile-Friendly Experience
              </p>
              <p className="text-center text-gray-500">
                {" "}
                With a responsive design approach, our strategies ensure a
                seamless browsing experience across all devices. This
                responsiveness enhances engagement and conversions by
                accommodating the preferences of on-the-go property seekers.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="image  py-3 self-center  my-2 flex justify-center items-center ">
              <img
                src={box4}
                alt=""
                className="h-32 bg-contain  rounded-full bg-gray-200 "
              />
            </div>
            <div className="content flex flex-col">
              <p className="text-center font-bold ">
                Call-to-Action Optimization
              </p>
              <p className="text-center text-gray-500">
                Our carefully crafted CTAs guide potential buyers through the
                property journey, enhancing engagement and conversion rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
