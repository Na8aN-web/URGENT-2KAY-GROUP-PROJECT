import React from "react";

const ConfirmationModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  if (!isOpen) return null;

  const baseConfirmClass =
    "px-6 py-3 font-semibold text-lg rounded-[58px] shadow-lg transition-all duration-200 w-full sm:w-40";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 sm:p-10 max-w-lg w-full shadow-2xl transform transition-transform duration-300 scale-100">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">
          {message}
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onConfirm}
            className={`${baseConfirmClass} border-2 border-[#D3AE2D] text-[#401A6D] hover:bg-[#D3AE2D]/90 hover:text-[#401A6D]/90 order-1 sm:order-1`}
          >
            {confirmText}
          </button>

          <button
            onClick={onCancel}
            className={`${baseConfirmClass} bg-[#401A6D] text-white hover:bg-purple-800 order-2 sm:order-2`}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
