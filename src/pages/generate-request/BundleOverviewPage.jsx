import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MOCK_SPONSORS = [
  {
    id: "S001",
    name: "Mrs. Folashade",
    relationship: "Mother",
    imageUrl: "https://placehold.co/100x100/A050D0/ffffff?text=MF",
  },
];

const MOCK_BUNDLE_DATA = {
  id: "98BA340",
  initialName: "Monthly Essentials",
  items: [
    { name: "Electricity", amount: 5000 },
    { name: "Jumia Order", amount: 20000 },
    { name: "Airtime", amount: 3000 },
    { name: "Lunch", amount: 4500 },
  ],
  total: 32500,
};

const StyledButton = ({ onClick, children, primary = true }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 rounded-[58px] font-medium text-base transition-colors shadow-md ${
      primary
        ? "border-2 border-[#E8BF31] text-[#401A6D] bg-white hover:bg-yellow-50"
        : "bg-[#401A6D] text-white hover:bg-[#401A6D]/90"
    }`}
  >
    {children}
  </button>
);

const BundleOverviewPage = () => {
  const navigate = useNavigate();
  const { sponsorId } = useParams();

  const bundleName = MOCK_BUNDLE_DATA.initialName;

  const sponsor =
    MOCK_SPONSORS.find((s) => s.id === sponsorId) || MOCK_SPONSORS[0];

  const pageTitle = `${sponsor.name} (${sponsor.relationship})`;

  const handleSendToSponsor = () => {
    console.log(`Final bundle request sent to ${sponsor.name}.`);
    navigate("/dashboard/request-sent-final");
  };

  const handleEditRequest = () => {
    navigate("/dashboard/services");
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full w-full">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <h1 className="text-lg text-gray-500 font-bold mb-6 border-b pb-4 max-w-4xl">
        Bundle Overview / <span className="text-gray-900">{pageTitle}</span>
      </h1>

      <div className="space-y-6 max-w-4xl">
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-gray-500">Sponsor</h2>
          <div className="flex items-center">
            <img
              src={sponsor.imageUrl}
              alt={sponsor.name}
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900">{sponsor.name}</p>
              <p className="text-sm text-gray-600">{sponsor.relationship}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
            Bundle ID:{" "}
            <span className="text-gray-500 font-semibold text-base">
              {MOCK_BUNDLE_DATA.id}
            </span>
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {bundleName}
          </h3>

          <div className="space-y-3">
            {MOCK_BUNDLE_DATA.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-gray-700 text-sm"
              >
                <span>{item.name}</span>
                <span className="font-medium">
                  ₦{item.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <span className="text-lg font-bold text-gray-900">Amount</span>
            <span className="text-2xl font-extrabold text-[#401A6D]">
              ₦{MOCK_BUNDLE_DATA.total.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <input
              type="text"
              placeholder="Add a note"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:ring-[#401A6D] focus:border-[#401A6D]">
              <option value="" disabled>
                Select Priority
              </option>
              <option value="high">High Priority (Urgent)</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>

          <div className="flex gap-4 pt-4">
            <StyledButton onClick={handleSendToSponsor} primary>
              Send to Sponsor
            </StyledButton>
            <StyledButton onClick={handleEditRequest} primary={false}>
              Edit Request
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleOverviewPage;