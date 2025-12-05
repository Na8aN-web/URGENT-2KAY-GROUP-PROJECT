import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import BackButton from "../../components/BackButton";
import { useBills } from "../../contexts/BillsContext";
import bill from "../../assets/images/bill_14510829.png";

const BillCard = ({ bill, onEdit, onCancel, onSendNow }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600";
      case "Sent":
        return "text-blue-600";
      case "Paid":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex flex-col text-sm text-gray-700 space-y-2">
        <p>
          Bill Type: <span className="font-semibold">{bill.billType}</span>
        </p>
        <p>
          Service Provider: <span className="font-semibold">{bill.serviceProvider}</span>
        </p>
        <p>
          Sponsor: <span className="font-semibold">{bill.sponsorName}</span>
        </p>
        <p>
          Amount: <span className="font-semibold">{bill.amount}</span>
        </p>
        <p>
          Frequency: <span className="font-semibold">{bill.frequency}</span>
        </p>
        <p>
          Scheduled Date: <span className="font-semibold">{formatDate(bill.scheduledDate)}</span>
        </p>
        <p>
          Time: <span className="font-semibold">{bill.timeOfDay}</span>
        </p>
        <p>
          Status: <span className={`font-semibold ${getStatusColor(bill.status)}`}>{bill.status}</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        {bill.status === "Pending" && (
          <>
            <ButtonGold
              btnTxt="Cancel"
              className="w-full"
              onClick={() => onCancel(bill.id)}
            />
            <ButtonGold
              btnTxt="Edit"
              className="w-full"
              onClick={() => onEdit(bill.id)}
            />
            <Button
              btnTxt="Send now"
              className="w-full"
              onClick={() => onSendNow(bill.id)}
            />
          </>
        )}
        {bill.status === "Sent" && (
          <div className="text-center text-sm text-gray-500 py-2">
            Bill has been sent to sponsor
          </div>
        )}
        {bill.status === "Cancelled" && (
          <div className="text-center text-sm text-red-500 py-2">
            This bill has been cancelled
          </div>
        )}
      </div>
    </div>
  );
};

const ScheduledBills = () => {
  const navigate = useNavigate();
  const { bills, updateBillStatus, getTodaysBills } = useBills();
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [billToCancel, setBillToCancel] = useState(null);

  const todaysBills = getTodaysBills();
  const upcomingBills = bills.filter(bill => {
    const billDate = new Date(bill.scheduledDate);
    const today = new Date();
    return billDate > today && bill.status === "Pending";
  });
  const pastBills = bills.filter(bill => {
    const billDate = new Date(bill.scheduledDate);
    const today = new Date();
    return billDate < today || bill.status !== "Pending";
  });

  const handleEdit = (billId) => {
    // Store bill ID for editing
    const bill = bills.find(b => b.id === billId);
    if (bill) {
      localStorage.setItem('temp_bill_data', JSON.stringify(bill));
      navigate("/dashboard/bill-details");
    }
  };

  const handleCancelClick = (billId) => {
    setBillToCancel(billId);
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    if (billToCancel) {
      updateBillStatus(billToCancel, "Cancelled");
      setShowCancelConfirm(false);
      setBillToCancel(null);
    }
  };

  const handleSendNow = (billId) => {
    updateBillStatus(billId, "Sent");
  };

  const handleAddNewBill = () => {
    navigate("/dashboard/bill-details");
  };

  if (bills.length === 0) {
    return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen flex flex-col">
       <BackButton />
       <h1 className="text-base md:text-lg font-bold text-[#252323]">
         Scheduled Bills
       </h1>
 
       <div className="flex-1 flex flex-col items-center justify-center text-center">
         <img src={bill} alt="bill" className="w-36 h-36 sm:w-52 sm:h-52" />
 
         <p className="pb-3 pt-4 text-[#545050] text-base sm:text-lg font-bold">
           Nothing scheduled yet.
         </p>
         <span className="text-[#535151] text-base font-normal pb-1">
           Schedule your bills now and let your sponsors know what's coming rent,
           tuition, or essentials.
         </span>
         <span className="text-[#535151] text-base font-normal pb-6">
           No surprises, no pressure-just smarter support.
         </span>
 
         <Button
           btnTxt="Schedule bill"
           onClick={handleAddNewBill}
           className="px-12 sm:px-16 md:px-18"
         />
       </div>
     </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <BackButton />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-bold text-[#252323]">
          Scheduled Bills
        </h1>
        <Button
          btnTxt="+ New Bill"
          onClick={handleAddNewBill}
          className="text-sm"
        />
      </div>

      <div className="bg-[#fafafa] px-4 py-6 rounded-md min-h-[70vh]">
        {/* Today's Bills */}
        {todaysBills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-base font-semibold text-gray-700 mb-4">Today</h2>
            {todaysBills.map(bill => (
              <BillCard
                key={bill.id}
                bill={bill}
                onEdit={handleEdit}
                onCancel={handleCancelClick}
                onSendNow={handleSendNow}
              />
            ))}
          </div>
        )}

        {/* Upcoming Bills */}
        {upcomingBills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-base font-semibold text-gray-700 mb-4">Upcoming</h2>
            {upcomingBills.map(bill => (
              <BillCard
                key={bill.id}
                bill={bill}
                onEdit={handleEdit}
                onCancel={handleCancelClick}
                onSendNow={handleSendNow}
              />
            ))}
          </div>
        )}

        {/* Past Bills */}
        {pastBills.length > 0 && (
          <div>
            <h2 className="text-base font-semibold text-gray-700 mb-4">Past</h2>
            {pastBills.map(bill => (
              <BillCard
                key={bill.id}
                bill={bill}
                onEdit={handleEdit}
                onCancel={handleCancelClick}
                onSendNow={handleSendNow}
              />
            ))}
          </div>
        )}
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 w-full px-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <h2 className="text-xl font-bold text-[#252323] mb-4">
              Cancel Bill?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to cancel this scheduled bill?
            </p>
            <div className="flex gap-3">
              <ButtonGold
                btnTxt="No, Keep It"
                className="w-full"
                onClick={() => setShowCancelConfirm(false)}
              />
              <Button
                btnTxt="Yes, Cancel"
                className="w-full bg-red-500"
                onClick={confirmCancel}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduledBills;