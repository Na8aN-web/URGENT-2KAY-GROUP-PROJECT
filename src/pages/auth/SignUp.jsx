import React from "react";
import AuthButton from "./components/AuthButton";
import InputField from "./components/InputField";
import AuthLayout from "./components/AuthLayout";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/verify-email");
  };

  return (
    <AuthLayout
      showSubtitle={true}
      showFooterText={true}
      subTitle="Skip the hassle. Send & pay bills in one Click."
      footerText="Already have an account"
      footerActionText="Sign in"
      to="/login"
    >
      <h2 className="text-4xl pb-8">Sign Up</h2>
      <form action="" className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          label="First Name"
          type="text"
          placeholder="Enter your first name"
        />

        <InputField
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
        />

        <InputField
          label="Email address"
          type="email"
          placeholder="Enter your email"
        />

        <InputField
          label="Enter phone number"
          type="phone"
          placeholder="Enter your phone number"
        />

        <InputField
          label="Set password"
          type="password"
          placeholder="Enter password"
        />

        <div className="flex gap-1 justify-self-start">
          <input type="checkbox" name="" id="" />
          <span className="text-[10px]">
            I agree to Urgent 2Kay's Terms and Conditions, Privacy Policy and
            Cookies Policy
          </span>
        </div>

        <AuthButton btnTxt="Sign up" type="submit"/>
      </form>
      <p className="text-xs text-center pt-2">
        Already have an account?
        <Link to="/login" className="text-[#401C6D] font-extrabold">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
