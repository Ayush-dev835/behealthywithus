import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Article() {
  // Array of services
  const services = [
    {
      title: "Tips for Orthopedic Surgery Patients",
      description:
        "We have more doctors for your dental illness. We are here for your better treatment",
      image: "./public/surgery.jpg",
    },
    {
      title: "Transfusion strategy and heart surgery",
      description:
        "Our doctors provide comprehensive health checkups and preventive care.",
      image: "./public/orthopedic.jpg",
    },
    {
      title: "Get the Exercise for Limited Mobility",
      description:
        "24/7 emergency services with a team of skilled healthcare professionals.",
      image: "./public/surgery(1).jpg",
    },
    // Add more services as needed
  ];

  return (
    <>
      <div className="flex justify-center items-center py-16  px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl mb-8 py-10 font-semibold text-center">
          Latest Post & Article
        </h1>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex relative py-16 rounded-lg justify-center items-center shadow-lg w-full sm:w-80 mx-auto px-6 sm:px-8"
          >
            <div className="text-center mb-4">
              <div className="bg-blue-500 text-white flex justify-center items-center rounded-full hover:scale-110 hover:bg-gradient-to-r transition-all duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-56 -mt-16 object-cover"
                />
              </div>
              <h2 className="text-xl mb-4 sm:text-2xl md:text-3xl py-4 font-semibold">
                {service.title}
              </h2>
              {/* <p className="text-sm sm:text-base">{service.description}</p> */}
              <div className="absolute text-white bg-blue-700 p-2 bottom-0  left-4 transform -translate-y-1/2 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-500 rounded-full border-2">
              <MdOutlineArrowRightAlt size={35} className="text-black" />
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Article;
