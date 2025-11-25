import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/UserDashboard.jsx";
import DashboardLayout from "./pages/dashboard/components/DashboardLayout.jsx";
import TransactionHistory from "./pages/dashboard/TransactionHistory.jsx";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Login from "./pages/auth/Login";
import UserProfile from './pages/dashboard/UserProfile.jsx'
import MyProfile from "./pages/dashboard/MyProfile.jsx";
import Help from "./pages/dashboard/Help.jsx";
import FAQ from "./pages/dashboard/FAQ.jsx";
import ServiceProvider from "./pages/dashboard/ServiceProvider.jsx";
import SubmitRequest from "./pages/dashboard/SubmitRequest.jsx";
import Notifications from "./pages/dashboard/Notifications.jsx";
import LandingPage from "./pages/LandingPage";
import ScheduleBill from "./pages/schedule/ScheduleBill";
import ScheduleBills from "./pages/schedule/ScheduledBills";
import BillDetails from "./pages/schedule/BillDetails";
import ReviewConfirmBill from "./pages/schedule/ReviewConfirmBill";
import WelcomePartners from "./pages/partners/WelcomePartners";
import ThankYou from "./pages/partners/ThankYou";
import GetStartedPartners from "./pages/partners/GetStartedPartners";
import Relationships from "./pages/relationship/Relationships";
import CreateRelationship from "./pages/relationship/CreateRelationship";
import MyRelationships from "./pages/relationship/MyRelationships";
import PaymentDetails from "./pages/relationship/PaymentDetails";
import EditSponsorProfile from "./pages/relationship/EditSponsorProfile";
import SponsorProfile from "./pages/relationship/SponsorProfile";
import BundleSuccessPage from "./pages/generate-request/BundleSuccessPage.jsx";
import GenerateRequestPage from "./pages/generate-request/GenerateRequestPage.jsx";
import AllServicesPage from "./pages/generate-request/AllServicesPage.jsx";
import ServicePaymentPage from "./pages/generate-request/ServicePaymentPage.jsx";
import ReferralPage from "./pages/generate-request/ReferralPage.jsx";
import SponsorSelectionPage from "./pages/generate-request/SponsorSelectionPage.jsx";
import AddNewSponsorPage from "./pages/generate-request/AddNewSponsorPage.jsx";
import BundleOverviewPage from "./pages/generate-request/BundleOverviewPage.jsx";
import RequestSentFinalPage from "./pages/generate-request/RequestSentFinalPage.jsx";
import ShoppingPaymentPage from "./pages/generate-request/ShoppingPaymentPage.jsx";
import ShoppingOrderEntryPage from "./pages/generate-request/ShoppingOrderEntryPage.jsx";
import ItemsAddedPage from "./pages/generate-request/ItemAddedPage.jsx";


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
        <Route path="schedule-bills" element={<ScheduleBills />} />
        <Route path="bill-details" element={<BillDetails />} />
        <Route path="confirm-details" element={<ReviewConfirmBill />} />
        <Route path="relationships" element={<Relationships />} />
        <Route path="create-relationship" element={<CreateRelationship />} />
        <Route path="my-relationships" element={<MyRelationships />} />
        <Route path="payment-details" element={<PaymentDetails />} />
        <Route path="edit-sponsor-profile" element={<EditSponsorProfile />} />
        <Route path="sponsor-profile" element={<SponsorProfile />} />
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
