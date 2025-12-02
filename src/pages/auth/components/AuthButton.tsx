import React from "react";

const AuthButton = ({ btnTxt, onClick, type="button", disabled = false }) => {
  return (
    <div>
    <button
      className={`py-3 px-4 w-full rounded-full text-white font-bold text-sm ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#401C6D] hover:bg-[#301556]'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {btnTxt}
    </button>
    </div>
  );
};

export default AuthButton;
