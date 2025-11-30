import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import metamask from "../../assets/images/metamask.png";
import coinbase from "../../assets/images/coinbase.png";
import bitcoin from "../../assets/images/bitcoin2.png";

{/* modal component */}
const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/20 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 sm:p-10 max-w-lg w-full shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">
          {message}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-3 font-semibold text-lg rounded-[58px] border-2 border-[#E8BF31] text-[#401A6D] hover:bg-[#E8BF31]/20 transition-colors shadow-lg w-full sm:w-40"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-3 font-semibold text-lg rounded-[58px] bg-[#401A6D] text-white hover:bg-[#401A6D]/90 transition-colors shadow-lg w-full sm:w-40"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

const FinalCheckoutPage = () => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handlePayNowClick = () => {
    setShowConfirmModal(true);
  };

  const onConfirmPayment = () => {
    setShowConfirmModal(false);
    navigate("/dashboard/success");
  };

  const onCancelPayment = () => {
    setShowConfirmModal(false);
  };

  const handleBackClick = () => {
    // go back to funding selection page
    navigate('/dashboard/sponsor/fund/REQ1001');
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 min-h-full max-w-6xl mx-auto">
      <button
        onClick={handleBackClick}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* billing info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 pb-1">
            Billing Information
          </h2>

          <div className="p-6 border-2 border-gray-200 rounded-xl space-y-4 shadow-sm">
            {/* name input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
              />
            </div>

            {/* country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <select
                id="country"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D] appearance-none"
              >
                <option>Select your country</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>South Africa</option>
              </select>
            </div>
          </div>
        </div>

        {/* payment method*/}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 pb-1">
            Payment Method
          </h2>

          {/* card details */}
          <div className="p-6 border-2 border-gray-200 rounded-xl space-y-4 shadow-sm">
            <div className="flex items-center space-x-3 text-gray-800">
              <span className="font-semibold">Card</span>
            </div>

            {/* card number */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="w-full p-3 pr-20 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D] text-lg font-mono"
                />
                <span className="bg-white-300 text-blue-800 absolute right-10 top-4 font-bold">
                  VISA
                </span>
                <span className=" absolute right-3 top-5 bg-red-600 px-2 py-2 rounded-full"></span>
                <span className=" absolute right-1 top-5 bg-orange-400 px-2 py-2 rounded-full"></span>

                <div></div>
              </div>
            </div>

            {/* expiry and cvc */}
            <div className="flex space-x-4">
              <div className="w-1/2 space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
                />
              </div>
              <div className="w-1/2 space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Security Code
                </label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
                />
              </div>
            </div>

            <p className="font-medium text-gray-500 pt-4">
              By providing your card information, you allow Urgent2kay to charge
              your card for future payments in accordance with their terms.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handlePayNowClick}
              className="w-3/4 px-8 py-4 bg-[#401A6D] text-white rounded-[58px] font-bold text-lg hover:bg-purple-800 transition-colors shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Pay Now</span>
            </button>

            <p className="text-sm text-gray-500 mt-3">
              I agree to the Terms of Use, Refund Policy, and Privacy Policy.
            </p>
          </div>

          <div className="pt-4 border-2 border-gray-200">
            <div className="flex items-center justify-around space-x-4 space-y-4 md:space-x-10">
              <span className="text-sm font-semibold text-gray-600 cursor-pointer hover:text-[#401A6D]">
                Continue Payment Onchain
              </span>
              {/* continue payment onchain with icons */}
              <div className="flex justify-center space-x-2">
                <img
                  src={metamask}
                  alt="MetaMask Icon"
                  className="h-5 w-5 rounded-full"
                />
                <img
                  src={coinbase}
                  alt="Coinbase Icon"
                  className="h-5 w-5 rounded-full"
                />
                <img
                  src={bitcoin}
                  alt="Bitcoin Icon"
                  className="h-5 w-5 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* confirmation modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onConfirm={onConfirmPayment}
        onCancel={onCancelPayment}
        message="Are you sure you want to complete payment?"
      />
    </div>
  );
};

export default FinalCheckoutPage;
