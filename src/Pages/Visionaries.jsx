import React from "react";

const visionariesData = [
  {
    name: "Saket Agarwal",
    title: "Co-Founder",
    image: "./public/saket-web_edited.avif",
    description: [
      "Three decades of Corporate Life, Global CEO",
      "Spice, Philanthropist, Investor in multiple startups",
      "Processes, Human Capital, Innovate Scale",
      "Data Scientist, Compliances",
      "startups",
      "Top Qualities"
    ],
  },
  {
    name: "Jatinder Verma",
    title: "Co-Founder",
    image: "./public/Jatinder_edited.avif",
    description: [
      "Three decades of Corporate Life, the Biggest",
      "G2C UMANG launch by PM Modi, ex-Wipro,",
      "Operations, Quality, Resourceful",
      "Scale, Task Master",
       "Spice",
      "Top Qualities"
    ],
  },
 
];

function Visionaries() {
  return (
    <>
      <div className="flex justify-center  py-4 mb-8">
        <h1 className="text-3xl sm:text-5xl mb-10  py-8 font-semibold text-center">Our Visionaries Leaders</h1>
      </div>
      <div className="flex flex-wrap justify-center py-4 items-center gap-4">
        {visionariesData.map((visionary, index) => (
          <div key={index} className="border-2 bg-white rounded-lg px-2 border-black ">
            <div className="flex justify-center py-1 items-center">
              <img src={visionary.image} alt={visionary.name} className="w-full" />
            </div>
            <div className="flex justify-center py-4 items-center">
              <p className="text-md text-center">
                {visionary.title}
                <br />
                <span className="border-b-2 text-xl font-semibold text-gray-500 border-green-300">
                  {visionary.name}
                </span>
              </p>
            </div>
            <div className="flex w-full justify-center  items-center">
              <p className="text-xl">
                {visionary.description[0]} <br />
                <div className="flex w-full justify-center  items-center">
                
                  {visionary.description[1]}
                
                </div>
                <br />
                <div className="flex justify-center">
                  <span className="text-center text-md">{visionary.description[4]}</span>
                </div>
              </p>
            </div>
            <div className="flex w-full mt-4 justify-center  items-center">
              <div className="flex justify-center">
                <span className="text-center text-md">{visionary.description[5]}</span>
              </div>
            </div>
            <div className="flex justify-center ">
              <span className="text-center text-xl">
                {visionary.description[2]}
              </span>
            </div>
            <div className="flex justify-center mb-4">
              <span className="text-center text-xl">
                {visionary.description[3]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Visionaries;
