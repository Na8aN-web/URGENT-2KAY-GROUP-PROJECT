import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";

const MOCK_SPONSORS = [
  {
    id: "S001",
    name: "Mrs. Folashade",
    relationship: "Mother",
    imageUrl: "https://placehold.co/100x100/A050D0/ffffff?text=MF",
  },
];

const SponsorCard = ({ sponsor, selected, onSelect }) => (
  <div
    role="button"
    aria-pressed={selected}
    onClick={() => onSelect(sponsor.id)}
    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all border ${
      selected
        ? "border-[#401A6D] bg-purple-50 shadow-md"
        : "border-gray-200 bg-white hover:bg-gray-50"
    }`}
  >
    <img
      src={sponsor.imageUrl}
      alt={sponsor.name}
      className="w-12 h-12 rounded-full object-cover mr-4"
    />
    <div className="flex-1">
      <p className="font-bold text-lg text-gray-900">{sponsor.name}</p>
      <p className="text-sm text-gray-600">{sponsor.relationship}</p>
    </div>
    {selected && <Check className="w-5 h-5 text-green-600" />}
  </div>
);

const SponsorSelectionPage = () => {
  const navigate = useNavigate();
  const availableSponsors = MOCK_SPONSORS;
  const [selectedSponsor, setSelectedSponsor] = useState(
    availableSponsors[0]?.id || ""
  );

  const handleContinue = () => {
    const sponsor = availableSponsors.find((s) => s.id === selectedSponsor);
    if (sponsor) {
      navigate(`/dashboard/bundle-overview/${sponsor.id}`);
    } else {
      console.error("No sponsor selected.");
    }
  };

  const handleAddSponsor = () => navigate("/dashboard/add-sponsor");

  return (
    <div className="space-y-8 max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 min-h-full w-full">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-xl font-extrabold text-gray-900 mb-6">
        Who Would You Like To Send This Bundle To?
      </h1>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-500">Sponsor</h2>

        {availableSponsors.length > 0 ? (
          availableSponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.id}
              sponsor={sponsor}
              selected={selectedSponsor === sponsor.id}
              onSelect={setSelectedSponsor}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 p-4 border border-dashed rounded-lg">
            No sponsors found. Click below to add a new one.
          </p>
        )}
      </div>

      <div className="flex gap-4 pt-6">
        <button
          onClick={handleContinue}
          disabled={!selectedSponsor}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-xl disabled:opacity-50"
        >
          Continue
        </button>
        <button
          onClick={handleAddSponsor}
          className="flex items-center justify-center px-6 py-3 border-2 border-yellow-400 bg-white text-yellow-800 rounded-[58px] font-medium text-lg hover:bg-yellow-50 transition-colors shadow-md"
        >
          Add new sponsor
        </button>
      </div>
    </div>
  );
};

export default SponsorSelectionPage;
