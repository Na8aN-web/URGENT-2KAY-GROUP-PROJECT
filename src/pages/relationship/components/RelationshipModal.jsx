import React from "react";
import Button from "../../../components/Button";
import ButtonGold from "../../../components/ButtonGold";

const RelationshipModal = ({ onClose }) => {
  return (
    <div className="relative w-full max-w-[600px] bg-white py-10 px-4 md:py-20 md:px-8 rounded-lg">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 text-xl font-bold"
      >
        ✕
      </button>
      <div className="text-center flex flex-col justify-center items-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-auto max-h-[250px] sm:max-h-[350px] pb-8"
        >
          <circle cx="100" cy="60" r="40" fill="#F3E8D2" opacity="0.3" />
          <ellipse cx="100" cy="180" rx="60" ry="10" fill="#E5E5E5" />

          {/* Person */}
          <ellipse cx="100" cy="50" rx="12" ry="15" fill="#333" />
          <rect x="88" y="65" width="24" height="35" rx="2" fill="#666" />
          <rect x="88" y="100" width="10" height="30" rx="2" fill="#666" />
          <rect x="102" y="100" width="10" height="30" rx="2" fill="#666" />

          {/* Backpack */}
          <path
            d="M 75 70 Q 75 60 85 60 L 85 50 Q 85 45 90 45 L 110 45 Q 115 45 115 50 L 115 60 Q 125 60 125 70 L 125 110 Q 125 120 115 120 L 85 120 Q 75 120 75 110 Z"
            fill="#F4C430"
          />
          <rect x="90" y="75" width="20" height="30" rx="3" fill="#E5B02E" />
          <circle cx="95" cy="90" r="3" fill="#666" />

          {/* Buildings */}
          <g transform="translate(140, 80)">
            <rect
              x="0"
              y="40"
              width="20"
              height="60"
              fill="#E5E5E5"
              opacity="0.6"
            />
            <rect
              x="25"
              y="20"
              width="25"
              height="80"
              fill="#E5E5E5"
              opacity="0.6"
            />
            <rect x="0" y="45" width="5" height="5" fill="#999" opacity="0.3" />
            <rect x="0" y="55" width="5" height="5" fill="#999" opacity="0.3" />
          </g>

          {/* Plants */}
          <g transform="translate(130, 120)">
            <path
              d="M 0 0 Q -5 -10 -3 -15 Q -1 -18 2 -15 Q 5 -10 0 0"
              fill="#B8956A"
            />
            <path
              d="M 5 0 Q 0 -8 2 -12 Q 4 -15 7 -12 Q 10 -8 5 0"
              fill="#B8956A"
            />
          </g>
        </svg>

        <p className="text-xl font-semibold text-[#000000]">
          Relationship Added Successfully!
        </p>
        <p className="text-base text-[#686363] font-normal py-2">
          Now, inite your sponsor to connect and approve bill requests easily
        </p>

        <Button btnTxt="View Relationship" />
      </div>
    </div>
  );
};

export default RelationshipModal;
