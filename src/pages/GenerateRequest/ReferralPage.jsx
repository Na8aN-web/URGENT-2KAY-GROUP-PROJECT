import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Share2, Zap, Award, ArrowLeft } from "lucide-react";

const ReferralStep = ({ icon: Icon, title, reward }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-20 h-20 mb-3 bg-purple-50 rounded-full flex items-center justify-center border-2 border-purple-200">
      <Icon className="w-8 h-8 text-[#401A6D]" />
    </div>
    <p className="text-xs font-semibold text-gray-800 mb-1">{title}</p>
    {reward && (
      <span className="text-sm font-medium bg-[#401A6D] text-white px-8 py-2 rounded-lg mt-2 flex items-center justify-center">
        {reward}
      </span>
    )}
  </div>
);

const ReferralPage = () => {
  const navigate = useNavigate();
  const referralCode = "9056223413272";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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

      <div className="p-6 rounded-xl shadow-lg border bg-[#F9F9F9]">
        <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-4">
          Invite Friends To Urgent2k To Earn Rewards
        </h1>

        <div className="bg-[#F8F1F1] p-3 rounded-lg text-center mb-6 border border-gray-200 mx-auto max-w-lg">
          <p className="text-sm text-gray-700">
            Invite friends who have not used Urgent2k or have been inactive for
            over 100 days to join, and earn rewards!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-100 pb-2 mb-2">
          <ReferralStep
            icon={Share2}
            title="Share Invitation Link/Code with friends"
          />
          <ReferralStep
            icon={Zap}
            title="Friend either creates or sponsors a bill"
            reward="Earn ₦1,000"
          />
          <ReferralStep icon={Award} title="Receive rewards in your wallet" />
        </div>

        <div className="flex flex-col items-center pt-2">
          <label className="text-sm font-semibold text-gray-700 mb-3">
            Share Invitation Code
          </label>
          <div className="inline-flex items-center space-x-3">
            <input
              type="text"
              value={referralCode}
              readOnly
              className="p-3 border border-yellow-400 bg-yellow-50 rounded-[58px] text-sm font-mono text-center text-gray-800 focus:outline-none"
              style={{ width: "180px" }}
            />
            <button
              onClick={handleCopy}
              className={`px-6 py-3 rounded-[58px] font-medium text-sm transition-colors shadow-md ${
                isCopied
                  ? "bg-green-600 text-white"
                  : "bg-[#401A6D] text-white hover:bg-purple-800"
              }`}
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          {isCopied && (
            <p className="text-green-600 text-xs mt-2">
              Code copied successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;