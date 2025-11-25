import React from "react";
import { useNavigate } from "react-router-dom";
import people from "../../assets/images/people.png";

const RequestSentFinalPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-8">
      <div className="mb-8 w-64 h-64">
        <img
          src={people}
          alt="Success - People celebrating request sent"
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Request Sent Successfully!
      </h1>
      <p className="text-sm text-gray-500 mb-10 max-w-sm leading-relaxed">
        Your bundle has been sent to Mummy. They will receive a notification to
        review and approve your request.
      </p>

      <button
        onClick={() => navigate("/dashboard/generate-request")}
        className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-xl"
      >
        View Dashboard
      </button>
    </div>
  );
};

export default RequestSentFinalPage;