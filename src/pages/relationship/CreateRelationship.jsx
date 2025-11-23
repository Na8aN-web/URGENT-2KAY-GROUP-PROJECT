import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import InputField from "../../components/InputField";
import avatar from "./avatar.png";
import ButtonGold from "../../components/ButtonGold";
import RelationshipModal from "./components/RelationshipModal";
import Button from "../../components/Button";

const CreateRelationship = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="px-8 py-2 lg:py-8 sm:px-28 lg:px-18 lg:pt-20 lg:w-5xl lg:mx-auto">
        <h2 className="text-2xl font-bold text-[#401A6D] pb-12">
          Business Details
        </h2>
        <form>
          <div className="flex flex-col justify-center items-center pb-16">
            <img src={avatar} alt="" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-30 gap-y-10 lg:gap-x-60 pb-16 sm:pb-12">
            <InputField inputLabel="Business Label" className="mb-4 sm:mb-0" />
            <InputField
              inputLabel="Type of Business"
              inputSpan="e.g utilities, school, hospital, housing"
            />
            <InputField
              inputLabel="Business Registration Number"
              className="mb-4 sm:mb-0"
            />
            <InputField inputLabel="Business Email Address" />
            <InputField inputLabel="Business Address" />
            <InputField inputLabel="Business Phone Number" />
          </div>
          <div className="flex justify-center items-center sm:pt-8">
            <Button btnTxt="Save Sponsor" onClick={() => setShowModal(true)} />
          </div>
        </form>
      </section>

         {showModal && (
         <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal onClose={() => setShowModal(false)}/>
        </div>
        )}
    </>
  );
};

export default CreateRelationship;
