import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";

// mock data
const MOCK_REQUEST = {
  requester: "Ada",
  amount: "32,500",
  id: "REQ12345",
  bundleName: "Very Urgent 2Kay bundle",
};

const SponsorNotificationBanner = () => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(`/dashboard/sponsor/inbox`);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl shadow-md border-2 border-purple-200 mb-6">
      <div className="flex items-center space-x-3">
        <Bell className="w-5 h-5 text-[#401A6D]" />
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold text-[#401A6D]">
            {MOCK_REQUEST.requester}
          </span>{" "}
          has sent you a{" "}
          <span className="font-bold">{MOCK_REQUEST.bundleName}</span> request
          for ₦{MOCK_REQUEST.amount}. Tap to review.
        </p>
      </div>

      <button
        onClick={handleReviewClick}
        className="px-4 py-1.5 bg-[#401A6D] text-white rounded-full text-sm font-medium hover:bg-[#401A6D] transition-colors shadow-sm"
      >
        Review
      </button>
    </div>
  );
};

export default SponsorNotificationBanner;
