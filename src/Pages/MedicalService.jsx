import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";

function MedicalService() {
  // Array of services
  const services = [
    {
      title: "Dental Care",
      description:
        "We have more doctors for your dental illness. We are here for your better treatment",
      icon: <TbDental size={45} />,
    },
    {
      title: "General Health",
      description:
        "Our doctors provide comprehensive health checkups and preventive care.",
      icon: <TbDental size={45} />,
    },
    {
      title: "Emergency Care",
      description:
        "24/7 emergency services with a team of skilled healthcare professionals.",
      icon: <TbDental size={45} />,
    },
    // Add more services as needed
  ];

  return (
    <>
      <div className="flex  justify-center items-center py-16   space-x-4  px-4 sm:px-8">
        <h1 className="text-3xl  sm:text-5xl mb-8 py-10 font-semibold text-center">
          Our Medical Services
        </h1>
      </div>

      <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex relative py-16 justify-center items-center shadow-lg w-full sm:w-80 mx-auto px-6 sm:px-8 m-4"
          >
            <div className="text-center">
              <div className="absolute bg-blue-500 text-white -top-10 md:left-[120px] left-[190px] flex justify-center border-pink-500 transition-all duration-450 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 items-center rounded-full border-2 p-4  ">
                {service.icon}
              </div>
              <h2 className="text-xl sm:text-4xl py-4 font-semibold">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base">{service.description}</p>
              <div className="flex justify-center mt-4">
              <FaArrowRight size={35} className="text-xl sm:text-2xl transition-all duration-450 ease-in-out transform hover:scale-110 hover:translate-x-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MedicalService;
