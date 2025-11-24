import { useState } from "react";
import { X } from "lucide-react";

const RequestDetailsModal = ({ isOpen, onClose, billData, onSubmit }) => {
  const [bundleName, setBundleName] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [sponsorPhone, setSponsorPhone] = useState("");
  const [relationshipType, setRelationshipType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      bill: billData,
      bundleName,
      sponsor: {
        name: sponsorName,
        email: sponsorEmail,
        phone: sponsorPhone,
        relationshipType,
      },
    });

    setBundleName("");
    setSponsorName("");
    setSponsorEmail("");
    setSponsorPhone("");
    setRelationshipType("");
    onClose();
  };

  const isFormValid =
    bundleName && sponsorName && sponsorEmail && relationshipType;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-2xl max-w-2xl w-full">
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xl font-bold text-gray-800 mb-2">
              Bundle Name
            </label>
            <input
              type="text"
              placeholder="Bundle name"
              value={bundleName}
              onChange={(e) => setBundleName(e.target.value)}
              className="w-full p-3 border-b border-gray-300 bg-transparent text-lg focus:border-[#401A6D] focus:outline-none"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 pt-2">
              Sponsor's Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Sponsor's name"
                value={sponsorName}
                onChange={(e) => setSponsorName(e.target.value)}
                className="w-full p-3 border-b border-gray-300 bg-transparent text-lg focus:border-[#401A6D] focus:outline-none"
                required
              />

              <input
                type="email"
                placeholder="Sponsor's Email"
                value={sponsorEmail}
                onChange={(e) => setSponsorEmail(e.target.value)}
                className="w-full p-3 border-b border-gray-300 bg-transparent text-lg focus:border-[#401A6D] focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <input
                type="tel"
                placeholder="Sponsor's Phone number"
                value={sponsorPhone}
                onChange={(e) => setSponsorPhone(e.target.value)}
                className="w-full p-3 border-b border-gray-300 bg-transparent text-lg focus:border-[#401A6D] focus:outline-none"
              />

              <select
                value={relationshipType}
                onChange={(e) => setRelationshipType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg cursor-pointer focus:ring-[#401A6D] focus:border-[#401A6D]"
                required
              >
                <option value="" disabled>
                  Select Relationship Type
                </option>
                <option value="Family Member">Family Member</option>
                <option value="Close Friend">Close Friend</option>
                <option value="Acquaintance">Acquaintance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={!isFormValid}
              className="px-8 py-3 bg-[#401A6D] text-white rounded-lg font-bold text-lg hover:bg-purple-800 shadow-xl disabled:opacity-50"
            >
              Create Request Bundle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDetailsModal;