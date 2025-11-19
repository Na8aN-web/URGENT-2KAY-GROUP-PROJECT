import React from "react";
import { Link } from "react-router";

const AuthLayout = ({
  children,
  showSubtitle,
  subTitle,
  footerText,
  footerActionText,
  to,
}) => {
  return (
    <div className="bg-[#f0edf3] md:flex w-full min-h-screen">
      <section className="hidden bg-purple-950 md:flex md:justify-center md:items-center md:flex-1 px-6">
        {/* Desktop hero */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/20 max-w-lg h-[70%] px-[5%] py-[8%] flex flex-col justify-between rounded-3xl">
          <div className="space-y-2">
            <h1 className="text-2xl text-[#D5CECE] font-normal">
              Welcome to
              <span className="text-white font-bold">Urgent 2Kay</span>
            </h1>
            <p className="font-thin text-5xl text-white">
              Skip the hassle. Send & pay bills in one Click.
            </p>
            <p className="text-base text-[#D5CECE]">
              No more scattered requests or late fees-just simple, direct
              payments.
            </p>
          </div>
          <div>
            <div>
              <p className="text-xs text-[#D5CECE]">{footerText}</p>
              <Link to={to} className="text-sm text-white">
                {footerActionText}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-3 md:px-6 py-16 md:flex md:justify-center md:items-center md:flex-1">
        {/* Mobile hero */}
        <div className="text-center mb-10 space-y-2 md:hidden">
          <p className="text-2xl text-purple-900">Urgent2kay</p>
          {showSubtitle && (
            <p className="text-base font-extralight">{subTitle}</p>
          )}
        </div>
        <div className="px-4 w-full max-w-sm">{children}</div>
      </section>
    </div>
  );
};

export default AuthLayout;
