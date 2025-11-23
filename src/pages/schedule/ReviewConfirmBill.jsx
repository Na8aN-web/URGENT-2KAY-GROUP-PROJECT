import React, { useState } from "react";
import avatar from "./images/avatar.png";
import InputField from "./components/InputField";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router";

const ScheduleSuccess = ({ onClose }) => {
  const navigate = useNavigate()
  return (
    <div className="relative w-full max-w-[600px] bg-white py-10 px-4 md:py-20 md:px-8 rounded-lg">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 text-xl font-bold"
      >
        ✕
      </button>

      <div className="text-center flex flex-col justify-center items-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-auto max-h-[250px] sm:max-h-[350px] pb-8"
        >
          <circle cx="100" cy="60" r="40" fill="#F3E8D2" opacity="0.3" />
          <ellipse cx="100" cy="180" rx="60" ry="10" fill="#E5E5E5" />

          <ellipse cx="100" cy="50" rx="12" ry="15" fill="#333" />
          <rect x="88" y="65" width="24" height="35" rx="2" fill="#666" />
          <rect x="88" y="100" width="10" height="30" rx="2" fill="#666" />
          <rect x="102" y="100" width="10" height="30" rx="2" fill="#666" />

          <path
            d="M 75 70 Q 75 60 85 60 L 85 50 Q 85 45 90 45 L 110 45 Q 115 45 115 50 L 115 60 Q 125 60 125 70 L 125 110 Q 125 120 115 120 L 85 120 Q 75 120 75 110 Z"
            fill="#F4C430"
          />
          <rect x="90" y="75" width="20" height="30" rx="3" fill="#E5B02E" />
          <circle cx="95" cy="90" r="3" fill="#666" />
        </svg>

        <p className="text-base font-semibold text-[#000000]">
          Your bill has been scheduled successfully
        </p>
        <p className="text-xs text-[#686363] font-normal">
          We'll remind you before it's sent
        </p>

        <div className="space-y-4 pt-6">
          <Button btnTxt="View Scheduled Bill" onClick={() => navigate("/dashboard/schedule-bills")}/>
          <ButtonGold btnTxt="Share with Sponsor" />
        </div>
      </div>
    </div>
  );
};

const ReviewConfirmBill = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <div className="flex gap-1 items-center mb-6 md:mb-8">
        <IoChevronBack />
        <span className="text-xs font-medium text-[#6C6969]">back</span>
      </div>
      <h1 className="text-sm sm:text-base font-bold text-[#252323] pb-8">
        Review and Confirm
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-20 md:gap-y-8 lg:w-[80%] xl:w-[60%]">
        <InputField inputLabel="Bill Type" />

        <InputField inputLabel="Service Provider" />

        <InputField inputLabel="Frequency" />

        <InputField inputLabel="Amount" />

        <InputField inputLabel="Account Number/Biller ID" />

        <InputField inputLabel="What time of day should this be sent?" />
      </div>

      {/* Choose a sponsor */}
      <div className="pt-12 sm:pt-16">
        <h2 className="text-base text-[#252323] font-bold pb-8">Sponsor</h2>
        <div className="flex gap-6 sm:gap-12 items-center w-full pb-12 sm:pb-16">
          <img src={avatar} alt="" className="w-[67px] h-[67px]" />
          <p className="text-sm text-[#201F1F] font-bold">
            <span className="text-[#7e7a7a]">Mother</span>/Ngozi
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button
            btnTxt="Schedule Bill"
            className="w-full"
            onClick={() => setShowSuccessModal(true)}
          />
          <ButtonGold btnTxt="Edit" className="w-full" />
          <ButtonGold btnTxt="Cancel" className="w-full" />
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 w-full px-6">
          <ScheduleSuccess onClose={() => setShowSuccessModal(false)} />
        </div>
      )}
    </div>
  );
};

export default ReviewConfirmBill;
