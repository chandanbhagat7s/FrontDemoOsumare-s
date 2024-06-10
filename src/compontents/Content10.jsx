import React from "react";

export default function Content10() {
  return (
    <>
      <div className="my-20 flex-justify-center items-center p-3">
        <div className="title flex flex-col space-y-3 text-center ">
          <p className="text-2xl font-bold">
            {" "}
            Connect with Our Digital Marketing Experts
          </p>
          <p className="text-small text-gray-500">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </p>
        </div>
        <div className="px-10 py-5 w-2/2 lg:w-2/3 mx-auto shadow-lg my-10 rounded-xl">
          <form action="" className="flex flex-col space-y-5  ">
            <div className="flex flex-col lg:flex-row lg:space-x-5">
              <div className="flex flex-col w-2/2 lg:w-1/2">
                <div className="name flex space-y-2 flex-col">
                  <label htmlFor="Name" className="font-bold text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name=""
                    className="p-2 outline-none border border-gray focus:border focus:border-1 focus:border-blue-300"
                    placeholder="Enter your name"
                    id="Name"
                  />
                </div>
                <div className=" flex space-y-2 flex-col">
                  <label htmlFor="phone" className="font-bold text-xl">
                    Phone
                  </label>
                  <input
                    type="text"
                    name=""
                    className="p-2 outline-none border border-gray focus:border focus:border-1 focus:border-blue-300"
                    placeholder="Enter your Number"
                    id="phone"
                  />
                </div>
                <div className=" flex space-y-2 flex-col">
                  <label htmlFor="email" className="font-bold text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    className="p-2 outline-none border border-gray focus:border focus:border-1 focus:border-blue-300"
                    placeholder="Enter your Number"
                    id="email"
                  />
                </div>
              </div>
              <div className="flex flex-col w-2/2 lg:w-1/2  space-y-2 ">
                <label htmlFor="message " className="text-xl font-bold">
                  Message
                </label>
                <textarea
                  name=""
                  id="message"
                  className="outline-none border border-1 border-gray-300 p-3"
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-center">
              <button className="lg:px-16 px-5 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-400 hover:text-black hover:scale-105 drop-shadow-md hover:drop-shadow-lg w-1/3">
                Get started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
