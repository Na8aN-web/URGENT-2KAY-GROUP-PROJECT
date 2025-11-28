import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(-1)}
      className="flex items-center gap-1 cursor-pointer pb-4"
    >
      <IoIosArrowBack className="w-5 h-5" />
      <span className="text-base">Back</span>
    </div>
  );
};

export default BackButton;