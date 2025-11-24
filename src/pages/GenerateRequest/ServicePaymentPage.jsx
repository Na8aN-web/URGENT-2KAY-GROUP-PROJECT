import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SERVICE_TYPE = "Electricity";
const ELECTRICITY_BILLERS = [
  "Ikeja Electric (IKEDC)",
  "Eko Electric (EKEDC)",
  "Kaduna Electric",
  "Abuja Electric",
];
const PRESET_AMOUNTS = [1000, 5000, 10000, 20000, 50000, 100000, 200000];

const ServicePaymentPage = () => {
  const navigate = useNavigate();
  const { serviceType } = useParams();

  const [biller, setBiller] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [bundleName, setBundleName] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");

  const handlePresetSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(String(amount));
  };

  const handleCustomAmountChange = (e) => {
    const numeric = e.target.value.replace(/\D/g, "");
    setCustomAmount(numeric);
    setSelectedAmount(Number(numeric) || 0);
  };

  const isButtonDisabled =
    !bundleName ||
    !biller ||
    !meterNumber ||
    meterNumber.length < 10 ||
    selectedAmount <= 1000;

  const handleCreateRequestBundle = () => {
    if (isButtonDisabled) return;

    navigate("/dashboard/bundle-success", { state: { bundleCreated: true } });
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full">
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

      <div className="space-y-8">
        {/* Bundle Name */}
        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">
            Bundle Name
          </label>
          <input
            type="text"
            value={bundleName}
            onChange={(e) => setBundleName(e.target.value)}
            placeholder="Enter Bundle name"
            className="w-full p-4 border-2 border-gray-300 rounded-xl text-sm focus:ring-[#401A6D] focus:border-[#401A6D] h-14"
          />
        </div>

        {/* Service Provider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Service Provider
            </label>
            <select
              value={biller}
              onChange={(e) => setBiller(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl text-sm bg-white focus:ring-[#401A6D] focus:border-[#401A6D] appearance-none cursor-pointer h-14"
            >
              <option value="" disabled>
                Select a Service Provider
              </option>
              {ELECTRICITY_BILLERS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Meter Number */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-2">
              Meter Number
            </label>
            <input
              type="text"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
              placeholder="Enter Meter Number"
              className="w-full p-4 border-2 border-gray-300 rounded-xl text-sm focus:ring-[#401A6D] focus:border-[#401A6D] h-14"
            />
          </div>
        </div>

        {/* Presets Amount */}
        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">
            Select Amount
          </label>
          <div className="bg-[#F8F8F8] p-4 rounded-xl">
            <div className="flex flex-wrap gap-3">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePresetSelect(amount)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors border ${
                    selectedAmount === amount
                      ? "bg-[#401A6D] text-white border-[#401A6D]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  ₦{amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">
            Enter Amount
          </label>
          <div className="relative max-w-sm">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold text-gray-700">
              ₦
            </span>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter Amount"
              className="w-full p-4 pl-10 text-lg font-mono focus:outline-none border-b-2 border-gray-300"
              style={{ height: "56px" }}
            />
          </div>
        </div>

        {/* Create Bundle Button */}
        <div>
          <button
            onClick={handleCreateRequestBundle}
            disabled={isButtonDisabled}
            className="px-8 py-3 bg-[#401A6D] text-white rounded-full font-medium text-base hover:bg-purple-800 transition-colors shadow-xl disabled:opacity-50"
          >
            Create Request Bundle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePaymentPage;