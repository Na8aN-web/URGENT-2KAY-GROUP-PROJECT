import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import Button from "../../components/Button";
import BillDetails from "./BillDetails";
import ReviewConfirmBill from "./ReviewConfirmBill";
import ScheduledBills from "./ScheduledBills";

const ScheduleBills = ({ onNext }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <div className="flex gap-1 items-center mb-6 md:mb-8">
        <IoChevronBack />
        <span className="text-xs font-medium text-[#6C6969]">back</span>
      </div>
      <h1 className="text-sm sm:text-base font-bold text-[#252323]">
        Scheduled Bills
      </h1>

      <div className="flex flex-col items-center justify-center pt-16 sm:pt-22">
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

        <p className="pb-2 text-[#545050] text-base sm:text-lg font-bold">
          Nothing scheduled yet.
        </p>
        <span className="text-[#535151] text-[11px] sm:text-sm font-normal">
          Schedule your bills now and let your sponsors know what's coming rent,
          tuition, or essentials.
        </span>
        <span className="text-[#535151] text-[11px] sm:text-sm font-normal pb-6">
          No surprises, no pressure-just smarter support.
        </span>

        <Button btnTxt="Schedule bill" onClick={onNext} />
      </div>
    </div>
  );
};

const ScheduleBill = () => {
  const [page, setPage] = useState(1);
  const [sponsors, setSponsors] = useState([
    { id: 1, name: "Ngozi", relationship: "Mother", phone: "080..." },
  ]);

  const [selectedSponsor, setSelectedSponsor] = useState(null);
  const [billData, setBillData] = useState(null);
  const [scheduledBills, setScheduledBills] = useState([]);

  const handleScheduleBill = () => {
    // Create a new scheduled bill
    const newBill = {
      id: Date.now(),
      ...billData,
      sponsor: selectedSponsor,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    setScheduledBills([...scheduledBills, newBill]);
    setPage(4); 
  };

  return (
    <>
      {/* CONDITIONAL RENDERING FOR PAGES */}
      {page === 1 && <ScheduleBills onNext={() => setPage(2)} />}

      {page === 2 && (
        <BillDetails
          sponsors={sponsors}
          selectedSponsor={selectedSponsor}
          onSelectSponsor={setSelectedSponsor}
          onAddSponsor={(newSponsor) => setSponsors([...sponsors, newSponsor])}
          onNext={(billInfo) => {
            setBillData(billInfo);
            setPage(3);
          }}
          onBack={() => setPage(1)}
        />
      )}

      {page === 3 && (
        <ReviewConfirmBill
          billData={billData}
          selectedSponsor={selectedSponsor}
          onSchedule={handleScheduleBill}
          onEdit={() => setPage(2)}
          onCancel={() => setPage(1)}
        />
      )}

      {page === 4 && (
        <ScheduledBills bills={scheduledBills} onBack={() => setPage(1)} />
      )}
    </>
  );
};

export default ScheduleBill;
