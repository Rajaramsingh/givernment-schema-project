import React, { useState } from 'react';

const EligibilityCheck = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      age: '',
      gender: '',
      category: '',
      income: ''
    },
    location: {
      state: '',
      district: '',
      area: 'urban'
    },
    occupation: {
      type: '',
      sector: '',
      employment: ''
    }
  });

  const updateFormData = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Check Your Eligibility</h1>
              <p className="text-xl text-blue-100">
                Find out which government schemes you qualify for in just a few steps
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://img.freepik.com/free-vector/completing-surveys-concept-illustration_114360-5156.jpg" 
                alt="Eligibility Check" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between relative mb-8">
            <div className="w-full absolute top-1/2 h-0.5 bg-gray-200"></div>
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <div className={`text-sm mt-2 ${
                  step >= stepNumber ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {stepNumber === 1 ? 'Personal Info' : 
                   stepNumber === 2 ? 'Location' : 'Occupation'}
                </div>
              </div>
            ))}
          </div>

          {/* Form Steps */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.personalInfo.age}
                    onChange={(e) => updateFormData('personalInfo', 'age', e.target.value)}
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.personalInfo.gender}
                    onChange={(e) => updateFormData('personalInfo', 'gender', e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Category</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.personalInfo.category}
                    onChange={(e) => updateFormData('personalInfo', 'category', e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="general">General</option>
                    <option value="obc">OBC</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Annual Income</label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.personalInfo.income}
                    onChange={(e) => updateFormData('personalInfo', 'income', e.target.value)}
                    placeholder="Enter annual income"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Location Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">State</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.location.state}
                    onChange={(e) => updateFormData('location', 'state', e.target.value)}
                  >
                    <option value="">Select State</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="delhi">Delhi</option>
                    <option value="up">Uttar Pradesh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">District</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.location.district}
                    onChange={(e) => updateFormData('location', 'district', e.target.value)}
                  >
                    <option value="">Select District</option>
                    <option value="dehradun">Dehradun</option>
                    <option value="haridwar">Haridwar</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Area Type</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="area"
                        value="urban"
                        checked={formData.location.area === 'urban'}
                        onChange={(e) => updateFormData('location', 'area', e.target.value)}
                        className="mr-2"
                      />
                      Urban
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="area"
                        value="rural"
                        checked={formData.location.area === 'rural'}
                        onChange={(e) => updateFormData('location', 'area', e.target.value)}
                        className="mr-2"
                      />
                      Rural
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Occupation Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Occupation Type</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.occupation.type}
                    onChange={(e) => updateFormData('occupation', 'type', e.target.value)}
                  >
                    <option value="">Select Occupation</option>
                    <option value="farmer">Farmer</option>
                    <option value="student">Student</option>
                    <option value="business">Business</option>
                    <option value="service">Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Sector</label>
                  <select
                    className="w-full p-3 border rounded-lg focus:border-blue-500 outline-none"
                    value={formData.occupation.sector}
                    onChange={(e) => updateFormData('occupation', 'sector', e.target.value)}
                  >
                    <option value="">Select Sector</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => console.log('Submit', formData)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-auto"
              >
                Check Eligibility
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Why Check Your Eligibility?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Find All Eligible Schemes</h3>
            <p className="text-gray-600">Get a complete list of schemes you're eligible for based on your profile</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Save Time</h3>
            <p className="text-gray-600">Quick and easy way to check eligibility for multiple schemes at once</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Accurate Results</h3>
            <p className="text-gray-600">Get precise eligibility information based on official criteria</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How long does the eligibility check take?",
              a: "The process takes just 2-3 minutes to complete."
            },
            {
              q: "Is my information secure?",
              a: "Yes, all your information is encrypted and secure."
            },
            {
              q: "What happens after I check my eligibility?",
              a: "You'll receive a list of all schemes you're eligible for, with direct application links."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheck; 