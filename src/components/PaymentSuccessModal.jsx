import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PaymentSuccessModal() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-500 rounded-full"></div>
        </div>
        
        {/* Title */}
        <h2 className="text-center text-xl font-bold mb-8">Payment Sucessful</h2>
        
        {/* Transaction Details */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID:</span>
            <span className="font-medium">TX123543209</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Sponsor:</span>
            <span className="font-medium">Adanna</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Beneficiary:</span>
            <span className="font-medium">Lucky John(Educational supplies</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Amount:</span>
            <span className="font-medium">N 80,000</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">2025/07/09</span>
          </div>
        </div>
        
        {/* Receipt Notice */}
        <p className="text-center text-sm text-gray-600 mb-6">
          A receipt has been sent to your email
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-indigo-950 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2">
            View detail
            <ArrowRight size={18} />
          </button>
          
          <button className="flex-1 bg-purple-200 text-purple-900 py-3 px-6 rounded-lg font-medium hover:bg-purple-300 transition-colors">
            Go back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}