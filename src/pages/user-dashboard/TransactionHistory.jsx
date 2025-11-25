import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function TransactionHistory() {
  const [transactions] = useState([
    {
      id: 1,
      requestBundle: 'Monthly Essentials',
      sponsor: 'Mummy',
      amount: '₦ 32,500',
      date: '01-05-25',
      time: '12:00am',
      status: 'Pending'
    },
    {
      id: 2,
      requestBundle: 'Monthly Essentials',
      sponsor: 'Mummy',
      amount: '₦ 100,000',
      date: '04-05-25',
      time: '07:00am',
      status: 'Approved'
    },
    {
      id: 3,
      requestBundle: 'Books',
      sponsor: 'Daddy',
      amount: '₦ 100,000',
      date: '09-05-25',
      time: '11:00am',
      status: 'Approved'
    },
    {
      id: 4,
      requestBundle: 'Transport Fare',
      sponsor: 'Friend',
      amount: '₦ 5,000',
      date: '11-05-25',
      time: '11:27am',
      status: 'Rejected'
    },
    {
      id: 5,
      requestBundle: 'Books',
      sponsor: 'Daddy',
      amount: '₦ 100,000',
      date: '09-05-25',
      time: '11:00am',
      status: 'Approved'
    },
    {
      id: 6,
      requestBundle: 'Transport Fare',
      sponsor: 'Friend',
      amount: '₦ 5,000',
      date: '11-05-25',
      time: '11:27am',
      status: 'Rejected'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 bg-green-50';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'Rejected':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3F3F3F]">
          Transaction History
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex justify-end px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
          <button className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors">
            See More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Request Bundle
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Sponsor
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                    index === transactions.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {transaction.requestBundle}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {transaction.sponsor}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {transaction.time}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-purple-700 font-medium hover:text-purple-900 transition-colors">
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View - Visible only on mobile and tablet */}
        <div className="lg:hidden ">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 sm:p-5 hover:bg-gray-50 border-b-2 border-gray-300 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {transaction.requestBundle}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Sponsor: {transaction.sponsor}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    transaction.status
                  )}`}
                >
                  {transaction.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Amount</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {transaction.amount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Date</p>
                  <p className="text-sm text-gray-900">{transaction.date}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 ">
                <span className="text-xs sm:text-sm text-gray-500">
                  {transaction.time}
                </span>
                <button className="text-xs sm:text-sm text-purple-700 font-medium hover:text-purple-900 transition-colors">
                  View details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}