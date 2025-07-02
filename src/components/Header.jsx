
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header>
      <nav className="bg-white w-full h-12 sm:h-14 md:h-16 lg:h-18 flex justify-center items-center text-lg fixed top-0 z-[999] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center h-20 w-full z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
          <a href="#" className="flex items-center cursor-pointer no-underline text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
            style={{
              backgroundImage: 'linear-gradient(to right, #074967 30%, #8d2121 42.5%)',
              backgroundSize: '100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            SEEDY ENTERPRISES
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center list-none">
            <li>
              <a
                href="#"
                className="font-semibold text-[#8d2121] flex items-center justify-center no-underline px-4 h-full transition-all duration-300 ease-in-out hover:text-[#074967] hover:-translate-y-0.5"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold text-[#8d2121] flex items-center justify-center no-underline px-5 h-full transition-all duration-300 ease-in-out hover:text-[#074967] hover:-translate-y-0.5"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#8d2121] flex items-center justify-center no-underline px-5 h-full font-semibold transition-all duration-300 ease-in-out hover:text-[#074967] hover:-translate-y-0.5"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#8d2121] flex items-center justify-center no-underline px-5 h-full font-semibold transition-all duration-300 ease-in-out hover:text-[#074967] hover:-translate-y-0.5"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            className="flex flex-col cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 my-0.5 bg-[#8d2121] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 my-0.5 bg-[#8d2121] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 my-0.5 bg-[#8d2121] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#"
                className="block px-6 py-3 text-[#8d2121] font-semibold hover:text-[#074967] hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-6 py-3 text-[#8d2121] font-semibold hover:text-[#074967] hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-6 py-3 text-[#8d2121] font-semibold hover:text-[#074967] hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-6 py-3 text-[#8d2121] font-semibold hover:text-[#074967] hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}