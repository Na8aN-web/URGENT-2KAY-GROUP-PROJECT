import React from "react";

const Button = ({ btnTxt, onClick, type, className }) => {
  return (
    <div>
      <button
        className={`px-6 md:px-8 py-3 bg-[#401C6D] w-fit min-w-[120px] rounded-full text-white font-bold hover:shadow-lg text-sm sm:text-base flex items-center justify-center ${className}`}
        type={type}
        onClick={onClick}
      >
        {btnTxt}
      </button>
    </div>
  );
};

export default Button;
