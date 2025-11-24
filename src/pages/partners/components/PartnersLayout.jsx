import React from "react";
import { Link } from "react-router-dom";
import "./PartnersLayout.css";

const PartnersLayout = ({ children, showText }) => {
  return (
    <div className="bg-[#f0edf3] md:flex w-full min-h-screen">
      <section
        className="partner-section-desktop hidden md:flex md:flex-col md:justify-between md:flex-1 p-12"
      >
        <p className="text-xl text-white">Urgent2kay</p>
        {showText && (
          <p className="text-xl text-white">
            Together, we're making bills easier - and dreams closer.
          </p>
        )}
      </section>
      <section className="partner-section-mobile px-3 md:p-12 pb-36 flex flex-col justify-end md:justify-center items-center md:flex-1 min-h-screen">
        <div className="px-4 w-full">{children}</div>
      </section>
    </div>
  );
};

export default PartnersLayout;
