import React from 'react'

function Customers() {
    const services = [
        {
          title: "Patients at Home",
         
          image: "./public/Patient.avif",
        },
        {
          title: "NGO",
          
          image: "../../public/ngo.avif",
        },
        {
          title: "Hospitals & Clinics, Rehab Centres",
          
          image: "../../public/hospital.avif",
        },
        {
          title: "Hospitality Industry",
         
          image: "../../public/hospitality.avif",
        },
        {
          title: "Airport, Railways, Bus Stand",
          
          image: "../../public/Airport.avif",        },
        {
          title: "Home Care Companies",
          
          image: "../../public/home care companies.avif",    
            }, 
          {
          title: "Corporates",
          
            image: "../../public/corporate company.avif",
        }, {
          title: "Educational Institutes",
          
            image: "../../public/Education.avif",
        },
        {
            title: "Film Studios",
            
              image: "../../public/Film.avif",
          },
          {
            title: "NGO",
            
            image: "../../public/ngo.avif",
          },
      ];
  return (
    <div>
          <div className="text-center mt-12 ">
            <h1 className="text-3xl mb-8  sm:text-4xl md:text-5xl text-[#29293a] font-bold">
            Our Customers : Who All We Serve ?
            </h1>
           
          </div>
          <div className="grid bg-green-500 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4  mt-4 text-center"
              >
                <div className="w-36 h-36 mx-auto flex justify-center items-center bg-white  transition-all duration-450 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className=" w-full"
                  />
                </div>
                <h2 className="text-xl font-medium mt-4">{service.title}</h2>
                
                
              </div>
            ))}
          </div>
        </div>
  )
}

export default Customers