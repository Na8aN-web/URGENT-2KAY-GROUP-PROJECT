import React from "react";
import GenerateRequestPage from "../generate-request/GenerateRequestPage";
import SponsorNotificationBanner from "../../components/SponsorNotificationBanner";

const SponsorDashboardPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-full">
      <SponsorNotificationBanner />

      <GenerateRequestPage isSponsorView={true} />
    </div>
  );
};

export default SponsorDashboardPage;
