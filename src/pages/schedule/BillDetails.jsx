import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { RxAvatar } from "react-icons/rx";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import BackButton from "../../components/BackButton";
import { useRelationships } from "../../contexts/RelationshipContexts";

const BillDetails = () => {
  const navigate = useNavigate();
  const { relationships } = useRelationships();

  const [errors, setErrors] = useState({});
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const [billData, setBillData] = useState({
    billType: "",
    serviceProvider: "",
    frequency: "",
    amount: "",
    accountNumber: "",
    timeOfDay: "",
    scheduledDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!billData.billType.trim()) {
      newErrors.billType = "Bill type is required";
    }

    if (!billData.serviceProvider.trim()) {
      newErrors.serviceProvider = "Service provider is required";
    }

    if (!billData.frequency.trim()) {
      newErrors.frequency = "Frequency is required";
    }

    if (!billData.amount.trim()) {
      newErrors.amount = "Amount is required";
    }

    if (!billData.accountNumber.trim()) {
      newErrors.accountNumber = "Account number is required";
    }

    if (!billData.timeOfDay.trim()) {
      newErrors.timeOfDay = "Time of day is required";
    }

    if (!billData.scheduledDate.trim()) {
      newErrors.scheduledDate = "Scheduled date is required";
    }

    if (!selectedSponsor) {
      newErrors.sponsor = "Please select a sponsor";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSelectSponsor = (sponsor) => {
    setSelectedSponsor(sponsor);
    setErrors((prev) => ({ ...prev, sponsor: "" }));
  };

  const handleProceed = () => {
    if (validateForm()) {
      // Save bill data temporarily to pass to confirm page
      const billToSave = {
        ...billData,
        sponsorId: selectedSponsor.id,
        sponsorName: selectedSponsor.fullName,
        sponsorRelationship: selectedSponsor.relationshipType,
      };

      // Save to localStorage temporarily for the confirm page
      localStorage.setItem("temp_bill_data", JSON.stringify(billToSave));

      navigate("/dashboard/confirm-details");
    }
  };

  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <BackButton />

      <h1 className="text-base md:text-lg font-bold text-[#252323] pb-8">
        Bill Details
      </h1>

      {/* Bill inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-20 md:gap-y-6 lg:w-[80%] xl:w-[60%]">
        <InputField
          inputLabel="Bill Type"
          inputSpan="E.g Rent, Tuition, Electricity"
          placeholder="Enter bill type"
          name="billType"
          value={billData.billType}
          onChange={handleChange}
          error={errors.billType}
        />

        <InputField
          inputLabel="Service Provider"
          placeholder="E.g PHCN, School name"
          name="serviceProvider"
          value={billData.serviceProvider}
          onChange={handleChange}
          error={errors.serviceProvider}
        />

        <InputField
          inputLabel="Frequency"
          placeholder="Monthly, Weekly, One-time"
          name="frequency"
          value={billData.frequency}
          onChange={handleChange}
          error={errors.frequency}
        />

        <InputField
          inputLabel="Amount"
          placeholder="₦50,000"
          name="amount"
          value={billData.amount}
          onChange={handleChange}
          error={errors.amount}
        />

        <InputField
          inputLabel="Account Number/Biller ID"
          placeholder="Enter account number"
          name="accountNumber"
          value={billData.accountNumber}
          onChange={handleChange}
          error={errors.accountNumber}
        />

        <InputField
          inputLabel="Scheduled Date"
          type="date"
          name="scheduledDate"
          value={billData.scheduledDate}
          onChange={handleChange}
          error={errors.scheduledDate}
        />

        <InputField
          inputLabel="What time of day should this be sent?"
          placeholder="Morning, Afternoon, Evening"
          name="timeOfDay"
          value={billData.timeOfDay}
          onChange={handleChange}
          error={errors.timeOfDay}
        />
      </div>

      {/* Choose sponsor */}
      <div className="pt-12 sm:pt-16">
        <h2 className="text-base text-[#252323] font-bold pb-4">
          Choose Sponsor
        </h2>

        {errors.sponsor && (
          <p className="text-red-500 text-sm mb-4">{errors.sponsor}</p>
        )}

        {relationships.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              You haven't added any sponsors yet.
            </p>
            <button
              onClick={() => navigate("/dashboard/create-relationship")}
              className="text-[#401C6D] font-bold text-sm mt-2 underline"
            >
              Add a sponsor first →
            </button>
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {relationships.map((sponsor) => (
              <div
                key={sponsor.id}
                className={`flex gap-2 sm:gap-3 items-center px-2 py-4 rounded-lg border-2 transition-all ${
                  selectedSponsor?.id === sponsor.id
                    ? "border-[#401C6D] bg-purple-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <RxAvatar className="w-[45px] h-[45px] md:w-[65px] md:h-[65px] text-[#70588e]" />
                <div className="flex-1">
                  <p className="text-sm font-bold">
                    <span className="text-gray-500">
                      {sponsor.relationshipType}
                    </span>
                    / {sponsor.fullName}
                  </p>
                  <p className="text-xs text-gray-500">{sponsor.email}</p>
                </div>

                <Button
                  btnTxt={
                    selectedSponsor?.id === sponsor.id ? "Selected" : "Choose"
                  }
                  onClick={() => handleSelectSponsor(sponsor)}
                  className={
                    selectedSponsor?.id === sponsor.id
                      ? "bg-[#401C6D]"
                      : "bg-gray-400"
                  }
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <ButtonGold
            btnTxt="Add new Sponsor"
            onClick={() => navigate("/dashboard/create-relationship")}
          />

          {relationships.length > 0 && (
            <Button btnTxt="Proceed to Review" onClick={handleProceed} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
