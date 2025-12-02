import { useNavigate } from "react-router";
import Button from "../../components/Button";

const ScheduleSuccess = ({ onClose }) => {
  const navigate = useNavigate();

  const viewBills = () => {
    navigate("/dashboard/schedule-bills");
  };
  return (
    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full text-center relative">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
      >
        ×
      </button>

      {/* Celebration illustration */}
      <div className="mb-6 flex justify-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="w-48 h-48"
        >
          {/* Confetti pieces */}
          <rect
            x="30"
            y="20"
            width="8"
            height="8"
            fill="#6B46C1"
            transform="rotate(-15 34 24)"
          />
          <rect
            x="160"
            y="25"
            width="8"
            height="8"
            fill="#6B46C1"
            transform="rotate(20 164 29)"
          />
          <rect
            x="45"
            y="180"
            width="6"
            height="6"
            fill="#F59E0B"
            transform="rotate(30 48 183)"
          />
          <rect
            x="150"
            y="175"
            width="6"
            height="6"
            fill="#F59E0B"
            transform="rotate(-20 153 178)"
          />
          <rect
            x="25"
            y="100"
            width="5"
            height="5"
            fill="#6B46C1"
            transform="rotate(45 27.5 102.5)"
          />
          <rect
            x="170"
            y="95"
            width="5"
            height="5"
            fill="#6B46C1"
            transform="rotate(-30 172.5 97.5)"
          />
          <rect
            x="60"
            y="35"
            width="4"
            height="4"
            fill="#F59E0B"
            transform="rotate(60 62 37)"
          />
          <rect
            x="140"
            y="160"
            width="4"
            height="4"
            fill="#6B46C1"
            transform="rotate(-45 142 162)"
          />

          {/* Office/doorway background */}
          <rect x="50" y="40" width="100" height="120" fill="#F3F4F6" rx="4" />
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="160"
            stroke="#E5E7EB"
            strokeWidth="2"
          />

          {/* Person 1 (left) - jumping with raised arms */}
          <g transform="translate(65, 90)">
            {/* Body */}
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#F59E0B" />
            {/* Head */}
            <circle cx="0" cy="-18" r="8" fill="#D97706" />
            {/* Hair */}
            <path
              d="M -6 -20 Q -8 -26 -4 -28 Q 0 -26 4 -28 Q 8 -26 6 -20"
              fill="#1F2937"
            />
            {/* Arms raised */}
            <line
              x1="0"
              y1="-5"
              x2="-15"
              y2="-25"
              stroke="#D97706"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="-5"
              x2="15"
              y2="-25"
              stroke="#D97706"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Legs */}
            <line
              x1="0"
              y1="12"
              x2="-6"
              y2="30"
              stroke="#1F2937"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="12"
              x2="6"
              y2="30"
              stroke="#1F2937"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Feet */}
            <ellipse cx="-6" cy="32" rx="4" ry="3" fill="#7C3AED" />
            <ellipse cx="6" cy="32" rx="4" ry="3" fill="#7C3AED" />
            {/* Paper/document in hand */}
            <rect
              x="-18"
              y="-28"
              width="6"
              height="8"
              fill="white"
              stroke="#9CA3AF"
              strokeWidth="0.5"
            />
          </g>

          {/* Person 2 (right) - standing with one arm raised */}
          <g transform="translate(115, 105)">
            {/* Body */}
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#6B46C1" />
            {/* Head */}
            <circle cx="0" cy="-18" r="8" fill="#FCA5A5" />
            {/* Hair */}
            <path d="M -6 -22 L -6 -26 L 6 -26 L 6 -22" fill="#1F2937" />
            {/* Cap/hat */}
            <rect x="-7" y="-27" width="14" height="3" fill="#6B46C1" />
            {/* Arms */}
            <line
              x1="0"
              y1="-5"
              x2="-12"
              y2="5"
              stroke="#FCA5A5"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="-5"
              x2="15"
              y2="-15"
              stroke="#FCA5A5"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Legs */}
            <line
              x1="0"
              y1="12"
              x2="-5"
              y2="30"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="12"
              x2="5"
              y2="30"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Feet */}
            <ellipse cx="-5" cy="32" rx="4" ry="3" fill="#1F2937" />
            <ellipse cx="5" cy="32" rx="4" ry="3" fill="#1F2937" />
            {/* Paper/document in hand */}
            <rect
              x="12"
              y="-18"
              width="6"
              height="8"
              fill="white"
              stroke="#9CA3AF"
              strokeWidth="0.5"
            />
          </g>
        </svg>
      </div>

      {/* Success message */}
      <h2 className="text-xl font-bold text-[#252323] mb-2">
        Your bill has been scheduled successfully.
      </h2>
      <p className="text-gray-600 text-sm mb-8">
        We'll remind you before it's sent!
      </p>

      {/* Buttons */}
      <div className="space-y-3 flex mx-auto w-full items-center justify-center flex-col">
        <Button btnTxt="View Scheduled Bill" onClick={viewBills} className="py-3 px-6"/>
        <button className="border-2 border-[#F59E0B] text-[#401A6D] text-base py-3 px-6 rounded-full font-semibold hover:bg-[#FEF3C7] transition-colors">
          Share with Sponsor
        </button>
      </div>
    </div>
  );
};

export default ScheduleSuccess;
