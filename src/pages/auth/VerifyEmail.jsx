import React from "react";
import AuthButton from "./components/AuthButton";
import AuthLayout from "./components/AuthLayout";
import { useNavigate } from "react-router";
import { IoChevronBack } from "react-icons/io5";

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      showSubtitle={false}
      showFooterText={true}
      footerText="Already have an account"
      footerActionText="Sign in"
      to="/login"
    >
      <IoChevronBack
        className="absolute top-10 left-20 cursor-pointer w-8 h-8"
        onClick={() => navigate("/sign-up")}
      />

      <div className="text-center space-y-5">
        <h1 className="text-xl md:text-4xl font-bold">Verify your email</h1>
        <p className="text-sm text-black/50">
          ALmost there! We've sent a verification email to
          Tim*******01@gmail.com. You may need your email to log into your
          Urgent 2Kay account.
        </p>
        <AuthButton btnTxt="Resend Email" type="button"/>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
