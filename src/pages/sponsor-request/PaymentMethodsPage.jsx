import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Copy } from "lucide-react";

// mock data
const MOCK_ACCOUNTS = {
  bankAccounts: [
    {
      id: 1,
      lastFour: "1234",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "1234 1234 1234 1234... (Account Name), (Bank Name)",
    },
    {
      id: 2,
      lastFour: "5678",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "1234 1234 1234 5678... (Account Name), (Bank Name)",
    },
    {
      id: 3,
      lastFour: "9012",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "1234 1234 1234 9012... (Account Name), (Bank Name)",
    },
    {
      id: 4,
      lastFour: "3456",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "1234 1234 1234 3456... (Account Name), (Bank Name)",
    },
  ],
  bankCards: [
    {
      id: 101,
      lastFour: "3456",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "**** **** **** 3456... (Account Name), (Bank Name)",
    },
    {
      id: 102,
      lastFour: "7890",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "**** **** **** 7890... (Account Name), (Bank Name)",
    },
    {
      id: 103,
      lastFour: "1234",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "**** **** **** 1234... (Account Name), (Bank Name)",
    },
    {
      id: 104,
      lastFour: "5678",
      name: "Account Name",
      bank: "Bank Name",
      fullDetails: "**** **** **** 5678... (Account Name), (Bank Name)",
    },
  ],
  wallets: [
    {
      id: 201,
      address: "0x74b118...",
      fullDetails: "0x74b118202D5812323434hdsda6b1D45770DFAB478B",
    },
    {
      id: 202,
      address: "0x74b118...",
      fullDetails: "0x74b118202D5812323434hdsda6b1D45770DFAB478B",
    },
    {
      id: 203,
      address: "0x74b118...",
      fullDetails: "0x74b118202D5812323434hdsda6b1D45770DFAB478B",
    },
    {
      id: 204,
      address: "0x74b118...",
      fullDetails: "0x74b118202D5812323434hdsda6b1D45770DFAB478B",
    },
  ],
};

const SavedMethodItem = ({ details, onCopy }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0">
      <p className="text-sm text-gray-700 font-medium truncate pr-4">
        {details}
      </p>
      <div className="flex space-x-2 shrink-0">
        <button
          onClick={onCopy}
          className="p-2 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const PaymentMethodsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard/sponsor/fund/REQ1001");
  };

  const MethodSection = ({ title, icon: Icon, data }) => (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
        <span>{title}</span>
      </h3>

      <div className="divide-y divide-gray-100">
        {data.length > 0 ? (
          data.map((item) => (
            <SavedMethodItem
              key={item.id}
              details={item.fullDetails}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500 py-4">
            Sorry, no saved {title.toLowerCase()}s found!
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full">
      <button
        onClick={handleBackClick}
        className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      {/*   mqin content  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* bank account */}
        <MethodSection
          title="Bank Account"
          data={MOCK_ACCOUNTS.bankAccounts}
          type="bankAccount"
        />

        {/* bank card */}
        <MethodSection
          title="Bank Card"
          data={MOCK_ACCOUNTS.bankCards}
          type="bankCard"
        />

        {/* walet */}
        <div className="lg:col-span-1">
          <MethodSection
            title="Wallet"
            data={MOCK_ACCOUNTS.wallets}
            type="wallet"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
