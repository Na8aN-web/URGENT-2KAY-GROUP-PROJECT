import React from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const RequestSentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-8">
      <div className="mb-8 w-40 h-40 rounded-full bg-green-500 flex items-center justify-center shadow-xl">
        <Check className="w-20 h-20 text-white stroke-2" />
      </div>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
        Congratulations! Request has been sent!
      </h1>
      <p className="text-sm text-gray-500 mb-10 max-w-sm leading-relaxed">
        Go to your dashboard to view the status of your requests.
      </p>

      <button
        onClick={() => navigate("/dashboard/generate-request")}
        className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-xl"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default RequestSentPage;