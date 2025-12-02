import React, { useState } from "react";
import avatar from "./images/avatar.png";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import InputField from "../../components/InputField";
import ScheduleSuccess from "./ScheduleSuccess";
import BackButton from "../../components/BackButton";

const ReviewConfirmBill = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <BackButton />
      <h1 className="text-base md:text-lg font-bold text-[#252323] pb-8">
        Review and Confirm
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-20 md:gap-y-8 lg:w-[80%] xl:w-[60%]">
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
