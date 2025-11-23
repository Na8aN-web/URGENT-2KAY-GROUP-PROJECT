import React from "react";
import PartnersLayout from "./components/PartnersLayout";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const WelcomePartners = () => {
  const navigate = useNavigate()
  
  const handleClick= () => {
    navigate("/get-started-partners")
  }
  return (
    <>
      <PartnersLayout showText={false}>
        <p className="text-xl text-white text-center pb-3 md:hidden">Urgent2kay</p>
        <div className="flex flex-col items-center text-center gap-10 md:gap-6">
          <h1 className="text-4xl font-semibold text-white md:text-[#000000]">
            Welcome to Urgent 2Kay
          </h1>
          <p className="text-sm sm:text-xl text-white/80 md:text-[rgb(105,102,102)] font-normal">
            Become a Vaerified Service Provider and start accepting bill
            payments directly from bill sponsors and users!
          </p>
          <Button
            btnTxt="Get Started"
            className="text-base px-12 sm:text-xl sm:px-16"
            onClick={handleClick}
          />
        </div>
      </PartnersLayout>
    </>
  );
};

export default WelcomePartners;
