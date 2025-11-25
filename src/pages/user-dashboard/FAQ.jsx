import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronDown } from 'lucide-react';

// FAQ Page Component
export default function FAQ() { 
  const [openItems, setOpenItems] = useState({});
  const navigate = useNavigate();

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

   const onBack = () => {
    navigate('/dashboard/help'); 
  };

  const faqData = {
    'Core Functionality': [
      {
        id: 'what-is',
        question: 'What is urgent 2kay?',
        answer: 'Urgent 2kay is a comprehensive debt management and bill payment platform that helps you organize your finances, manage debts, and make payments efficiently. It provides tools to track your expenses, set up payment plans, and get support when you need help with your financial obligations.'
      },
      {
        id: 'different',
        question: 'How is urgent 2kay different from others payment app?',
        answer: 'Urgent 2kay focuses specifically on debt management and urgent bill payments. Unlike general payment apps, we provide personalized debt tracking, flexible payment plans, direct support for financial difficulties, and the ability to reach out to your network for help when needed.'
      },
      {
        id: 'payment-methods',
        question: 'What payment method is supported?',
        answer: 'We support multiple payment methods including bank transfers, debit cards, credit cards, and mobile money. You can link your bank account for seamless transactions and choose your preferred payment method for each bill or debt payment.'
      },
      {
        id: 'bill-types',
        question: 'What types of bills and expenses can be managed through Urgent 2kay?',
        answer: 'You can manage various types of bills including utilities (electricity, water, gas), rent payments, loan repayments, credit card debts, subscription services, insurance premiums, and other recurring or one-time expenses. Our platform is flexible to accommodate different financial obligations.'
      }
    ],
    'Getting Started': [
      {
        id: 'sign-up',
        question: 'How do i sign up to urgent 2kay?',
        answer: 'Signing up is easy! Click the "Sign Up" button on the homepage, enter your email address, create a secure password, and verify your email. Then complete your profile by adding your name and phone number. You\'ll be ready to start managing your debts and bills immediately.'
      },
      {
        id: 'mobile',
        question: 'Is urgent 2kay available in mobile devices?',
        answer: 'Yes! Urgent 2kay is fully responsive and works seamlessly on mobile devices through your web browser. We\'re also developing dedicated iOS and Android apps that will be available soon with enhanced mobile features and notifications.'
      },
      {
        id: 'bill-bundle',
        question: 'How do i create a bill bundle?',
        answer: 'To create a bill bundle, navigate to your dashboard and click "Create Bundle". Select the bills you want to group together, set a payment schedule, and choose your payment method. Bill bundles help you organize related expenses and make batch payments more convenient.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg">
            These are the most commonly asked questions about Urgent 2kay<br />
            can't find what you're looking for? <span className="font-semibold text-[#3A1863]">Contact to our friendly team</span>
          </p>
        </div>

        {/* FAQ Sections */}
        {Object.entries(faqData).map(([section, questions], sectionIdx) => (
          <div key={section} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {sectionIdx + 1}. {section}
            </h2>

            <div className="space-y-4">
              {questions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openItems[item.id] ? 'transform rotate-180' : ''
                        }`}
                    />
                  </button>

                  {openItems[item.id] && (
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onBack} 
            className="bg-[#3A1863] text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition-colors shadow-lg"
          >
            Go Back To Help
          </button>
        </div>
      </div>
    </div>
  );
}