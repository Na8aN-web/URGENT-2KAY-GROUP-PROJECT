import React from "react";

const AuthButton = ({ btnTxt, onClick, type }) => {
  return (
    <div>
      <button
        className="py-3 px-4 bg-[#401C6D] w-full rounded-full text-white font-bold text-sm"
        type={type}
        onClick={onClick}
      >
        {btnTxt}
      </button>
    </div>
  );
};

export default AuthButton;
