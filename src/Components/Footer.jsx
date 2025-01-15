import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Info Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-oswald mb-4">Info.</h3>
          <p>
            <span className="text-xl">Yogesh Kumar</span>
          </p>
          <p className="mt-3">
            <a
              className="text-md text-pink-600 hover:text-black"
              href="tel:+91-6396594013"
            >
              Whatsapp: 6396594013
            </a>
          </p>
          <p className="sm:text-sm ">
            <a
              className="no-underline text-pink-600 mt-4 hover:text-black sm:text-[15px]"
              href="mailto:ashutosh@fourbrick.com"
            >
              ashutosh@fourbrick.com
            </a>
          </p>

          {/* Address Section */}
          <h3 className="text-2xl font-oswald mb-4 mt-6">Address.</h3>
          <p className="-mt-4">
            <address>C-65, First Floor, sector-2</address>
          </p>
          <p className="">
            <address>Noida, U.P-201301</address>
          </p>
        </div>

        {/* About Us Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-oswald mb-4">About Us</h3>
          <p className="text-gray-600">
            At Qicon, we provide a range of content services to help businesses
            succeed in the digital world. From content creation and editing to
            tailored strategies, optimization, and management, we ensure your
            message connects with your audience and strengthens your brand.
            Whatever your content needs, we have the perfect solution for you.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="md:col-span-1 text-left">
          <h3 className="text-2xl font-oswald mb-4">Quick Links</h3>
          <ul className="space-y-1">
            {['Home', 'Hospital Bed', 'Wheelchairs', 'Bipap', 'Oxygen', 'Shop', 'Contact Us'].map((link) => (
              <li key={link}>
                <a
                  href="/"
                  className="text-[#ed1c94] no-underline hover:text-gray-800"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-oswald mb-4">Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1">
            <img src="./public/consulte.jpg" alt="1" className="rounded-lg w-24 h-20" />
            <img src="./public/consulte.jpg" alt="2" className="rounded-lg w-24 h-20" />
            <img src="./public/consulte.jpg" alt="3" className="rounded-lg w-24 h-20" />
            <img src="./public/consulte.jpg" alt="4" className="rounded-lg w-24 h-20" />
            <img src="./public/consulte.jpg" alt="5" className="rounded-lg w-24 h-20" />
            <img src="./public/consulte.jpg" alt="6" className="rounded-lg w-24 h-20" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-oswald mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Keep up with our always upcoming news and updates. Enter your
            e-mail and subscribe to our newsletter.
          </p>
          <div className="flex flex-col sm:text-[7px] justify-center items-center w-full max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="w-full px-4 py-2 text-black rounded-full border border-gray-300"
            />
            <button className="bg-[#ed1c94] px-6 py-2 rounded-full text-white hover:bg-[#ff4db2] sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Qican India. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
