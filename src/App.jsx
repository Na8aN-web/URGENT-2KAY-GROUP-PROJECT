import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/components/DashboardLayout";
import TransactionHistory from "./pages/Dashboard/TransactionHistory";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Login from "./pages/auth/Login";
import UserProfile from "./pages/dashboard/UserProfile";
import MyProfile from "./pages/dashboard/MyProfile";
import Help from "./pages/dashboard/Help";
import FAQ from "./pages/dashboard/FAQ";
import ServiceProvider from "./pages/dashboard/ServiceProvider";
import SubmitRequest from "./pages/dashboard/SubmitRequest";
import Notifications from "./pages/dashboard/Notifications";
import LandingPage from "./pages/LandingPage";
import ScheduleBill from "./pages/schedule/ScheduleBill";
import WelcomePartners from "./pages/partners/WelcomePartners";
import ThankYou from "./pages/partners/ThankYou";
import GetStartedPartners from "./pages/partners/GetStartedPartners";
import BundleSuccessPage from "./pages/GenerateRequest/BundleSuccessPage.jsx";
import GenerateRequestPage from "./pages/GenerateRequest/GenerateRequestPage.jsx";
import AllServicesPage from "./pages/GenerateRequest/AllServicesPage.jsx";
import ServicePaymentPage from "./pages/GenerateRequest/ServicePaymentPage.jsx";
import ReferralPage from "./pages/GenerateRequest/ReferralPage.jsx";
import SponsorSelectionPage from "./pages/GenerateRequest/SponsorSelectionPage.jsx";
import AddNewSponsorPage from "./pages/GenerateRequest/AddNewSponsorPage.jsx";
import BundleOverviewPage from "./pages/GenerateRequest/BundleOverviewPage.jsx";
import RequestSentFinalPage from "./pages/GenerateRequest/RequestSentFinalPage.jsx";
import ShoppingPaymentPage from "./pages/GenerateRequest/ShoppingPaymentPage.jsx";
import ShoppingOrderEntryPage from "./pages/GenerateRequest/ShoppingOrderEntryPage.jsx";
import ItemsAddedPage from "./pages/GenerateRequest/ItemAddedPage.jsx";


function App() {
  return (
    <Routes>
      {/* Landing Page route */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        {/* Generate Request routes */}
        <Route path="generate-request" element={<GenerateRequestPage />} />
        <Route
          path="bundle-overview/:sponsorId"
          element={<BundleOverviewPage />}
        />
        <Route path="services" element={<AllServicesPage />} />
        <Route path="pay/:serviceType" element={<ServicePaymentPage />} />
        <Route path="referral" element={<ReferralPage />} />
        <Route path="bundle-success" element={<BundleSuccessPage />} />
        <Route path="sponsor-select" element={<SponsorSelectionPage />} />
        <Route path="add-sponsor" element={<AddNewSponsorPage />} />
        <Route path="request-sent-final" element={<RequestSentFinalPage />} />
        <Route path="pay/Shop Online" element={<ShoppingPaymentPage />} />
        <Route path="pay/Shop Online" element={<ShoppingPaymentPage />} />
        <Route
          path="pay/order-entry/:vendorName"
          element={<ShoppingOrderEntryPage />}
        />{" "}
        <Route path="item-added" element={<ItemsAddedPage />} />
        <Route
          path="under-construction/:serviceName"
          element={
            <div className="flex justify-center items-center p-30 text-3xl font-bold">
              Under Construction, check back later!
            </div>
          }
        />
        <Route path="transaction-history" element={<TransactionHistory />} />
        <Route path="schedule-bill" element={<ScheduleBill />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="help" element={<Help />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="service-provider" element={<ServiceProvider />} />
        <Route path="submit-request" element={<SubmitRequest />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* Authentication */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />

      {/* Partners registration */}
      <Route path="/welcome-partners" element={<WelcomePartners />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/get-started-partners" element={<GetStartedPartners />} />
    </Routes>
  );
}

export default App;
