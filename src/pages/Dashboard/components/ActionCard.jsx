export const ActionCard = ({ title, description, icon: Icon, bgColor, textColor, buttonText }) => (
  <div className={`${bgColor} rounded-xl p-5 md:p-6 shadow-lg`}>
    <div className={`w-10 h-10 md:w-12 md:h-12 ${textColor === 'text-white' ? 'bg-white/20' : 'bg-black/10'} rounded-lg flex items-center justify-center mb-3 md:mb-4`}>
      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${textColor}`} />
    </div>
    <h3 className={`text-lg md:text-xl font-bold ${textColor} mb-2`}>{title}</h3>
    <p className={`${textColor} opacity-90 text-xs md:text-sm mb-4 md:mb-6`}>{description}</p>
    <button className={`flex items-center gap-2 ${textColor} font-semibold text-sm hover:gap-3 transition-all`}>
      {buttonText}
      <span>→</span>
    </button>
  </div>
);