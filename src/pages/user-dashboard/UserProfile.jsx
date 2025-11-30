import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, FileText, CreditCard, HelpCircle, Link, Ban, Lock, FileCheck, Phone, Eye, Sun } from 'lucide-react';

export default function UserProfile() {
  const [hideBalance, setHideBalance] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const MenuItem = ({ icon: Icon, text, onClick, chevron = true }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-4  bg-white transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-gray-700" />
        <span className="text-gray-900 font-normal">{text}</span>
      </div>
      {chevron && (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );

  const ToggleMenuItem = ({ icon: Icon, text, checked, onChange }) => (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-gray-700" />
        <span className="text-gray-900 font-normal">{text}</span>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 rounded-full transition-colors ${
          checked ? 'bg-gray-300' : 'bg-gray-300'
        }`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );

  const menuItems = [
    { icon: User, text: "View Profile", onClick: () => navigate("/dashboard/my-profile") },
    { icon: FileText, text: "Statement & Profile" },
    { icon: CreditCard, text: "Saved Cards", onClick: () => navigate("/dashboard/payment-methods") },
    { icon: HelpCircle, text: "Get Help", onClick: () => navigate("/dashboard/help") },
    { icon: Link, text: "Linked Accounts" },
    { icon: Ban, text: "Account Limit" },
    { icon: Lock, text: "Security" },
    { icon: FileCheck, text: "Legal" },
    { icon: Phone, text: "FAQs", onClick: () => navigate("/dashboard/faq") },
    { icon: Phone, text: "Contact Us" },
  ];

  const toggleItems = [
    { icon: Eye, text: "Hide Balance", checked: hideBalance, onChange: setHideBalance },
    { icon: Sun, text: "Dark Mode", checked: darkMode, onChange: setDarkMode },
  ];

  return (
    <div className="min-h-screen bg-[#F7F6F9] pb-20">
      <div className="mx-auto"> {/* Increased max-width to accommodate 2 columns */}
        {/* Header */}
        <div className="pt-8 pb-6 px-4">
          <h1 className="text-4xl font-bold text-center py-4 text-[#1E1E1E]">Account</h1>
        </div>

        {/* Menu Items Container - Grid Layout */}
        <div className="px-4 ">
          {/* Regular Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {menuItems.map((item, index) => (
              <div key={index} className="rounded-lg py-2 overflow-hidden hover:shadow-lg bg-white shadow-sm border border-gray-200">
                <MenuItem 
                  icon={item.icon} 
                  text={item.text} 
                  onClick={item.onClick}
                />
              </div>
            ))}
          </div>

          {/* Toggle Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toggleItems.map((item, index) => (
              <div key={index} className="rounded-lg py-2 bg-white hover:shadow-lg overflow-hidden shadow-sm border border-gray-200">
                <ToggleMenuItem 
                  icon={item.icon} 
                  text={item.text} 
                  checked={item.checked}
                  onChange={item.onChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="px-4 mt-12">
          <button className="w-full text-[#E23232] font-medium text-lg py-3 hover:text-red-600 transition-colors">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}