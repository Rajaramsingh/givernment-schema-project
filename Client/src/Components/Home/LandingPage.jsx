import React, { useState } from 'react';
import Authentication from '../Auth/Authentication';

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Access Government Schemes Made Easy
                </h1>
                <p className="text-xl mb-8">
                  Discover and apply for government schemes that match your profile
                </p>
                <button
                  onClick={handleGetStarted}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://img.freepik.com/free-vector/government-services-concept-illustration_114360-8498.jpg"
                  alt="Government Services"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rest of your landing page content */}
        {/* ... existing content ... */}
      </div>

      {/* Authentication Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setShowAuth(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Authentication />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage; 