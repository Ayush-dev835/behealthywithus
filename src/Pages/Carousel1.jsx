import React from 'react'
import { Carousel } from "flowbite-react";

function Carousel1() {
  const cardData = [
    {
      title: "Justin Boniface, Jaipur",
      description: "We had a wonderful experience with the Service provided by the Company…. The Quality of the Bed and Table provided was excellent….. The Installation and Pickup was hassle free…. The payment was reasonable…… I highly recommend the Company for Medical Equipment.",
      bgColor: "bg-blue-500"
    },
    {
      title: "Ricky Pahwa, Chandigarh",
      description: "I purchase Electric Wheelchair from Healthy Jeena Sikho, A great options available to choose from and even they deal in multiple brands. Really happy with the Service and Product they offered.Thanks team for giving the best product under my budget",
      bgColor: "bg-zinc-500"
    },
    {
      title: "Rashmi Goel, Noida",
      description: "Really satisfied with their service. Hassle free. The condition of the wheelchair was great. Plus It was home picked. I didn’t have to go to them to drop it off. They provided the service with reasonable transport charges. Excellent service",
      bgColor: "bg-red-500"
    },
    {
      title: "Latha SN, Lucknow",
      description: "Hi.. services by company..is highly appreciated..because everytime its not about money..its about the right services available for u at right time ..especially..only the one in need...we rented a wheelchair for a week..we've been to delhi,agra,ayodhya and kashi ..this trip happend peacefully because of the service",
      bgColor: "bg-yellow-500"
    },
    {
      title: "Atul Sharma, Delhi",
      description: "I'm happy to express my satisfaction with the excellent services provided by this company. I bought a 5-function bed from them 4 months ago and I must say I am very happy with the product. Their approach to patient care showcases their commitment to excellence.",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <div className="h-auto sm:h-64 bg-green-500 xl:h-80 2xl:h-96 flex justify-center items-center">
      <Carousel>
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className={`relative ${card.bgColor} border-2  border-black text-white p-4 rounded-lg w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]  flex flex-col justify-center items-center`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">{card.title}</h2>
            <p className="text-sm sm:text-base md:text-lg mt-4 text-center">{card.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousel1;
