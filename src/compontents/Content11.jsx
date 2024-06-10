import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Content11() {
  const [tab, setTab] = useState("");
  return (
    <>
      <div className="my-10 lg:my-20 flex flex-col justify-center items-center p-3">
        <div className="title flex flex-col space-y-3 text-center ">
          <p className="text-2xl font-bold"> Frequently Asked Questions</p>
          <p className="text-small text-gray-500">
            Pinpoint your audience with precision, ensuring your marketing
            efforts reach those most likely to engage with your brand.
          </p>
        </div>
        <div className="w-2/2 lg:w-2/3 shadow-xl  p-3  rounded-xl my-10 lg:my-20">
          <div
            className={` p-3 rounded-xl font-bold flex text-xl  justify-between hover:cursor-pointer  ${
              tab == 1 ? "bg-blue-500 text-white" : "hover:bg-blue-200"
            }`}
            onClick={() => {
              tab == 1 ? setTab("") : setTab(1);
            }}
          >
            {" "}
            <p>1. How does Osumare measure campaign success?</p>
            {tab == 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {tab == 1 && (
            <div className="p-5">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </div>
          )}
          <div
            className={` p-3 rounded-xl font-bold flex text-xl  justify-between hover:cursor-pointer   ${
              tab == 2 ? "bg-blue-500 text-white" : "hover:bg-blue-200"
            }`}
            onClick={() => (tab == 2 ? setTab("") : setTab(2))}
          >
            {" "}
            <p>2. How does Osumare measure campaign success?</p>
            {tab == 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {tab == 2 && (
            <div className="p-5">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </div>
          )}
          <div
            className={` p-3 rounded-xl font-bold flex text-xl  justify-between hover:cursor-pointer  ${
              tab == 3 ? "bg-blue-500 text-white" : "hover:bg-blue-200"
            }`}
            onClick={() => (tab == 3 ? setTab("") : setTab(3))}
          >
            {" "}
            <p>3. How does Osumare measure campaign success?</p>
            {tab == 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {tab == 3 && (
            <div className="p-5">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
