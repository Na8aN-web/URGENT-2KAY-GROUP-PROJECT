import React from "react";
import { useNavigate } from "react-router-dom";
import happy from "../../assets/images/happy.png";

const BundleSuccessPage = ({ bundleName = "Your Custom Bundle" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-8">
      <div className="mb-8 w-64 h-64">
        <img
          src={happy}
          alt="Success - Person celebrating bundle creation"
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
        Congratulations! You've Created a Bundle!
      </h1>

      <p className="text-sm text-gray-500 mb-10 max-w-md leading-relaxed">
        {bundleName} is ready, and you're one step closer to simplifying your
        finances.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() =>
            navigate("/dashboard/services", {
              state: { showAddMoreModal: true },
            })
          }
          className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-base hover:bg-purple-800 transition-colors shadow-xl"
        >
          Add more items
        </button>

        <button
          onClick={() => navigate("/dashboard/sponsor-select")}
          className="px-8 py-3 border-2 border-yellow-400 bg-white text-yellow-800 rounded-[58px] font-medium text-base hover:bg-yellow-50 transition-colors shadow-md"
        >
          Send to Sponsor
        </button>
      </div>
    </div>
  );
};

export default BundleSuccessPage;