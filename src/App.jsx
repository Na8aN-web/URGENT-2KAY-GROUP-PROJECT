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
import LandingPage from './pages/LandingPage';
import ScheduleBill from "./pages/schedule/ScheduleBill";
import WelcomePartners from "./pages/partners/WelcomePartners";
import ThankYou from "./pages/partners/ThankYou";
import GetStartedPartners from "./pages/partners/GetStartedPartners";
import Relationships from "./pages/relationship/Relationships";
import CreateRelationship from "./pages/relationship/CreateRelationship";
import MyRelationships from "./pages/relationship/MyRelationships";
import PaymentDetails from "./pages/relationship/PaymentDetails";
import EditSponsorProfile from "./pages/relationship/EditSponsorProfile";
import SponsorProfile from "./pages/relationship/SponsorProfile";

function App() {
  return (
    <Routes>
      {/* Landing Page route */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transaction-history" element={<TransactionHistory />} />
        <Route path="schedule-bill" element={<ScheduleBill />} />
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
