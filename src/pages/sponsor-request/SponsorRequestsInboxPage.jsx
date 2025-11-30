import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";

const formatNaira = (amount) => {
  return `₦${amount.toLocaleString("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

// mock data
const MOCK_REQUESTS = {
  Today: [
    {
      id: "REQ1001",
      bundleName: "Monthly Essentials",
      beneficiary: "Daughter / Ada",
      message: "Mummy, please this is very important...😓",
      amount: 32500,
      priority: "Very urgent",
      timeSent: "Sent 1 hour ago",
      avatarUrl: "https://placehold.co/50x50/F39C12/ffffff?text=AD",
    },
  ],
  Tuesday: [
    {
      id: "REQ1002",
      bundleName: "Skincare Essentials",
      beneficiary: "Son / Chinonso",
      message: "Mummy, my skincare has finished... 😓",
      amount: 153000,
      priority: "Important",
      timeSent: "Sent 2 days ago",
      avatarUrl: "https://placehold.co/50x50/3498DB/ffffff?text=CS",
    },
    {
      id: "REQ1003",
      bundleName: "Rent & Others",
      beneficiary: "Friend / Cynthia",
      message: "Ngozi, I really need these... 😓",
      amount: 700000,
      priority: "Very urgent",
      timeSent: "Sent 2 days ago",
      avatarUrl: "https://placehold.co/50x50/E74C3C/ffffff?text=CY",
    },
  ],
};

const RequestCard = ({ request, onDetailsClick }) => {
  let priorityColor = "text-gray-600";
  if (request.priority.toLowerCase().includes("urgent")) {
    priorityColor = "text-red-500";
  } else if (request.priority === "Important") {
    priorityColor = "text-orange-500";
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 mb-4 transition-shadow hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-500">
          {request.bundleName}
        </h3>
        <p className="text-xs font-bold text-gray-500">{request.timeSent}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 items-start">
        <div className="col-span-1 flex items-start space-x-3">
          <img
            src={request.avatarUrl}
            alt={request.beneficiary}
            className="w-10 h-10 rounded-full shrink-0"
          />
          <div className="flex flex-col">
            <p className="text-gray-700 text-sm">Beneficiary</p>
            <p className="font-semibold text-gray-800 text-sm">
              {request.beneficiary}
            </p>

            <p className="text-sm font-bold text-gray-700 mt-1">{request.message}</p>

            <button
              onClick={() => onDetailsClick(request.id)}
              className="text-sm text-green-600 hover:text-green-700 mt-2 font-medium flex items-center w-max"
            >
              View details
            </button>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center pt-2">
          <p className="text-xs font-bold text-gray-500">Amount</p>
          <p className="font-extrabold text-[#401A6D]">
            {formatNaira(request.amount)}
          </p>
        </div>

        <div className="col-span-1 flex flex-col items-end justify-start pt-2">
          <p className="text-xs font-bold text-gray-500">Priority</p>
          <p className={`${priorityColor} font-semibold text-sm`}>
            {request.priority}
          </p>
        </div>
      </div>
    </div>
  );
};

const SponsorRequestsInboxPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (requestId) => {
    navigate(`/dashboard/sponsor/review/${requestId}`);
  };

  const handleBackClick = () => {
    navigate("/dashboard/sponsor-view");
  };

  const hasRequests = Object.values(MOCK_REQUESTS).flat().length > 0;

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full w-full">
      <button
        onClick={handleBackClick}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Requests</h1>

      {hasRequests ? (
        Object.entries(MOCK_REQUESTS).map(([day, requests]) => (
          <div key={day} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-700 pb-2">{day}</h2>
            <div className="space-y-6">
              {requests.map((request) => (
                <RequestCard
                  key={request.id}
                  request={request}
                  onDetailsClick={handleViewDetails}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="p-10 text-center text-gray-500 border border-dashed rounded-xl">
          <Clock className="w-8 h-8 mx-auto mb-3" />
          <p>No pending requests to review right now.</p>
        </div>
      )}
    </div>
  );
};

export default SponsorRequestsInboxPage;
