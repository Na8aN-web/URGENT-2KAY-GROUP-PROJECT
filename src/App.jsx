import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/components/DashboardLayout";
import TransactionHistory from "./pages/Dashboard/TransactionHistory";
import SignUp from "./pages/auth/SignUp";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Login from "./pages/auth/Login";
import LandingPage from './pages/LandingPage';
import ScheduleBill from "./pages/schedule/ScheduleBill";
import ScheduleBills from "./pages/schedule/ScheduledBills";
import BillDetails from "./pages/schedule/BillDetails";
import ReviewConfirmBill from "./pages/schedule/ReviewConfirmBill";


function App() {
  return (
    <Routes>
      {/* Landing Page route */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transaction-history" element={<TransactionHistory />} />
        <Route path="schedule-bill" element={<ScheduleBill />} />
        <Route path="schedule-bills" element={<ScheduleBills />} />
        <Route path="bill-details" element={<BillDetails />} />
        <Route path="confirm-details" element={<ReviewConfirmBill />} />
      </Route>

      {/* Authentication */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
