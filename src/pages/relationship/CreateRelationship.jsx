import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import InputField from "../../components/InputField";
import avatar from "./img/avatar.png";
import business from "../../assets/images/business_14040022 2.png";
import RelationshipModal from "./components/RelationshipModal";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const CreateRelationship = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleView = () => {
    setShowModal(false)
    navigate("/dashboard/my-relationships");
  };

  return (
    <>
      <section className="px-8 py-2 lg:py-8 sm:px-28 lg:px-18 lg:pt-20 lg:max-w-5xl lg:mx-auto">
        <h2 className="text-2xl font-bold text-[#401A6D] pb-12 text-center md:text-start">
          Create a Relationship
        </h2>
        {/* Create relationship */}
        <form>
          <div className="flex flex-col justify-center items-center pb-16">
            <img
              src={avatar}
              alt=""
              className="w-[65px] h-[65px] md:w-[107px] md:h-[107px]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-30 gap-y-6 xl:gap-x-60 pb-16 sm:pb-12">
            <InputField
              inputLabel="Sponsor's Full Name"
              placeholder="Mrs. Kamisi"
            />
            <InputField
              inputLabel="Sponsor's Phone Number"
              placeholder="0801 901 0001"
            />
            <InputField
              inputLabel="Email Address"
              placeholder="Mamakeam@gmail.com"
            />
            <InputField
              inputLabel="Relationship Type"
              placeholder="Mother"
              inputSpan="E.g Father, Mother, Sister, Brother, Friend."
            />
            <InputField
              inputLabel="Spending Limit"
              placeholder="N500,000"
              inputSpan="E.g N5,000, N50,000, N500,000, N5,000,000"
            />
            <InputField
              inputLabel="Frequency"
              inputSpan="E.g Monthly, Weekly, Daily"
            />
          </div>
          <div className="flex justify-center items-center sm:pt-8">
            <Button
              btnTxt="Save Changes"
              type="button"
              onClick={() => setShowModal(true)}
            />
          </div>
        </form>
      </section>

      {/* show success modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            onClick={handleView}
            title="Relationship Added Successfully!"
            message="Now, invite your sponsor to connect and approve bill requests easily"
            btnTxt="View Relationship"
            img={business}
          />
        </div>
      )}
    </>
  );
};

export default CreateRelationship;
