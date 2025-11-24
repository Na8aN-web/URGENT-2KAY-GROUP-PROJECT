import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SHOPPING_VENDORS = ["Jumia", "Temu", "SHEIN", "Konga"];
const SERVICE_TYPE = "Shopping";

const ShoppingPaymentPage = () => {
  const navigate = useNavigate();
  const { serviceType } = useParams();

  const [selectedVendor, setSelectedVendor] = useState("");

  const handleVendorSelection = (vendor) => {
    setSelectedVendor(vendor);
    navigate(`/dashboard/pay/order-entry/${vendor}`);
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-xl mx-auto min-h-full">
      <button
        onClick={() => navigate("/dashboard/generate-request")}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        {serviceType || SERVICE_TYPE}
      </h1>

      <div className="space-y-3">
        <label className="block text-base font-medium text-gray-500 mb-2">
          Service Provider
        </label>
        {SHOPPING_VENDORS.map((vendor) => (
          <button
            key={vendor}
            onClick={() => handleVendorSelection(vendor)}
            className={`w-full text-left p-4 rounded-xl border font-semibold transition-all shadow-sm ${
              selectedVendor === vendor
                ? "bg-purple-50 border-[#401A6D] text-[#401A6D]"
                : "bg-white border-gray-300 text-gray-500 hover:bg-gray-100"
            }`}
            style={{ height: "56px" }}
          >
            {vendor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPaymentPage;