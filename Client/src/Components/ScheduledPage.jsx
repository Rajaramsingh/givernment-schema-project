import React from 'react';

const ScheduledPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Schedule Item 1</h3>
            <p className="text-gray-600">Schedule details here</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Schedule Item 2</h3>
            <p className="text-gray-600">Schedule details here</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Schedule Item 3</h3>
            <p className="text-gray-600">Schedule details here</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-700 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">Cure</span>
                <span className="text-orange-500">India</span>
              </h2>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Contact</h3>
                <p>contact@cure.link</p>
                <p>Call +1234567890</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p>Curelink Pvt. Ltd.</p>
              <p>Plot No. 558, Golf Course Rd, Sector 27,</p>
              <p>Gurugram, Haryana 122002</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ScheduledPage;
