import React from "react";
import { IoChevronBack } from "react-icons/io5";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import BackButton from "../../components/BackButton";

const ScheduledBills = () => {

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <BackButton />
      <h1 className="text-sm sm:text-base font-bold text-[#252323] pb-8">
        Scheduled Bills
      </h1>

      <div className="bg-[#fafafa] px-4 py-4 rounded-md min-h-[70vh]">
        <h2 className="text-sm font-medium text-gray-700">Today</h2>

        {/* Middle: Bill detail */}
        <div className="flex flex-col text-sm text-gray-700 space-y-1 bg-[#ffffff] p-3 my-8 rounded-sm sm:w-fit">
          <p>
            Bill Type: <span className="font-semibold">Rent</span>
          </p>
          <p>
            Sponsor: <span className="font-semibold">Mummy</span>
          </p>
          <p>
            Amount: <span className="font-semibold">₦500,000</span>
          </p>
          <p>
            Scheduled Date:
            <span className="font-semibold">21st May, 2026</span>
          </p>
          <p>
            Time: <span className="font-semibold">9:00am</span>
          </p>
          <p>
            Status:
            <span className="font-semibold text-yellow-600">Pending</span>
          </p>
        </div>

        {/*  Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <ButtonGold btnTxt="Cancel" className="w-full" />
          <ButtonGold btnTxt="Edit" className="w-full" />
          <Button btnTxt="Send now" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ScheduledBills;
