import React from "react";

function City() {
  const cities = ["Noida", "Delhi", "Gurgaon", "Mumbai", "Bangalore",
    "Noida", "Delhi", "Gurgaon", "Mumbai", "Bangalore",
    "Noida", "Delhi", "Gurgaon", "Mumbai", "Bangalore"

  ]; 

  return (
    <div>
      <div className="text-center mt-12 py-10">
        <h1 className="text-3xl mb-8 sm:text-4xl md:text-5xl text-[#29293a] font-bold">
          Our City Presence
        </h1>
        <div className="grid grid-cols-1 px-4  py-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="border-2 rounded-lg hover:bg-black hover:text-white border-black">
              <h4 className="text-md md:text-xl font-semibold">{city}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default City;
