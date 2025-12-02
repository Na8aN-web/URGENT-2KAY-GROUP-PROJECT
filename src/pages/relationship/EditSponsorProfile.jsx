import React from "react";
import { IoChevronBack } from "react-icons/io5";
import InputField from "../../components/InputField";
import avatar from "./img/avatar.png";
import Button from "../../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import BackButton from "../../components/BackButton";

const EditSponsorProfile = () => {
  return (
    <>
      <div className="p-4 md:p-6">
        <BackButton />
      </div>
      <section className="px-8 py-2 lg:py-8 sm:px-28 lg:px-18 lg:max-w-5xl lg:mx-auto">
        <h2 className="text-center text-xl font-bold text-[#331122] pb-6 md:text-[28px] md:text-start">
          Edit Sponsor Profile
        </h2>
        <form>
          <div className="flex flex-col justify-center items-center pb-16">
            <img
              src={avatar}
              alt=""
              className="w-[75px] h-[75px] md:w-[107px] md:h-[107px]"
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
            <Button btnTxt="Save Changes" type="button" />
          </div>
        </form>
      </section>
    </>
  );
};

export default EditSponsorProfile;
