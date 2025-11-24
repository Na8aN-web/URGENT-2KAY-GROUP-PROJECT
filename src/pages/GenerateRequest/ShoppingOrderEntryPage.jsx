import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const VENDOR_LOGOS = {
  Jumia: "https://placehold.co/80x80/FFA500/ffffff?text=JUMIA",
  Temu: "https://placehold.co/80x80/FFA500/ffffff?text=TEMU",
  SHEIN: "https://placehold.co/80x80/000000/ffffff?text=SHEIN",
  Konga: "https://placehold.co/80x80/FFA500/ffffff?text=KONGA",
};

const ShoppingOrderEntryPage = () => {
  const navigate = useNavigate();
  const { vendorName } = useParams();

  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddToCart = () => {
    if (!orderId || Number(amount) <= 0) {
      console.error("Order ID and a valid amount are required.");
      return;
    }

    console.log(
      `Added ${vendorName} item to cart: Order ID ${orderId}, Amount ₦${amount}`
    );

    navigate("/dashboard/item-added");
  };

  const isButtonDisabled = !orderId || Number(amount) <= 1000;

  return (
    <div className="space-y-8 max-w-xl mx-auto p-4 sm:p-6 lg:p-8 min-h-full w-full">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Shopping{" "}
        <span className="text-gray-500 font-normal">/ {vendorName}</span>
      </h1>

      <div className="space-y-8">
        {/* Service Provider */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 font-medium mb-1">
              Service Provider
            </p>
            <img
              src={VENDOR_LOGOS[vendorName] || VENDOR_LOGOS["Jumia"]}
              alt={vendorName}
              className="w-20 h-20 rounded-xl"
            />
          </div>
        </div>

        {/* Order ID Input */}
        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">
            Order ID
          </label>
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full p-4 border-b border-gray-300 bg-transparent text-lg placeholder:text-sm focus:border-[#401A6D] focus:outline-none"
            required
          />
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-0 bottom-3 text-lg font-bold text-gray-700">
              ₦
            </span>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9.]/g, "");
                setAmount(numericValue);
              }}
              className="w-full p-4 pl-6 border-b border-gray-300 bg-transparent text-lg placeholder:text-sm focus:border-[#401A6D] focus:outline-none font-mono [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              required
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="pt-8">
          <button
            onClick={handleAddToCart}
            disabled={isButtonDisabled}
            className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-xl disabled:opacity-50"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingOrderEntryPage;