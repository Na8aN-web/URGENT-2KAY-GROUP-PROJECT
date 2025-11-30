import React from "react";
import { useNavigate } from "react-router-dom";
import TransactionSuccessful from "../../assets/images/transaction-successful.png";

const TransactionSuccessPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard/sponsor-view");
  };

  // mock data
  const transactionDetails = {
    requesterName: "Ada",
    mail: "ngozi@gmail.com",
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-white">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="h-64 flex items-center justify-center">
          <img
            src={TransactionSuccessful}
            alt="Transaction success illustration image"
            className="w-full h-full object-contain mx-auto"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-[#635E5E] flex items-center justify-center space-x-3">
          <span>Transaction Complete!</span>
        </h1>

        <p className=" text-[#434040] leading-relaxed">
          Your payment to {transactionDetails.requesterName} has been done
          successfully. Kindly check through with {transactionDetails.mail} to
          confirm.
        </p>

        <div className="pt-1">
          <button
            onClick={handleGoBack}
            className="w-full sm:w-64 px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-[#401A6D]/90 transition-colors shadow-xl"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccessPage;
