import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import InputField from "../../components/InputField";
import ScheduleSuccess from "./ScheduleSuccess";
import BackButton from "../../components/BackButton";
import { useBills } from "../../contexts/BillsContext";

const ReviewConfirmBill = () => {
  const navigate = useNavigate();
  const { addBill } = useBills();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [billData, setBillData] = useState(null);

  useEffect(() => {
    // Load the temporary bill data from localStorage
    const tempData = localStorage.getItem("temp_bill_data");
    if (tempData) {
      setBillData(JSON.parse(tempData));
    } else {
      // If no data, redirect back to bill details
      navigate("/dashboard/bill-details");
    }
  }, [navigate]);

  const handleScheduleBill = () => {
    if (billData) {
      // Add bill to context/localStorage
      addBill(billData);

      // Clear temporary data
      localStorage.removeItem("temp_bill_data");

      // Show success modal
      setShowSuccessModal(true);
    }
  };

  const handleEdit = () => {
    navigate("/dashboard/bill-details");
  };

  const handleCancel = () => {
    localStorage.removeItem("temp_bill_data");
    navigate("/dashboard/scheduled-bill");
  };

  if (!billData) {
    return (
      <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <BackButton />
      <h1 className="text-base md:text-lg font-bold text-[#252323] pb-8">
        Review and Confirm
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-20 md:gap-y-8 lg:w-[80%] xl:w-[60%]">
        <InputField inputLabel="Bill Type" value={billData.billType} readOnly />

        <InputField
          inputLabel="Service Provider"
          value={billData.serviceProvider}
          readOnly
        />

        <InputField
          inputLabel="Frequency"
          value={billData.frequency}
          readOnly
        />

        <InputField inputLabel="Amount" value={billData.amount} readOnly />

        <InputField
          inputLabel="Account Number/Biller ID"
          value={billData.accountNumber}
          readOnly
        />

        <InputField
          inputLabel="Scheduled Date"
          value={new Date(billData.scheduledDate).toLocaleDateString()}
          readOnly
        />

        <InputField
          inputLabel="What time of day should this be sent?"
          value={billData.timeOfDay}
          readOnly
        />
      </div>

      {/* Sponsor info */}
      <div className="pt-12 sm:pt-16">
        <h2 className="text-base text-[#252323] font-bold pb-8">Sponsor</h2>
        <div className="flex gap-3 items-center w-full pb-12 sm:pb-16">
          <RxAvatar className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] text-[#70588e]" />
          <p className="text-sm text-[#201F1F] font-bold">
            <span className="text-[#7e7a7a]">
              {billData.sponsorRelationship}
            </span>{" "}
            / {billData.sponsorName}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button
            btnTxt="Schedule Bill"
            className="w-full"
            onClick={handleScheduleBill}
          />
          <ButtonGold btnTxt="Edit" className="w-full" onClick={handleEdit} />
          <ButtonGold
            btnTxt="Cancel"
            className="w-full"
            onClick={handleCancel}
          />
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 w-full px-6">
          <ScheduleSuccess
            onClose={() => {
              setShowSuccessModal(false);
              navigate("/dashboard/scheduled-bills");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewConfirmBill;
