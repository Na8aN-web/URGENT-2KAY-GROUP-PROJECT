import React from "react";

const Button = ({ btnTxt, onClick, type, className }) => {
  return (
    <div>
      <button
        className={`py-3 px-4 bg-[#401C6D] w-fit min-w-[120px] rounded-full text-white font-bold text-sm flex items-center justify-center ${className}`}
        type={type}
        onClick={onClick}
      >
        {btnTxt}
      </button>
    </div>
  );
};

export default Button;