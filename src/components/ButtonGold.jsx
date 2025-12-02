import React from "react";
import { GoPlus } from "react-icons/go";

const ButtonGold = ({ btnTxt, onClick, type, className }) => {
  return (
    <div>
      <button
        className={`py-3 px-4 text-[#401C6D] w-fit rounded-full bg-white font-bold text-sm sm:text-base border-2 border-[#E8BF31] flex items-center justify-center gap-1 ${className}`}
        type={type}
        onClick={onClick}
      >
        <GoPlus className="text-[#401C6D]" />
        {btnTxt}
      </button>
    </div>
  );
};

export default ButtonGold;
