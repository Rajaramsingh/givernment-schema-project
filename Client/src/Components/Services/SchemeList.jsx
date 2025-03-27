import React, { useState } from 'react';

const SchemeList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'agriculture', name: 'Agriculture', icon: '🌾' },
    { id: 'health', name: 'Healthcare', icon: '⚕️' },
    { id: 'housing', name: 'Housing', icon: '🏠' },
    { id: 'employment', name: 'Employment', icon: '💼' }
  ];

  const schemes = [
    {
      id: 1,
      name: 'PM Kisan Samman Nidhi',
      category: 'agriculture',
      description: 'Direct income support for farmers',
      benefits: '₹6000 per year',
      eligibility: 'All farmers',
      deadline: '2024-12-31',
      status: 'Active'
    },
    {
      id: 2,
      name: 'National Scholarship Portal',
      category: 'education',
      description: 'Scholarships for students',
      benefits: 'Educational Support',
      eligibility: 'Students',
      deadline: '2024-06-30',
      status: 'Active'
    },
    // Add more schemes as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Government Schemes Directory</h1>
          <p className="text-xl text-blue-100">Explore all available government schemes and benefits</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Total Schemes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">28</div>
              <div className="text-gray-600">States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10M+</div>
              <div className="text-gray-600">Beneficiaries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full mr-4 whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{scheme.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  scheme.status === 'Active' 
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {scheme.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{scheme.description}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <span className="w-24 text-gray-500">Benefits:</span>
                  <span className="text-gray-900">{scheme.benefits}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-24 text-gray-500">Eligibility:</span>
                  <span className="text-gray-900">{scheme.eligibility}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-24 text-gray-500">Deadline:</span>
                  <span className="text-gray-900">{scheme.deadline}</span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {categories.find(c => c.id === scheme.category)?.name}
                </span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Apply Now
                </button>
                <button className="flex-1 border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Search</h3>
              <p className="text-gray-600">Find relevant schemes quickly with our powerful search system</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Simple Application</h3>
              <p className="text-gray-600">Apply for schemes directly through our platform</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Get instant updates on your application status</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">Check your eligibility and apply for schemes today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Check Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchemeList; 