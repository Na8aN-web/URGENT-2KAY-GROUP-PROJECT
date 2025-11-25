import React from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../../assets/images/illustration.png";

const ItemAddedPage = ({ addedItemsCount = 2 }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-8">
      <div className="mb-8 w-64 h-64">
        <img
          src={illustration}
          alt="Item Added Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <p className="text-base text-gray-600 mb-4 font-bold">
        You’ve added <span className="text-gray-900">{addedItemsCount}</span>{" "}
        {addedItemsCount === 1 ? "item" : "items"} to your bundle.
      </p>

      <p className="text-sm text-gray-500 mb-10 max-w-sm leading-relaxed">
        Would you like to send it to your sponsor now, or add more items?
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => navigate("/dashboard/sponsor-select")}
          className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-xl"
        >
          Send to Sponsor
        </button>

        <button
          onClick={() =>
            navigate("/dashboard/services", {
              state: { showAddMoreModal: true },
            })
          }
          className="px-8 py-3 border-2 border-[#E8BF31] bg-white text-[#401A6D] rounded-[58px] font-medium text-lg hover:bg-yellow-50 transition-colors shadow-md"
        >
          Add more items
        </button>
      </div>
    </div>
  );
};

export default ItemAddedPage;