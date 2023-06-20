import React, { useState } from 'react';
import profile from '../images/propic.png'
import logo from '../images/ARlogow.svg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-10 rounded-full w-auto" src={logo} alt="Logo" />
              <img className="hidden lg:block h-8 w-auto rounded-full" src={logo} alt="Logo" />
              {/* <h2 className="text-2xl font-bold mb-4 text-white ml-2 justify-center mx-auto my-auto"></h2> */}
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a href="/" className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700">
                Home
              </a>
              <a href="/about" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700">
                About
              </a>
              <a href="/projects" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700">
                Move Calculator
              </a>
              <a href="/contact" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
          <button
  type="button"
  className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-green-300 focus:outline-none focus:bg-green-300 focus:text-gray-700"
  aria-expanded="false"
  onClick={handleToggleMobileMenu}
>
  <span className="sr-only">Open main menu</span>
  <svg
    className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
  <svg
    className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 h-screen">
          <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-300 ">Home</a>
          <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-300 ">About</a>
          <a href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-300 ">Projects</a>
          <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-300 ">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
       