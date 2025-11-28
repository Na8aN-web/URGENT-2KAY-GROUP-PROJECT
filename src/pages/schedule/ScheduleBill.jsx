import React from "react";
import { IoChevronBack } from "react-icons/io5";
import Button from "../../components/Button";
import bill from "../../assets/images/bill_14510829.png";
import { useNavigate } from "react-router";
import BackButton from "../../components/BackButton";


const ScheduleBill = () => {
  const navigate = useNavigate()

  const handleScheduleBill = () => {
    navigate("/dashboard/bill-details")
  }
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen flex flex-col">
      <BackButton />
      <h1 className="text-sm sm:text-base font-bold text-[#252323]">
        Scheduled Bills
      </h1>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <img src={bill} alt="" className="w-36 h-36 sm:w-52 sm:h-52" />

        <p className="pb-3 pt-4 text-[#545050] text-base sm:text-lg font-bold">
          Nothing scheduled yet.
        </p>
        <span className="text-[#535151] text-sm font-normal pb-1">
          Schedule your bills now and let your sponsors know what's coming rent,
          tuition, or essentials.
        </span>
        <span className="text-[#535151] text-sm font-normal pb-4">
          No surprises, no pressure-just smarter support.
        </span>

        <Button btnTxt="Schedule bill" onClick={handleScheduleBill} className="px-8 sm:px-16"/>
      </div>
    </div>
  );
};

export default ScheduleBill;
