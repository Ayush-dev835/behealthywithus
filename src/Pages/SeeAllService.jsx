import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";

function SeeAllService() {
  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-8">
      <div className='relative flex justify-between px-4 py-10 items-center rounded-full  bg-blue-500 w-full max-w-[320px] h-[50px]'>
        <h1 className="text-xl sm:text-2xl  py-4 font-semibold text-center text-white">
          See All Services
        </h1>
        <div className="absolute text-white top-1/2 left-[calc(100%-48px)] transform -translate-y-1/2 flex justify-center items-center  transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 rounded-full border-2 ">
          <MdOutlineArrowRightAlt size={35} />
        </div>
      </div>
    </div>
  );
}

export default SeeAllService;
