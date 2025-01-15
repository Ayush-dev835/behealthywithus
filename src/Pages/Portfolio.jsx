import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Portfolio() {
  const portfolio = [
    {
      image: "./public/consulte.jpg",
      title: "Heart Institure",
      description: "Treatment",
    },
    {
      image: "./public/consulte.jpg",
      title: "Orthopaedics Center",
      description: "Treatment",
    },
    {
      image: "./public/consulte.jpg",
      title: "Neurology Services",
      description: "Treatment",
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full py-8 px-10 sm:px-8 md:px-16">
        <div className="text-center mb-8 sm:mb-0 sm:text-left">
          <div className="bg-green-100 rounded-full w-[220px] mx-auto sm:mx-0">
            <p className="text-sm sm:text-md py-2 font-semibold text-center">
              Our Portfolio
            </p>
          </div>
          <div className="w-full md:w-[630px] lg:w-[430px]">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl md:text-5xl mb-10 sm:mb-32 py-8 font-semibold">
              All The Great Work <br /> That We Done
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center  px-4  w-full">
          <div className="relative flex justify-between px-4 py-10 items-center rounded-full bg-blue-500 max-w-[320px] h-[50px] w-full">
            <h1 className="text-xl sm:text-2xl py-4 font-semibold text-center text-white">
              See All Services
            </h1>
            <div className="absolute text-white top-1/2 left-[calc(100%-48px)] transform -translate-y-1/2 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 rounded-full border-2">
              <MdOutlineArrowRightAlt size={35} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[330px] md:w-[380px] lg:w-[400px] h-[400px] flex justify-center items-center relative group"
          >
            <img
              src={item.image}
              alt={`Portfolio item ${index}`}
              className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 top-64  px-8  flex justify-center items-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <div className="w-full h-[130px]   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 border-2 border-gray-300 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-center text-white">
                  {item.title}
                </h3>
                <p className="text-md text-center text-white mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
