import { Routes, Route } from 'react-router';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './pages/Dashboard/components/DashboardLayout';
import TransactionHistory from './pages/Dashboard/TransactionHistory';


import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      {/* Landing Page route */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transaction-history" element={<TransactionHistory />} />
      </Route>
    </Routes>
  );
}

export default App;