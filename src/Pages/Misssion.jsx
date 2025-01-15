import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa6";
import CardBed from "./CardBed";

function Misssion() {
  const beds = [
    {
      title: "Hospital Bed On Rent",
      imageSrc: "./public/electric 1 function hospital bed.avif",
      description:
        "Entire Range of electric hospital bed, Recliner, ICU Grade for Patient Care at Home",
    },
    {
      title: "Resmed BiPAP/CPAP Machine",
      imageSrc: "./public/electric 1 function hospital bed.avif",
      description:
        "Bipap from top Brands on Rent and sale for sleep Apnea, COPD, breathing issue management",
    },
    {
      title: "Oxygen Machine",
      imageSrc: "./public/electric 1 function hospital bed.avif",
      description:
        "Oxygen Machine from Philips, Medoxy, Oxymed on rent starting at Rs 3000 only ",
    },
    {
      title: "Oxygen Machine",
      imageSrc: "./public/electric 1 function hospital bed.avif",
      description:
        "Oxygen Machine from Philips, Medoxy, Oxymed on rent starting at Rs 3000 only ",
    },
    // You can add more objects here if needed
  ];

  return (
    <div className="bg-green-200">
      <div className="flex justify-center py-16 items-center px-4">
        <div className="max-w-3xl w-full">
          <span className="text-2xl font-semibold border-b-2 border-black">
            Mission Statement :
          </span>
          <p className="text-xl mt-2">
            At Healthy Jeena Sikho, we are committed to providing all home health
            medical equipment at{" "}
            <span className="font-semibold">affordable prices</span> for patient care at home with{" "}
            <span className="font-semibold">Same day</span> express service.
          </p>

          <p className="text-xl mt-4">
            We have offices in{" "}
            <span className="font-semibold border-b-2 border-black">15 cities in North India</span> for
            patient care at home, with services available across{" "}
            <span className="font-semibold">PAN India</span>.
          </p>

          <p className="text-xl mt-4">
            <span className="font-semibold">Healthy Jeena Sikho</span> has served over{" "}
            <span className="font-semibold">100,000 patients</span> since 2015 with an industry record
            of <span className="font-semibold">97% satisfaction</span> post-sales.
          </p>

          <p className="text-xl mt-4">
            We are an <span className="font-semibold">ISO & MSME certified</span> private limited company,
            backed by industry veterans and an <span className="font-semibold">experienced & committed team</span>
            delivering exceptional service.
          </p>

          <p className="text-xl mt-4">
            Get top brands like{" "}
            <span className="font-semibold">
              Resmed, Philips, Paramount, Karma, Esleh, Hero, Oxymed, Niscomed, BMC
            </span>{" "}
            and more, available through our own manufacturing facility.
          </p>

          <div className="flex flex-wrap justify-center mt-6 gap-6">
            <button className="bg-gradient-to-r from-blue-600 via-orange-400 to-red-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-400 hover:to-pink-400 transition duration-300">
              Call Now
            </button>
            <button className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-400 hover:to-pink-400 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center py-4 items-center gap-8">
        <CardBed/>
        {/* {beds.map((bed, index) => (
          <div
            key={index}
            className="border-2 w-full sm:w-[300px] bg-white rounded-lg border-black py-4 px-4"
          >
            <h1 className="text-black w-full text-xl text-center font-semibold">{bed.title}</h1>

            <div className="flex justify-center py-4 items-center">
              <img src={bed.imageSrc} alt={bed.title} className="w-full max-w-[250px] object-cover" />
            </div>
            <div className="flex justify-center py-4 items-center">
              <p className="text-md text-center">{bed.description}</p>
            </div>

            <div className="flex justify-center py-4 space-x-8 items-center">
              <button className="bg-gradient-to-r from-blue-600 via-orange-400 to-red-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-400 hover:to-pink-400 transition duration-300">
                Call Now
              </button>
              <button className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-400 hover:to-pink-400 transition duration-300">
                Call Now
              </button>
            </div>
          </div>
        ))} */}
      </div>

      <div className="flex justify-center py-4">
        <p className="text-xl text-center">
          We are available on PAN India Calling Number 24X7. Need Help? Connect now on Call / WhatsApp.
        </p>
      </div>

      <div className="flex justify-center items-center py-8 px-4">
        <div className="bg-blue-800 w-full max-w-lg px-8 py-4 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <FiPhone size={45} color="white" />
            <div className="bg-white px-8 py-2 text-black rounded-lg mt-4 sm:mt-0 w-full sm:w-auto">
              <div className="flex py-1 text-black items-center justify-center">
                <h4 className="font-semibold">+6396594013</h4>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Misssion;
