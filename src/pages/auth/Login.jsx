import React, { useState } from "react";
import InputField from "./components/InputField";
import AuthButton from "./components/AuthButton";
import AuthLayout from "./components/AuthLayout";
import { Link, useNavigate } from "react-router";

const Congratulations = ({ isOpen, onGetStarted }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-[450px] px-4 md:px-16 py-8 rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-bold mb-4">Welcome to Urgent 2Kay, Ada</h1>
        <p className="text-sm text-gray-600 mb-4">
          We're thrilled to have you on board. Create or Sponsor your first
          bundle to get started!
        </p>
        <div className="mb-4">
          <svg viewBox="0 0 200 200" className="w-full h-auto max-h-[150px]">
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
              <rect
                x="0"
                y="45"
                width="5"
                height="5"
                fill="#999"
                opacity="0.3"
              />
              <rect
                x="0"
                y="55"
                width="5"
                height="5"
                fill="#999"
                opacity="0.3"
              />
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
        </div>
        <AuthButton btnTxt="Get Started" onClick={onGetStarted} />
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show congratulations modal after successful login
    setShowCongrats(true);
  };

  const handleGetStarted = () => {
    setShowCongrats(false);
    navigate("/dashboard");
  };

  return (
    <>
      <AuthLayout
        showSubtitle={true}
        showFooterText={true}
        subTitle="Welcome to Urgent 2kay!"
        footerText="Don't have an account?"
        footerActionText="Sign up"
        to="/sign-up"
      >
        <h2 className="text-4xl pb-8 font-meduim">Login</h2>
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            type="text"
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <AuthButton btnTxt="Login" type="submit" />
        </form>
        <p className="text-sm text-center pt-2 text-[#525252]">
          Don't have an account?
          <Link to="/sign-up" className="text-[#401C6D] font-extrabold">
            Sign up
          </Link>
        </p>
      </AuthLayout>

      <Congratulations isOpen={showCongrats} onGetStarted={handleGetStarted} />
    </>
  );
};

export default Login;
