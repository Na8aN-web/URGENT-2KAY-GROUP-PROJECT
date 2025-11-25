export const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">{title}</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`p-2 md:p-3 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
      </div>
    </div>
  </div>
);