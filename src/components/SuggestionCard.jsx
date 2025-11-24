import { Gift, Megaphone } from "lucide-react";

const SuggestionCard = ({ title, buttonText, type }) => {
  const Icon = type === "referral" ? Megaphone : Gift;
  const bgColor = type === "referral" ? "bg-orange-100" : "bg-green-100";

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
      <div className={`p-4 ${bgColor} flex items-center justify-center h-24`}>
        <Icon className="w-10 h-10 text-gray-700 opacity-50" />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          {title.split("!")[0] + "..."}
        </h3>

        <p className="text-xs text-gray-500 mb-3">{title}</p>

        <button className="inline-block bg-[#401A6D] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-purple-800 transition-colors shadow-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuggestionCard;