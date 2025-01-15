import React from "react";

function Repiratory() {
  const services = [
    {
      image: "./public/Oxygen Concentrator & Cyliner.avif",
    },
    {
      image: "../../public/evox logo.avif",
    },
    {
      image: "../../public/oxymed logo.avif",
    },
    {
      image: "../../public/Philips Logo.avif",
    },
    {
      image: "../../public/bmc logo.avif",
    },
    {
      image: "../../public/topson.avif",
    },
    
  ];
  return (
    <div>
      <div className= "bg-green-200 text-center py-12 ">
        <h1 className="text-3xl mb-8  py-4 sm:text-4xl md:text-5xl text-[#29293a] font-bold">
        Our Respiratory Brands
        </h1>
        <h1 className="text-sm   sm:text-md md:text-xl text-[#29293a] ">
        Explore our Trusted Partners in Quality, Innovation, and Excellence for your comfort.
        </h1>
      </div>
      <div className="grid bg-green-200 py-4  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-2   ">
        {services.map((service, index) => (
          <div key={index} className=" mt-4 text-center">
            <div className="w-36 h-36 mx-auto rounded-full flex justify-center items-center   transition-all duration-450 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r ">
              <img src={service.image} className=" w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repiratory;
