import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

function Helping() {
  return (
    <>
      <div className="grid grid-cols-1  h-screen lg:grid-cols-2 relative mt-5">
        {/* Left Section */}
        <div className="flex flex-col py-8 px-8 items-center md:items-start">
          <div className="bg-green-100 rounded-full w-[220px] mx-auto sm:mx-0">
            <p className="text-sm sm:text-md py-2 font-semibold text-center">
              Our Portfolio
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-center md:text-left mt-8">
            Helping People Lead
            <br />
            Healthy & Happy Lives
          </h1>
          <p className="text-sm sm:text-xl mt-8 text-center md:text-left px-2">
            Nisi molestie fusce quis eget vitae. Aliquam senectus id placerat
            egestas sed sed venenatis nisl. Tincidunt faucibus facilisi
            vestibulum et ut congue in eget. Augue purus hendrerit tempus
            consequat ut sit.
          </p>
          <div className="relative flex justify-between px-4 py-10 items-center rounded-full bg-blue-500 w-full max-w-[320px] h-[50px] mt-8 mx-auto md:mx-0">
            <h1 className="text-xl sm:text-2xl py-4 font-semibold text-center text-white">
              See All Services
            </h1>
            <div className="absolute text-white top-1/2 left-[calc(100%-48px)] transform -translate-y-1/2 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 rounded-full border-2">
              <MdOutlineArrowRightAlt size={35} />
            </div>
          </div>
        </div>

        {/* Right Section (Image as card) */}
        <div className="relative md:order-first">
          <div className="top-0 right-0 w-[90vw] md:w-[630px] h-screen rounded-full ">
            <img
              src="./public/doctor girl image (1).png"
              alt="Consultation"
              className="absolute left-[50%] w-[530px] h-[530px] top-[10px] md:top-0 transform -translate-x-1/2 object-cover rounded-lg"
            />
          </div>
          <div className='absolute top-16 left-28'>
          <MdOutlineSlowMotionVideo size={135}  className='text-green-300'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Helping;
