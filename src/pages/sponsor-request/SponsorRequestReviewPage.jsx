import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConfirmationModal from "../../components/ConfirmationModal";

// mock data
const MOCK_REQUEST_DETAIL = {
  id: "REQ98765",
  bundleName: "Monthly Essentials",
  requester: "Ada/Daughter",
  requesterAvatar: "https://placehold.co/80x80/9932CC/ffffff?text=AD",
  bundleId: "98BA340",
  priority: "Very urgent",
  totalAmount: 32500,
  items: [
    {
      name: "Electricity",
      amount: 5000,
      provider: "Abuja Electricity Distribution Corporation",
    },
    { name: "Jumia order", amount: 20000, provider: "Jumia" },
    { name: "Airtime", amount: 3000, provider: "MTN Nigeria" },
    {
      name: "Fried rice and chicken",
      amount: 4500,
      provider: "Chicken Republic, 5th Avenue, Gwarinpa",
    },
  ],
};

const formatNaira = (amount) => {
  return `₦${amount.toLocaleString("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

const SponsorRequestReviewPage = () => {
  const navigate = useNavigate();
  const { requestId } = useParams();
  const [request, setRequest] = useState(MOCK_REQUEST_DETAIL);

  {/* modal states */}
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  {/* destructuring */} 
  const [name, relationship] = request.requester.split("/");

  const handleAcceptClick = () => {
    setShowAcceptModal(true);
  };

  const handleRejectClick = () => {
    setShowRejectModal(true);
  };

  {/* modal logic */}
  const onConfirmAccept = () => {
    setShowAcceptModal(false);
    navigate(`/dashboard/sponsor/fund/${requestId}`);
  };

  const onConfirmReject = () => {
    setShowRejectModal(false);
    {/* navigate back to the sponsor dashboard page */} 
    navigate("/dashboard/sponsor/inbox");
  };

  const onCancelModal = () => {
    {/* closes modal and stay on the review page for both qccept and reject */} 
    setShowAcceptModal(false);
    setShowRejectModal(false);
  };

  {/* back button */}
  const handleBackClick = () => {
    navigate("/dashboard/generate-request");
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full">
      <button
        onClick={handleBackClick}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Bundle Overview
      </h1>

      <div className="flex flex-col items-center justify-center space-y-4 mb-10">
        <img
          src={request.requesterAvatar}
          alt={request.requester}
          className="w-20 h-20 rounded-full object-cover shadow-lg"
        />

        <p className="text-lg font-semibold text-gray-800">
          {relationship} / {name}
        </p>

        <div className="flex items-center space-x-3 text-sm">
          <p className="text-sm text-gray-500 font-medium">
            Bundle ID: {request.bundleId}
          </p>

          <p className="text-red-500 font-semibold">
            Priority: {request.priority}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-xl font-extrabold text-gray-900 text-center mb-6">
          Monthly Essentials
        </h2>

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider pl-4">
                Item
              </th>
              <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Service Provider
              </th>
            </tr>
          </thead>
          <tbody>
            {request.items.map((item, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900 pl-4">
                  {item.name}
                </td>
                <td className="py-2 whitespace-nowrap text-sm font-bold text-[#401A6D]">
                  {formatNaira(item.amount)}
                </td>
                <td className="py-2 whitespace-nowrap text-sm text-gray-500">
                  {item.provider}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center pt-4 mt-8">
          <div className="w-full max-w-sm flex justify-between items-center pr-12">
            <span className="text-xl font-extrabold text-gray-900">Total:</span>
            <span className="text-3xl font-extrabold text-[#401A6D]">
              {formatNaira(request.totalAmount)}
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-10">
          <button
            onClick={handleAcceptClick}
            className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-xl"
          >
            Accept
          </button>
          <button
            onClick={handleRejectClick}
            className="px-8 py-3 border-2 border-[#E8BF31] text-[#401A6D] bg-white rounded-[58px] font-medium text-lg hover:bg-[#E8BF31]/90 transition-colors shadow-md"
          >
            Reject
          </button>
        </div>
      </div>

      {/* confirmation modal rendering */}
      <ConfirmationModal
        isOpen={showAcceptModal}
        message="Are you sure you want to accept this request?"
        onConfirm={onConfirmAccept}
        onCancel={onCancelModal}
        confirmText="Yes"
        cancelText="No"
      />

      <ConfirmationModal
        isOpen={showRejectModal}
        message="Are you sure you want to reject this request?"
        onConfirm={onConfirmReject}
        onCancel={onCancelModal}
        confirmText="Yes"
        cancelText="No"
      />
    </div>
  );
};

export default SponsorRequestReviewPage;
