import React from "react";
import { IoChevronBack } from "react-icons/io5";
import Button from "../../components/Button";
import bill from "../../assets/images/bill_14510829.png";
import { useNavigate } from "react-router";


const ScheduleBill = () => {
    const navigate = useNavigate()

    const handleScheduleBill = () => {
        navigate("/dashboard/bill-details")
    }
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <div className="flex gap-1 items-center mb-6 md:mb-8">
        <IoChevronBack />
        <span className="text-xs font-medium text-[#6C6969]">back</span>
      </div>
      <h1 className="text-sm sm:text-base font-bold text-[#252323]">
        Scheduled Bills
      </h1>

      <div className="flex flex-col items-center justify-center pt-16 sm:pt-22">
        <img src={bill} alt="" className="w-28 h-28 sm:w-52 sm:h-52"/>

        <p className="pb-2 pt-4 text-[#545050] text-base sm:text-lg font-bold">
          Nothing scheduled yet.
        </p>
        <span className="text-[#535151] text-[11px] sm:text-sm font-normal">
          Schedule your bills now and let your sponsors know what's coming rent,
          tuition, or essentials.
        </span>
        <span className="text-[#535151] text-[11px] sm:text-sm font-normal pb-4">
          No surprises, no pressure-just smarter support.
        </span>

        <Button btnTxt="Schedule bill" onClick={handleScheduleBill} />
      </div>
    </div>
  );
};

export default ScheduleBill;
