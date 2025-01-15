import React, { useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between px-2 pb-4 py-2">
        <a href="/" className="text-2xl font-bold w-32 sm:w-64">
          <img src="./public/healthy logo.avif" alt="Logo" className="w-full h-auto" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full bg-white px-4 w-full text-black left-0 flex flex-col sm:flex-row sm:space-x-2 py-1 justify-between md:static md:flex md:items-center`}
        >
          {["Home", "About", "Pages", "Servies", "Portfolio", "Blog", "Contact"].map((link, idx) => (
            <div key={idx} className="group relative">
              <a
                href={`/${link.toLowerCase().replace(" ", "")}`}
                className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-yellow-600 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                {link}
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h5 className="font-semibold text-lg">{link} Info</h5>
                <p>Details about {link}.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Icons (Cart, Search) */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <div className="relative">
            <div className="flex justify-center items-center bg-blue-800 px-3 py-3 rounded-full">
              <PiShoppingCartSimpleFill size={25} />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 p-4 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h5 className="font-semibold text-lg">Call Us Now!</h5>
              <p>We are available to assist you 24/7.</p>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center bg-blue-800 px-4 py-4 rounded-full">
              <TfiSearch size={20} />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 p-4 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h5 className="font-semibold text-lg">Search</h5>
              <p>Find what you're looking for.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
