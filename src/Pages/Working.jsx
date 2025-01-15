import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";

function Working() {
  // Array of services
  const working = [
    {
      title: "Make Appointment",
      description:
        "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      image: "./public/vestm.jpg",
    },
    {
      title: "Get Consultant",
      description:
        "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      image: "./public/consulte.jpg",
    },
    {
      title: "Take Treatment",
      description:
        "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      image: "./public/treatment.jpg",
    },
    {
      title: "Get Relief",
      description:
        "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      image: "./public/relief.jpg",
    },
    // Add more services as needed
  ];

  return (
    <>
      <div className="flex justify-center items-center py-8 mb-10 space-x-4 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl mb-10 lg:mb-32 py-8 font-semibold text-center">
          How We Work
        </h1>
      </div>

      <div className="grid grid-cols-1 mt-10 mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
        {working.map((item, index) => (
          <div
            key={index}
            className="flex relative py-16 mt-32 md:mt-32 sm:mt-32 lg:mt-0 justify-center items-center shadow-lg w-full sm:w-80 mx-auto px-6 sm:px-8"
          >
            <div className="text-center">
              <div className="absolute bg-blue-500 text-white -top-[120px] left-[60px] flex justify-center items-center rounded-full hover:scale-110 hover:bg-gradient-to-r transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full  w-[180px] h-[180px]"
                />
              </div>
              <h2 className="text-xl sm:text-2xl py-4 font-semibold">{item.title}</h2>
              <p className="text-sm sm:text-base">{item.description}</p>
              <div className="flex justify-center mt-4">
                {/* Uncomment for icon */}
                {/* <FaArrowRight size={35} className="text-xl sm:text-2xl transition-all duration-450 ease-in-out transform hover:scale-110 hover:translate-x-2" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Working;
