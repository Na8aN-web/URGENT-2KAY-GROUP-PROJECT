import React from "react";
import PartnersLayout from "./components/PartnersLayout";
import Button from "../../components/Button";

const ThankYou = () => {
  return (
    <>
      <PartnersLayout showText={false}>
        <p className="absolute top-12 text-xl text-white text-center pb-3 md:hidden">
          Urgent2kay
        </p>
        <div className="flex flex-col justify-center items-center text-center gap-8 pb-20 md:pb-0">
          <h1 className="text-5xl font-semibold text-white md:text-[#000000]">
            Thank You!
          </h1>
          <p className="text-xl md:text-base text-white/80 md:text-[rgb(105,102,102)] font-normal pb-16">
            Your Application is Under Review
          </p>
          <Button btnTxt="Done" className="text-sm sm:text-xl px-16" />
        </div>
      </PartnersLayout>
    </>
  );
};

export default ThankYou;
