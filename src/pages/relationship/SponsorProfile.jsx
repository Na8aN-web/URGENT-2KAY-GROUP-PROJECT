import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { RxAvatar } from "react-icons/rx";
import { useRelationships } from "../../contexts/RelationshipContexts";

const InputF = ({ inputLabel, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="pb-1 text-sm text-[#525252] font-semibold">
        {inputLabel}
      </label>
      <input
        value={value}
        readOnly
        type="text"
        className="relative border border-[#DBDDE0] w-full bg-gray-50 rounded-full px-4 py-4 text-base text-[#000000] max-w-[300px]"
      />
    </div>
  );
};

const SponsorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRelationshipById } = useRelationships();

  const sponsor = getRelationshipById(id);

  // If sponsor not found, redirect back
  if (!sponsor) {
    return (
      <section className="px-6 pt-6 pb-20 sm:p-8 md:px-10">
        <BackButton />
        <div className="text-center py-12">
          <h2 className="text-xl font-bold text-gray-600 mb-4">
            Sponsor not found
          </h2>
          <button
            onClick={() => navigate("/dashboard/my-relationships")}
            className="bg-[#401C6D] text-white px-6 py-2 rounded-full"
          >
            Go Back to Relationships
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-6 pb-20 sm:p-8 md:px-10">
      <BackButton />
      <h1 className="text-2xl font-bold text-[#331122] pt-2 pb-4 sm:text-left">
        Sponsor Profile
      </h1>

      <div>
        <h2 className="text-lg font-bold text-[#6D6969] py-4 sm:text-left">
          Sponsor
        </h2>

        <div className="flex items-center gap-4">
          <RxAvatar className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] text-[#70588e]" />
          <div>
            <p className="text-base font-bold">{sponsor.fullName}</p>
            <span className="text-sm font-bold">
              {sponsor.relationshipType}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-18">
        <InputF inputLabel="Phone Number" value={sponsor.phoneNumber} />
        <InputF inputLabel="Email" value={sponsor.email} />
        <InputF inputLabel="Spending limit" value={sponsor.spendingLimit} />
        <InputF inputLabel="Spending frequency" value={sponsor.frequency} />
      </div>
    </section>
  );
};

export default SponsorProfile;
