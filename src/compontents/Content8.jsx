import React from "react";

export default function Content8() {
  return (
    <>
      <div className="flex flex-col justify-center space-y-3 my-10 w-2/3 mx-auto text-center">
        <div className="title font-bold text-2xl"> Your Peace of Mind</div>
        <div className="text-gray-500 p-2">
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </div>
        <div className="flex justify-center lg:mt-20">
          <button className="lg:px-16 px-5 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-400 hover:text-black hover:scale-105 drop-shadow-md hover:drop-shadow-lg">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}
