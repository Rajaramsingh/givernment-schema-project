import React, { useState } from 'react';

const ApplicationStatus = () => {
  const [applications] = useState([
    {
      id: 'APP2024001',
      schemeName: 'PM Kisan Samman Nidhi',
      status: 'approved',
      submittedDate: '2024-03-15',
      lastUpdated: '2024-03-20',
      amount: '6000',
      nextInstallmentDate: '2024-06-15',
      documents: ['identity.pdf', 'land_records.pdf'],
      timeline: [
        { date: '2024-03-15', status: 'Application Submitted', done: true },
        { date: '2024-03-17', status: 'Document Verification', done: true },
        { date: '2024-03-18', status: 'Background Check', done: true },
        { date: '2024-03-20', status: 'Application Approved', done: true },
        { date: '2024-03-25', status: 'Payment Processing', done: false }
      ]
    },
    {
      id: 'APP2024002',
      schemeName: 'National Scholarship Portal',
      status: 'pending',
      submittedDate: '2024-03-10',
      lastUpdated: '2024-03-18',
      amount: '25000',
      documents: ['academic_records.pdf', 'income_certificate.pdf'],
      timeline: [
        { date: '2024-03-10', status: 'Application Submitted', done: true },
        { date: '2024-03-15', status: 'Initial Review', done: true },
        { date: '2024-03-18', status: 'Document Verification', done: true },
        { date: '2024-03-22', status: 'Final Approval', done: false },
        { date: '2024-03-25', status: 'Fund Disbursement', done: false }
      ]
    }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Track Your Applications</h1>
              <p className="text-xl text-blue-100">
                Monitor your government scheme applications in real-time
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://img.freepik.com/free-vector/progress-overview-concept-illustration_114360-5650.jpg" 
                alt="Application Status" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Applications', value: '2', icon: '📝' },
            { label: 'Approved', value: '1', icon: '✅' },
            { label: 'Pending', value: '1', icon: '⏳' },
            { label: 'Total Amount', value: '₹31,000', icon: '💰' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-gray-600">{stat.label}</div>
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{app.schemeName}</h3>
                    <p className="text-gray-600">Application ID: {app.id}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 bg-gray-50">
                <h4 className="text-lg font-semibold mb-4">Application Timeline</h4>
                <div className="relative">
                  {app.timeline.map((step, index) => (
                    <div key={index} className="flex items-start mb-4 last:mb-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        step.done ? 'bg-green-500 text-white' : 'bg-gray-200'
                      }`}>
                        {step.done ? '✓' : (index + 1)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{step.status}</div>
                        <div className="text-sm text-gray-600">{step.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600">Submitted Date</div>
                  <div className="font-medium">{app.submittedDate}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Last Updated</div>
                  <div className="font-medium">{app.lastUpdated}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Amount</div>
                  <div className="font-medium">₹{app.amount}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 bg-gray-50 border-t flex justify-end space-x-4">
                <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Download Status
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Contact Support</h3>
              <p className="text-gray-600">Call us at 1800-XXX-XXXX</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Chat with our support team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600">Browse common questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus; 