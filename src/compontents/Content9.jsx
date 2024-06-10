import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import profile from "./../assets/profile.png";
import vidPhoto from "./../assets/vedioPhoto.png";

export default function Content9() {
  return (
    <>
      <div className="flex justify-center my-10 lg:my-20 ">
        <div className="flex flex-col px-5 py-3 justify-center w-2/2 md:w-2/3 lg:w-2/3">
          <div className="title flex flex-col text-center space-y-3">
            <p className="font-bold text-2xl "> Your Peace of Mind</p>
            <p className="text-gray-500">
              {" "}
              Driving Transformations, One Brand at a Time
            </p>
          </div>

          <div className="content flex flex-col lg:flex-row py-10 px-5 shadow-lg rounded-xl md:items-center">
            <div className="vedio p-3  lg:w-2/3">
              <img src={vidPhoto} alt="" className="rounded-xl  " />
            </div>
            <div className="side w-2/2 md:w-1/2 lg:w-1/3 p-3 flex flex-col justify-center  ">
              <div className="space-y-8 ">
                <div className="profile flex items-center justify-between ">
                  <div className="img flex space-x-2  items-center">
                    <img src={profile} alt="" className="rounded-full h-12 " />
                    <div className="name font-bold text-xl"> Tabish khan</div>
                  </div>
                  <div className="design text-5xl font-extrabold text-blue-500 self-start">
                    <RiDoubleQuotesR />
                  </div>
                </div>
                <div className="content">
                  Osumare's expertise in pharma marketing is unparalleled. Their
                  strategies helped us navigate complex regulations while
                  driving remarkable growth.
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-5 my-10">
            <div>
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[60px] h-[60px] relative  hover:scale-105 hover:font-extrabold hover:cursor-pointer"
                preserveAspectRatio="none"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={29}
                  stroke="#0078FF"
                  strokeWidth={2}
                />
                <path
                  d="M38.75 28.7496H23.925L28.4625 23.2996C28.6747 23.0443 28.7768 22.7152 28.7463 22.3847C28.7158 22.0542 28.5553 21.7493 28.3 21.5371C28.0447 21.3249 27.7156 21.2229 27.3851 21.2533C27.0546 21.2838 26.7497 21.4443 26.5375 21.6996L20.2875 29.1996C20.2455 29.2593 20.2078 29.3219 20.175 29.3871C20.175 29.4496 20.175 29.4871 20.0875 29.5496C20.0308 29.6929 20.0012 29.8455 20 29.9996C20.0012 30.1537 20.0308 30.3063 20.0875 30.4496C20.0875 30.5121 20.0875 30.5496 20.175 30.6121C20.2078 30.6773 20.2455 30.74 20.2875 30.7996L26.5375 38.2996C26.655 38.4407 26.8022 38.5542 26.9686 38.632C27.1349 38.7097 27.3164 38.7499 27.5 38.7496C27.7921 38.7502 28.0751 38.6485 28.3 38.4621C28.4266 38.3572 28.5312 38.2283 28.6079 38.0829C28.6846 37.9374 28.7318 37.7783 28.7469 37.6146C28.762 37.4509 28.7447 37.2858 28.6959 37.1288C28.6471 36.9718 28.5678 36.8259 28.4625 36.6996L23.925 31.2496H38.75C39.0815 31.2496 39.3995 31.1179 39.6339 30.8835C39.8683 30.6491 40 30.3311 40 29.9996C40 29.6681 39.8683 29.3501 39.6339 29.1157C39.3995 28.8813 39.0815 28.7496 38.75 28.7496Z"
                  fill="#0078FF"
                />
              </svg>
            </div>
            <div>
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[60px] h-[60px] relative hover:scale-105 hover:font-extrabold hover:cursor-pointer"
                preserveAspectRatio="none"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={29}
                  transform="matrix(-1 0 0 1 60 0)"
                  stroke="#0078FF"
                  strokeWidth={2}
                />
                <path
                  d="M21.25 28.7496H36.075L31.5375 23.2996C31.3253 23.0443 31.2232 22.7152 31.2537 22.3847C31.2842 22.0542 31.4447 21.7493 31.7 21.5371C31.9553 21.3249 32.2844 21.2229 32.6149 21.2533C32.9454 21.2838 33.2503 21.4443 33.4625 21.6996L39.7125 29.1996C39.7545 29.2593 39.7922 29.3219 39.825 29.3871C39.825 29.4496 39.825 29.4871 39.9125 29.5496C39.9692 29.6929 39.9988 29.8455 40 29.9996C39.9988 30.1537 39.9692 30.3063 39.9125 30.4496C39.9125 30.5121 39.9125 30.5496 39.825 30.6121C39.7922 30.6773 39.7545 30.74 39.7125 30.7996L33.4625 38.2996C33.345 38.4407 33.1978 38.5542 33.0314 38.632C32.8651 38.7097 32.6836 38.7499 32.5 38.7496C32.2079 38.7502 31.9249 38.6485 31.7 38.4621C31.5734 38.3572 31.4688 38.2283 31.3921 38.0829C31.3154 37.9374 31.2682 37.7783 31.2531 37.6146C31.238 37.4509 31.2553 37.2858 31.3041 37.1288C31.3529 36.9718 31.4322 36.8259 31.5375 36.6996L36.075 31.2496H21.25C20.9185 31.2496 20.6005 31.1179 20.3661 30.8835C20.1317 30.6491 20 30.3311 20 29.9996C20 29.6681 20.1317 29.3501 20.3661 29.1157C20.6005 28.8813 20.9185 28.7496 21.25 28.7496Z"
                  fill="#0078FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
