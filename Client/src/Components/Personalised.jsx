// Add this comment and save to check if file updates are detected
// Last updated: Check refresh

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Footer from './Footer';

const Personalised = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    state: '',
    region: '',
    category: '',
    eligibility: ''
  });

  return (
    <div className='w-full min-h-screen bg-slate-100 overflow-y-auto'>
      {showOverlay && <SignUp onClose={() => setShowOverlay(false)} />}
      
      <div className='flex justify-around p-4 mt-24'>
        <div className='textStructure mt-4'>
          <div className='masker font-["DM Sans"]'>
            <h2 className='text-4xl leading-none font-bold ml-40'>
              Discover & Access
            </h2>
          </div>
          <div className='masker font-["DM Sans"]'>
            <h2 className='text-4xl leading-none font-semibold py-6 ml-40 text-blue-600'>
              Government Schemes
            </h2>
          </div>
          <div className='masker font-["DM Sans"]'>
            <h2 className='text-xl leading-none ml-40'>
              Find and apply for welfare schemes
            </h2>
          </div>
          <div className='masker font-["DM Sans"]'>
            <h2 className='text-xl leading-none ml-40 py-4'>
              across all states in one place
            </h2>
          </div>
          <div className='masker font-["DM Sans"] py-4'>
            <button
              className='text-lg leading-none text-white font-medium ml-40 bg-blue-500 rounded-lg p-3 hover:bg-blue-600'
              onClick={() => setShowOverlay(true)}
            >
              Check Eligibility
            </button>
          </div>
        </div>

        <div className='animated img gap-10 p-16'>
          <img
            src='https://img.freepik.com/free-vector/government-services-abstract-concept-illustration_107173-25439.jpg'
            alt='Government Services'
            className='rounded-lg w-[300px] h-[300px] object-contain'
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className='bg-blue-50 rounded-xl mx-4 p-6 my-8'>
        <div className='text-center mb-4'>
          <h3 className='text-lg text-blue-800'>
            "Transforming Access to Government Schemes"
          </h3>
        </div>
        
        <div className='flex justify-center gap-16 mt-6'>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-blue-600'>1000+</h4>
            <p className='text-gray-600 mt-2'>Available Schemes</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-blue-600'>28</h4>
            <p className='text-gray-600 mt-2'>States Covered</p>
          </div>
          <div className='text-center'>
            <h4 className='text-3xl font-bold text-blue-600'>10M+</h4>
            <p className='text-gray-600 mt-2'>Citizens Benefited</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='px-20 py-12 bg-white'>
        <h2 className='text-2xl font-bold text-center mb-8'>Why Choose Our Platform?</h2>
        <div className='grid grid-cols-3 gap-6'>
          <div className='text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300'>
            <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Easy Search</h3>
            <p className='text-gray-600 text-sm'>Find relevant schemes quickly</p>
          </div>
          
          <div className='text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300'>
            <div className='bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Eligibility Check</h3>
            <p className='text-gray-600 text-sm'>Get personalized recommendations</p>
          </div>
          
          <div className='text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300'>
            <div className='bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className='text-lg font-semibold mb-2'>Direct Application</h3>
            <p className='text-gray-600 text-sm'>Apply through our platform</p>
          </div>
        </div>
      </div>

      {/* Schemes Section */}
      <div className='px-20 py-12'>
        <h2 className='text-2xl font-bold mb-6'>Popular Schemes</h2>
        <div className='grid grid-cols-3 gap-6'>
          {[1, 2, 3].map((item) => (
            <div key={item} className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <h3 className='text-lg font-semibold mb-2'>PM Kisan Scheme</h3>
              <p className='text-gray-600 text-sm mb-3'>Financial support for farmers across India</p>
              <div className='flex gap-2 mb-3'>
                <span className='bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs'>Agriculture</span>
                <span className='bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs'>All States</span>
              </div>
              <button className='w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600'>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Personalised;
