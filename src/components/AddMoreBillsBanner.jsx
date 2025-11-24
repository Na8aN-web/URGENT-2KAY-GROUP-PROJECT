import { X } from "lucide-react";

const AddMoreBillsBanner = ({ onClose }) => {
  return (
    <div
      className="flex items-center justify-between p-3 bg-gray-100 text-black rounded-lg shadow mb-6 border border-[#401A6D]/30"
      role="alert"
    >
      <span className="text-sm">
        Add more bills or expenses to your bundle to make it complete!
      </span>

      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-purple-200"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AddMoreBillsBanner;