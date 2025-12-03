import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import money from "../../assets/images/money_16384325.png";
import bundles from "../../assets/images/money_16384325.png";
import BackButton from "../../components/BackButton";
import { CiSearch, CiCalendarDate } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useRelationships } from "../../contexts/RelationshipContexts";

const ViewDetails = ({ onClose }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-md mx-auto">
      <div className="flex justify-between mb-6">
        <h2 className="text-gray-500 font-medium">Bundle</h2>
        <h2 className="font-semibold">Monthly Essentials</h2>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600">Electricity</span>
        <span className="font-semibold">₦ 5,000</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600">Jumia order</span>
        <span className="font-semibold">₦ 20,000</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600">Airtime</span>
        <span className="font-semibold">₦ 3,000</span>
      </div>

      <div className="flex justify-between text-sm mb-8">
        <span className="text-gray-600">Lunch</span>
        <span className="font-semibold">₦ 4,500</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-900 font-medium">Amount Paid</span>
        <span className="text-lg font-bold">₦ 32,500</span>
      </div>

      <button
        className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium"
        onClick={onClose}
      >
        Done
      </button>
    </div>
  );
};

const PaymentDetails = () => {
  const { id } = useParams();
  const [showViewDetails, setShowViewDetails] = useState(false);
  const { getRelationshipById } = useRelationships();
  const sponsor = getRelationshipById(id);
  const payments = [
    {
      id: 1,
      name: "Monthly Essentials",
      amount: "₦32,500",
      date: "01-05-25",
      time: "12:00am",
      status: "Paid",
    },
  ];
  const handleViewMain = () => {
    setShowViewDetails(true);
  };
  return (
    <div className="p-6 md:p-8">
      <BackButton />

      <h1 className="text-2xl font-bold text-[#331122] pt-8 sm:text-left sm:py-6">
        Payment Details
      </h1>

      {/* Sponsor */}
      <div>
        <h2 className="text-lg font-bold text-[#6D6969] py-3 sm:py-2 sm:text-left">
          Sponsor
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between p-3 sm:p-4 md:p-5">
          <div className="flex items-center gap-4">
            <RxAvatar className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] text-[#70588e]" />
            <div>
              <p className="text-base font-bold">{sponsor.fullName}</p>
              <span className="text-sm font-bold">
                {sponsor.relationshipType}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-12 md:gap-6 py-8">
            <div className="w-full h-fit py-3 px-4 rounded-lg font-bold border border-[#E8BF31]">
              <p className="text-[#000000] text-sm pb-1">
                Total Amount Sponsored:
              </p>
              <div className="flex gap-2 items-center">
                <img src={money} alt="money.png" className="w-[18px] h-[18px]" />
                <span className="text-[#000000] text-lg font-meduim">
                  N32,500
                </span>
              </div>
            </div>
            <div className="w-full h-fit py-3 px-4 rounded-lg font-bold border border-[#E8BF31]">
              <p className="text-[#000000] text-sm pb-1">
                Numbers of Bundle Paid!:
              </p>
              <div className="flex gap-2 items-center">
                <img src={bundles} alt="" className="w-[18px] h-[18px]" />
                <span className="text-[#000000] text-lg font-meduim">1</span>
              </div>
            </div>
          </div>
        </div>
        {payments.length === 0 ? (
          <div className="w-full py-10 flex flex-col justify-center items-center text-gray-500 text-sm">
            <p>Sorry, No bundles paid yet</p>
            <p className="text-xs">
              Once your sponsor makes a payment, you'll see it here!
            </p>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto py-6 px-4 sm:px-12 bg-[#e4e0e9]">
            {/* <!-- Header Row --> */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4 w-full">
              <h2 className="text-lg font-bold text-[#000000]">
                Recent Payments
              </h2>

              {/* <!-- Search --> */}
              <div className="flex-1 sm:mx-6">
                <div className="max-w-md w-full">
                  <label className="relative block">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <CiSearch className="w-4 h-4" />
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      type="text"
                      placeholder="Search"
                    />
                  </label>
                </div>
              </div>

              {/* <!-- Date Filter --> */}
              <div>
                <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700">
                  <CiCalendarDate className="w-4 h-4" />
                  Last 30 days
                  <FaAngleDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* <!-- Table --> */}
            <div className="border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4">Bundle Name</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {payments.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 font-medium">{p.name}</td>
                      <td className="py-4 px-4 font-semibold">{p.amount}</td>
                      <td className="py-4 px-4">{p.date}</td>
                      <td className="py-4 px-4">{p.time}</td>
                      <td className="py-4 px-4">
                        <span className="text-green-600 font-medium">
                          {p.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button
                          className="text-indigo-600 font-medium hover:underline"
                          onClick={handleViewMain}
                        >
                          View details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showViewDetails && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <ViewDetails onClose={() => setShowViewDetails(false)} />
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
