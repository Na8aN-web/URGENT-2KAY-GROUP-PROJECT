import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

import BillIconCard from "../../components/BillIconCard";
import AddMoreBillsBanner from "../../components/AddMoreBillsBanner";

const MOST_POPULAR_SERVICES = [
  "Electricity",
  "Shop Online",
  "Airtime",
  "Data Top-Up",
];

const ALL_SERVICES_LIST = [
  "Electricity",
  "Shop Online",
  "School Fees",
  "House Rent",
  "Airtime",
  "Food",
  "Data Top-Up",
  "Transfer",
];

const AllServicesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (location.state?.showAddMoreModal) {
      setShowBanner(true);
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, location.pathname, navigate]);

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
        <button
          onClick={() => navigate("/dashboard/generate-request")}
          className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search all services..."
            className="pl-10 pr-4 py-2 w-full rounded-[58px] text-sm bg-white border border-gray-200 focus:ring-2 focus:ring-[#401A6D] focus:border-transparent transition"
          />
        </div>
      </div>

      {showBanner && (
        <div className="flex justify-center w-full">
          <div className="max-w-xl">
            <AddMoreBillsBanner onClose={() => setShowBanner(false)} />
          </div>
        </div>
      )}

      <section>
        <h2 className="text-xl font-bold text-gray-800 pt-4">Most Popular</h2>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 bg-white p-6 rounded-xl">
          {MOST_POPULAR_SERVICES.map((service) => (
            <BillIconCard key={service} name={service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 pt-4">All Services</h2>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 bg-white p-6 rounded-xl">
          {ALL_SERVICES_LIST.map((service) => (
            <BillIconCard key={service} name={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllServicesPage;