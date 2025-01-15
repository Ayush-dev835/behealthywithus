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
      <div className=" flex items-center justify-between px-2 pb-4 py-2">
        <a href="/" className="text-2xl font-bold w-32 sm:w-64">
          <img src="./public/healthy logo.avif" alt="Logo" className="w-full h-auto" />
        </a>

        {/* Mobile Menu Button */}
        {/* <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button> */}

        {/* Mobile Menu */}
        <div className={`absolute px-4 text-black flex-col sm:flex-row sm:space-x-2 py-1 justify-between md:static md:flex md:items-center`}>
          
          <div className="group relative">
            <a href="#" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              Home
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px", border: '1px solid red'}}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              Hospital Beds
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              Wheelchairs
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              BiPap
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              Oxygen
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              Shop
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              Contact Us
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>

          <div className="group relative">
            <a href="" className="relative font-semibold block py-2 text-center ml-1 px-2 hover:bg-green-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{borderRadius: '8px'}}>
              More
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul style={{listStyle: "none", padding: "10px",fontSize: "1.2rem",}}>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 1</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 2</li>
                <li style={{ cursor: "pointer", margin: "2px" }}>Option 3</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Icons (Cart, Search) */}
        <div className="md:flex items-center space-x-4 mr-3">
          <div className="relative">
            <div className="flex justify-center items-center bg-blue-800 px-3 py-3 rounded-full text-white cursor-pointer">
              <PiShoppingCartSimpleFill size={25} />
            </div>
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 p-4 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h5 className="font-semibold text-lg">Call Us Now!</h5>
              <p>We are available to assist you 24/7.</p>
            </div> */}
          </div>

          <div className="relative">
            <div className="flex justify-center items-center bg-blue-800 px-4 py-4 rounded-full text-white cursor-pointer">
              <TfiSearch size={17} />
            </div>
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-64 p-4 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h5 className="font-semibold text-lg">Search</h5>
              <p>Find what you're looking for.</p>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
