import React from "react";
import BackButton from "../../components/BackButton";
import avatar from "./img/avatar.png";
import { GrNext } from "react-icons/gr";

const InputF = ({
  inputLabel,
  inputSpan,
  value,
  onChange,
  readOnly = false,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="pb-1 text-sm text-[#525252] font-semibold">
        {inputLabel}
      </label>
      <input
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        type="text"
        className="relative border border-[#DBDDE0] w-full bg-white rounded-full px-4 py-4 text-base text-[#000000] max-w-[300px]"
      />
      <span className="text-xs text-[#525252] font-normal">{inputSpan}</span>
    </div>
  );
};

const SponsorProfile = () => {
  return (
    <section className="px-6 pt-6 pb-20 sm:p-8 md:px-10">
      <BackButton />
      <h1 className="text-xl font-bold text-[#331122] pt-8 pb-4 sm:text-left">
        Sponsor Profile
      </h1>

      <div>
        <h2 className="text-lg font-bold text-[#6D6969] py-4 sm:text-left">
          Sponsor
        </h2>

        <div className="flex items-center gap-4">
          <img src={avatar} alt="" className="h-[85px] w-[85px]" />
          <div>
            <p className="text-base font-bold">Mrs Kamasi</p>
            <span className="text-sm font-bold">Mother</span>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-18">
        <InputF inputLabel="Phone Number" value="+234 801 009 0001" />
        <InputF inputLabel="Email" value="Mamabearkam@Gmail.com" />
        <InputF inputLabel="Spending limit" value="N500,000.00"/>
        <InputF inputLabel="Spending frequency" value="Monthly"/>
      </div>
    </section>
  );
};

export default SponsorProfile;
