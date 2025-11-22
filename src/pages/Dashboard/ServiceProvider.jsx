import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function ServiceProvider() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessAddress: '',
    contactEmail: '',
    contactPhone: '',
    website: '',
    agreedToTerms: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const handleCancel = () => {
    setFormData({
      businessName: '',
      businessAddress: '',
      contactEmail: '',
      contactPhone: '',
      website: '',
      agreedToTerms: false
    });
    navigate('/dashboard/help');
  };

  return (
    <div className="min-h-screen bg-[#ECE8F0] py-12 px-4">
      <div className="mx-6">
        <h1 className="text-4xl py-2 font-bold text-gray-900 mb-12">
          Become a service provider
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Business Detail
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Business Address
              </label>
              <input
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleChange}
                placeholder="Enter your business address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="Enter your contact email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Contact Phone Number
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="Enter your contact phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Website (Optional)
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="enter your website url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to <span className="font-semibold">Urgent'2k's</span> Terms and Conditions, Privacy Policy and Cookies Policy
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-[#3A1863] hover:bg-purple-900 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                Submit Application
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button
                onClick={handleCancel}
                className="flex-1 bg-purple-200 hover:bg-purple-300 text-gray-700 font-medium py-3 px-6 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}