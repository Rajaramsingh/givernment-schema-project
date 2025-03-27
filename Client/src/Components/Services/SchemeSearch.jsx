import React, { useState } from 'react';

const SchemeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    state: '',
    category: '',
    income: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Find Government Schemes That Matter to You
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Access thousands of government schemes and benefits in one place
              </p>
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for schemes..."
                    className="w-full p-4 pl-12 rounded-lg text-gray-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://img.freepik.com/free-vector/government-services-abstract-concept-illustration_107173-25439.jpg" 
                alt="Government Services" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Schemes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">28</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Citizens Benefited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Search Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Advanced Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                className="p-3 border rounded-lg focus:border-blue-500 outline-none"
                value={selectedFilters.state}
                onChange={(e) => setSelectedFilters({...selectedFilters, state: e.target.value})}
              >
                <option value="">Select State</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="delhi">Delhi</option>
                <option value="up">Uttar Pradesh</option>
              </select>

              <select
                className="p-3 border rounded-lg focus:border-blue-500 outline-none"
                value={selectedFilters.category}
                onChange={(e) => setSelectedFilters({...selectedFilters, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="education">Education</option>
                <option value="agriculture">Agriculture</option>
                <option value="health">Healthcare</option>
                <option value="housing">Housing</option>
              </select>

              <select
                className="p-3 border rounded-lg focus:border-blue-500 outline-none"
                value={selectedFilters.income}
                onChange={(e) => setSelectedFilters({...selectedFilters, income: e.target.value})}
              >
                <option value="">Income Range</option>
                <option value="0-250000">Below 2.5L</option>
                <option value="250000-500000">2.5L - 5L</option>
                <option value="500000+">Above 5L</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Education', icon: '🎓', color: 'blue' },
              { name: 'Agriculture', icon: '🌾', color: 'green' },
              { name: 'Healthcare', icon: '⚕️', color: 'red' },
              { name: 'Housing', icon: '🏠', color: 'purple' }
            ].map((category) => (
              <div 
                key={category.name}
                className={`bg-${category.color}-50 p-6 rounded-xl text-center cursor-pointer hover:shadow-md transition-all`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className={`text-${category.color}-600 font-semibold`}>{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Schemes */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">PM Kisan Scheme</h3>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Active</span>
                </div>
                <p className="text-gray-600 mb-4">Financial support for farmers across India</p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Agriculture</span>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">All States</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Schemes</h3>
              <p className="text-gray-600">Find relevant schemes using our powerful search</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Check Eligibility</h3>
              <p className="text-gray-600">Verify if you qualify for the scheme</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application digitally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeSearch; 