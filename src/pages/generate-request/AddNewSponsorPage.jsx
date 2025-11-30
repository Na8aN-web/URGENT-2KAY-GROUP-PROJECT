import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RELATIONSHIP_OPTIONS = [
  "Mother",
  "Father",
  "Brother",
  "Sister",
  "Friend",
  "Acquaintance",
  "Other",
];

const DashedInput = ({
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full p-3 bg-transparent text-lg focus:outline-none border-b-2 border-gray-300"
    required={required}
  />
);

const AddNewSponsorPage = () => {
  const navigate = useNavigate();

  const [sponsorName, setSponsorName] = useState("");
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [sponsorPhone, setSponsorPhone] = useState("");
  const [relationshipType, setRelationshipType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sponsorName || !sponsorEmail || !relationshipType) return;

    console.log("New Sponsor Added:", {
      name: sponsorName,
      email: sponsorEmail,
      phone: sponsorPhone,
      relationship: relationshipType,
    });

    navigate("/dashboard/sponsor-select");
  };

  const isFormValid = sponsorName && sponsorEmail && relationshipType;

  return (
    <div className="space-y-8 max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 w-full">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-2xl font-extrabold text-gray-900">Add New Sponsor</h1>
      <p className="text-sm text-gray-500">
        Register a new contact to send future bundle requests.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">Sponsor's Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashedInput
              placeholder="Sponsor's Name"
              value={sponsorName}
              onChange={(e) => setSponsorName(e.target.value)}
              required
            />
            <DashedInput
              type="email"
              placeholder="Sponsor's Email"
              value={sponsorEmail}
              onChange={(e) => setSponsorEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashedInput
              type="tel"
              placeholder="Sponsor's Phone Number"
              value={sponsorPhone}
              onChange={(e) => setSponsorPhone(e.target.value)}
            />

            <select
              value={relationshipType}
              onChange={(e) => setRelationshipType(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg cursor-pointer focus:ring-[#401A6D] focus:border-[#401A6D]"
              required
            >
              <option value="" disabled>
                Select Relationship Type
              </option>
              {RELATIONSHIP_OPTIONS.map((rel) => (
                <option key={rel} value={rel}>
                  {rel}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className="px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-base hover:bg-purple-800 transition-colors shadow-xl disabled:opacity-50"
          >
            Add Sponsor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewSponsorPage;