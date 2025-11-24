import React, { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import FileUploader from "./components/FileUploader";
import { useNavigate } from "react-router";

const BusinessDetails = ({ onNext }) => {
  return (
    <section className="px-8 py-2 lg:py-8 sm:px-28 lg:px-18 lg:pt-20 lg:w-5xl lg:mx-auto">
      <h2 className="text-center text-2xl font-bold text-[#401A6D] pb-12 lg:hidden">
        Business Details
      </h2>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 lg:gap-x-40 pb-16 sm:pb-12">
          <InputField inputLabel="Business Label" className="mb-4 sm:mb-0" />
          <InputField
            inputLabel="Type of Business"
            inputSpan="e.g utilities, school, hospital, housing"
          />
          <InputField
            inputLabel="Business Registration Number"
            className="mb-4 sm:mb-0"
          />
          <InputField inputLabel="Business Email Address" />
          <InputField inputLabel="Business Address" />
          <InputField inputLabel="Business Phone Number" />
        </div>
        <div className="flex justify-center items-center sm:pt-8">
          <Button btnTxt="Next" onClick={onNext} />
        </div>
      </form>
    </section>
  );
};

const ContactPerson = ({ onNext }) => {
  return (
    <section className="px-8 py-2 lg:py-8 sm:px-28 lg:px-18 lg:pt-20 lg:w-5xl lg:mx-auto">
      <h2 className="text-center text-2xl font-bold text-[#401A6D] pb-12 lg:hidden">
        Contact Person Info
      </h2>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 lg:gap-x-40 pb-16 sm:pb-12">
          <InputField inputLabel="First Name" />
          <InputField inputLabel="Last Name" className="mb-4 sm:mb-0" />
          <InputField inputLabel="Email Address" />
          <InputField inputLabel="Phone Number 1" />
          <InputField inputLabel="Phone Number 2" />
          <InputField inputLabel="Role" />
        </div>
        <div className="flex justify-center items-center sm:pt-8">
          <Button btnTxt="Next" onClick={onNext} />
        </div>
      </form>
    </section>
  );
};

const BankDetails = () => {
  const navigate = useNavigate()
  return (
    <section className="px-8 py-2 lg:py-8 sm:px-28 lg:px-18 lg:pt-20 lg:w-5xl lg:mx-auto">
      <h2 className="text-center text-2xl font-bold text-[#401A6D] pb-12 lg:hidden">
        Bank Details
      </h2>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 lg:gap-x-40 pb-16 sm:pb-12">
          <div className="space-y-6 sm:space-y-8">
            <InputField inputLabel="First Name" />
            <InputField inputLabel="Last Name" />
            <InputField inputLabel="Account Number" />
          </div>
          <div className="pt-4">
            <FileUploader />
            <span className="text-xs font-bold text-[#000000] pt-1">
              e.g CAC cert, Utility Bill, etc.
            </span>
          </div>
        </div>

        <div className="flex gap-1 items-start">
          <input type="checkbox" name="" id="" />
          <span className="text-[9px] font-normal text-[#525252]">
            i agree to Urgent 2K's Terms and Conditions, Privacy Policy and
            Cookies Policy
          </span>
        </div>
        <p className="text-sm text-[#000000] font-bold pt-8 sm:pt-16">
          Once you submit your registration, our team will review your details
          within 24 to 48 hours. You'll be notified by email as soon as your
          account is verified and ready to start recieving payments.
        </p>
        <div className="flex justify-center items-center pt-8">
          <Button btnTxt="Submit Registration" className="px-14" onClick={() => navigate("/thank-you")}/>
        </div>
      </form>
    </section>
  );
};

const GetStarted = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="py-12">
      <div className="w-full bg-white lg:py-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 pb-3 lg:pb-0">
              <img
                src="/mnt/data/A6B1B513-69B6-4761-98D8-ABF27BA6BB9D.jpeg"
                alt="Urgent2k Logo"
                className="h-12 w-12 rounded-full object-contain"
              />
            </div>

            {/* Center text */}
            <div className="flex-1 text-center">
              <h1 className="text-xl sm:text-3xl font-bold text-[#000000]">
                Let’s get you started
              </h1>
              <p className="text-[#8A8787] text-base mt-2 sm:mt-6">
                Enter the details to get going
              </p>
            </div>

            {/* Spacer to balance layout */}
            <div className="w-12" />
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mt-6 sm:mt-10 lg:space-x-8">
            {/* STEP 1 (Active) */}
            <div className="flex flex-row items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-7 sm:h-7 text-[10px] sm:text-sm rounded-full border-2 flex items-center justify-center font-semibold ${
                  step === 1
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                1
              </div>
              <span
                className={`hidden lg:block mt-2 text-base font-bold ${
                  step === 1 ? "text-gray-900" : "text-[#8A8787]"
                }`}
              >
                Business Details
              </span>
            </div>

            {/* Line */}
            <div className="w-8 lg:w-36 h-px bg-gray-300" />

            {/* STEP 2 */}
            <div className="flex flex-row items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-7 sm:h-7 text-[10px] sm:text-sm rounded-full border-2 flex items-center justify-center font-semibold ${
                  step === 2
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                2
              </div>
              <span
                className={`hidden lg:block mt-2 text-base font-bold ${
                  step === 2 ? "text-gray-900" : "text-[#8A8787]"
                }`}
              >
                Contact Person Info
              </span>
            </div>

            {/* Line */}
            <div className="w-8 lg:w-36 h-px bg-gray-300" />

            {/* STEP 3 */}
            <div className="flex flex-row items-center gap-4">
              <div
                className={`w-5 h-5 sm:w-7 sm:h-7 text-[10px] sm:text-sm rounded-full border-2 flex items-center justify-center font-semibold ${
                  step === 3
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                3
              </div>
              <span
                className={`hidden lg:block mt-2 text-base font-bold ${
                  step === 3 ? "text-gray-900" : "text-[#8A8787]"
                }`}
              >
                Bank Details
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* CONDITIONAL RENDERING FOR PAGES */}
      {step === 1 && <BusinessDetails onNext={() => setStep(2)} />}
      {step === 2 && <ContactPerson onNext={() => setStep(3)} />}
      {step === 3 && <BankDetails />}
    </div>
  );
};

export default GetStarted;
