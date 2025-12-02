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
    <div className="p-6 lg:p-8 bg-[#ECE8F0] min-h-screen flex flex-col items-center justify-center text-center">
      <img
        src={people}
        alt="people.png"
        className="h-56 w-56 md:h-56 md:w-56"
      />

      <span className="text-[#545050] text-base sm:text-lg font-bold pt-8 pb-1">
        Oops!
      </span>
      <p className="pb-4 text-[#545050] text-base sm:text-lg font-normal">
        It Seems Like you Haven't Created Any Relationship Yet
      </p>

      <Button
        btnTxt="Create a relationship"
        onClick={handleCreate}
        className="px-8 sm:px-16 md:px-20"
      />
    </div>
  );
};

export default Relationship;
