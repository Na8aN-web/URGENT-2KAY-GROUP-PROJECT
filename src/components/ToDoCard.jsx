const ToDoCard = ({ title, linkText, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex-1 bg-[#F0EBF5] p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg min-h-[150px] flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#401A6D]"
  >
    <p className="text-sm font-medium text-gray-600 mb-4">{title}</p>

    <span className="text-sm font-semibold text-[#401A6D] hover:text-purple-700 transition-colors">
      {linkText}
    </span>
  </button>
);

export default ToDoCard;