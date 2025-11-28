import React from "react";
import Button from "../../../components/Button";
import ButtonGold from "../../../components/ButtonGold";

const RelationshipModal = ({ onClick, title, message, btnTxt, img }) => {
  return (
    <div className="relative w-full max-w-[550px] bg-white py-10 px-4 md:py-20 md:px-8 rounded-lg">
      <div className="text-center flex flex-col justify-center items-center">
       <img src={img} alt="" className="h-22 w-22 md:h-68 md:w-68" />

        <p className="text-base sm:text-xl font-semibold text-[#000000] pt-6">
        {title}
        </p>
        <p className="text-sm sm:text-base text-[#686363] font-normal pt-2 pb-5">
        {message}
        </p>

        <Button btnTxt={btnTxt} onClick={onClick} type="button"/>
      </div>
    </div>
  );
};

export default RelationshipModal;
