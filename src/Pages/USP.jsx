import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { GoIssueTrackedBy } from "react-icons/go";
import { TbCar } from "react-icons/tb";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

function USP() {
  const USP = [
    {
      icon: <FaCartShopping size={45} />,

      title: "one to one shop",
    },
    {
      icon: <IoLocationOutline size={45} />,

      title: "15-Cities",
    },
    {
      icon: <IoCalendarNumber size={45} />,

      title: "9+ Experience",
    },
    {
      icon: <GoIssueTrackedBy size={45} />,

      title: "one to one shop",
    },
    {
      icon: <TbCar size={45} />,

      title: "Same Day Delivery",
    },
    {
      icon: <BiSolidSelectMultiple size={45} />,

      title: "Multiple Brands",
    },
    {
      icon: <FaUserAstronaut size={45} />,

      title: "Trained Professionals",
    },
    {
      icon: <FaRegSmile size={45} />,

      title: "100,000+ Satisfied Customer",
    },
  ];
  return (
    <div>
      <div className="bg-[#34495e] text-center  ">
        <h1 className="text-3xl mb-8 py-4 text-white   sm:text-4xl md:text-5xl  font-bold">
          Our USP
        </h1>
        <h1 className="text-sm pb-2  sm:text-md md:text-xl text-white ">
          We fulfil your expectations, deliver excellence, empower your
          healthcare journey, set <br />
          new standards, and inspire confidence—just for you.
        </h1>
      </div>
      <div className="grid bg-pink-400 py-4  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-2   ">
        {USP.map((item, index) => (
          <div key={index} className=" mt-4 text-center">
            <div className="w-36 h-36 mx-auto rounded-full flex justify-center items-center   transition-all duration-450 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r ">
              {/* <img src={service.image} className=" w-full rounded-full" /> */}
              <div>{item.icon}</div>
            </div>
            <h2 className="text-xl font-medium mt-4">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default USP;
