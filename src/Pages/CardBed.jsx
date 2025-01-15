import React from 'react';

function CardBed() {
  const beds = [
    {
      id: 1,
      title: 'Hospital Bed On Rent',
      imageSrc: '/electric 1 function hospital bed.avif',
      description: 'Entire Range of electric hospital bed, Recliner, ICU Grade for Patient Care at Home',
    },
    {
      id: 2,
      title: 'Resmed BiPAP/CPAP Machine',
      imageSrc: '/Resmed Machine.avif',
      description: 'Bipap from top Brands on Rent and sale for sleep Apnea, COPD, breathing issue management',
    },
    {
      id: 3,
      title: 'Oxygen Machine',
      imageSrc: '/Oxygen.avif',
      description: 'Oxygen Machine from Philips, Medoxy, Oxymed on rent starting at Rs 3000 only ',
    },
    {
      id: 4,
      title: 'Electric Wheelchair Sale',
      imageSrc: '/Wheelchair.avif',
      description: 'Entire Range of electric and manual wheelchairs. Brand includes Karma, Esleh, Evox',
    },
    {
      id: 5,
      title: 'Oxygen Cylinder at Home',
      imageSrc: '/OxygenCylinder.avif',
      description: 'Oxygen cylinders are great way to assist those needing oxygen support at home, 10L-47L',
    },
    {
      id: 6,
      title: 'Top Medical Equipment',
      imageSrc: '/Medical.avif',
      description: 'From Cardiac Monitors, DVT pump, Air Mattress, Infusion Pump',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 justify-items-center">
      {beds.map((bed) => (
        <div
          key={bed.id}
          className="border-2 bg-white rounded-lg border-black py-4 px-4 w-full sm:w-[300px] flex flex-col items-center"
        >


          <div className="flex justify-center py-4 items-center">
            <img src={bed.imageSrc} alt={bed.title} className="w-full max-w-[250px] object-cover" />
          </div>
          <h1 className="text-black text-xl text-center font-semibold">{bed.title}</h1>
          <div className="flex justify-center py-4 items-center">
            <p className="text-md text-center">{bed.description}</p>
          </div>

          <div className="flex justify-center py-4 space-x-8 items-center">
            <button className="bg-gradient-to-r from-blue-600 via-orange-400 to-red-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-400 hover:to-pink-400 transition duration-300">
              Call Now
            </button>
            <button className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-500 text-white py-2 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-400 hover:to-pink-400 transition duration-300">
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBed;
