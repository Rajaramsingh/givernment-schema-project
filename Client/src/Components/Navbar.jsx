import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Search Schemes', path: '/schemes/search' },
    { name: 'All Schemes', path: '/schemes/list' },
    { name: 'Check Eligibility', path: '/schemes/eligibility' },
    { name: 'Application Status', path: '/application-status' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Text-based logo instead of image */}
     <span className="text-4xl font-bold">

              <span className="text-blue-600 font-bold" >Gov.</span>
              <span className="text-orange-500 font-bold">Scheme</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-blue-600">
              Search Schemes
            </Link>
            <Link to="/schemes" className="text-gray-600 hover:text-blue-600">
              All Schemes
            </Link>
            <Link to="/eligibility" className="text-gray-600 hover:text-blue-600">
              Check Eligibility
            </Link>
            <Link to="/status" className="text-gray-600 hover:text-blue-600">
              Application Status
            </Link>
            <Link to="/demo" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/search"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Search Schemes
            </Link>
            <Link
              to="/schemes"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              All Schemes
            </Link>
            <Link
              to="/eligibility"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Check Eligibility
            </Link>
            <Link
              to="/status"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Application Status
            </Link>
            <Link
              to="/demo"
              className="block px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
