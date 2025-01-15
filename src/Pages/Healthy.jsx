import React from 'react';

function Healthy() {
    const Healthy = [
        {
            title: "We have Experience!",
            description: [
                "9+ Years of Experience, we are there",
                "to serve you round the clock"
            ]
        },
        {
            title: "We are in Your City",
            description: [
                "Stores in 15 Cities & Delivering",
                "products pan india."
            ]
        },
        {
            title: "100,000+ Customers Trust",
            description: [
                "9+ Years of Experience, we are there",
                "to serve you round the clock"
            ]
        },
        {
            title: "We provide Health Support!",
            description: [
                "24/7 Support, available at your convenience.",
                "Always here to help you maintain your well-being."
            ]
        }
    ];

    return (
        <>
            <div className="flex justify-center  py-4 mb-8">
                <h1 className="text-4xl font-semibold">Our Visionary Leaders</h1>
            </div>
            <div className="flex flex-wrap justify-center py-4 items-center gap-4">
                {Healthy.map((item, index) => (
                    <div key={index} className="border-2 p-2 bg-purple-700   rounded-lg px-2 border-black">
                        
                        <div className="flex justify-center py-4 items-center">
                            <p className="text-2xl hover:text-black text-white font-semibold text-center">
                                {item.title}
                            </p>
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <p className="text-xl hover:text-black text-white">
                                {item.description[0]} <br />
                                <span className="flex justify-center text-center text-md">{item.description[1]}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Healthy;
