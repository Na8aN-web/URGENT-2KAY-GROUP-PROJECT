import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import people from "../../assets/images/people_13831175.png";

const Relationship = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/dashboard/create-relationship");
  };

  return (
    <div className="p-6 lg:p-8 bg-[#ECE8F0]">
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-22">
        <img src={people} alt="people.png" className="h-56 w-56 md:h-56 md:w-56" />

        <span className="text-[#545050] text-base sm:text-lg font-bold pt-8">
          Oops!
        </span>
        <p className="pb-4 text-[#545050] text-base sm:text-lg font-bold text-center">
          It Seems Like you Haven't Created Any Relationship Yet
        </p>

        <Button btnTxt="Create a relationship" onClick={handleCreate} className="sm:px-16"/>
      </div>
    </div>
  );
};

export default Relationship;
