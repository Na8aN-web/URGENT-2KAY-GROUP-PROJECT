import React from "react";

const AuthButton = ({ btnTxt, onClick, type }) => {
  return (
    <div>
      <button
        className="p-3 bg-[#401C6D] w-full rounded-full text-white font-bold"
        type={type}
        onClick={onClick}
      >
        {btnTxt}
      </button>
    </div>
  );
};

export default AuthButton;
