// src/contexts/BillsContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const BillsContext = createContext();

const STORAGE_KEY = 'urgent2kay_bills';

export const BillsProvider = ({ children }) => {
  // Initialize from localStorage
  const [bills, setBills] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever bills change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bills));
  }, [bills]);

  // Add new bill
  const addBill = (billData) => {
    const newBill = {
      id: Date.now().toString(),
      ...billData,
      status: billData.status || "Pending",
      createdAt: new Date().toISOString()
    };
    setBills(prev => [...prev, newBill]);
    return newBill.id;
  };

  // Update existing bill
  const updateBill = (id, updatedData) => {
    setBills(prev =>
      prev.map(bill =>
        bill.id === id ? { ...bill, ...updatedData, updatedAt: new Date().toISOString() } : bill
      )
    );
  };

  // Delete bill
  const deleteBill = (id) => {
    setBills(prev => prev.filter(bill => bill.id !== id));
  };

  // Get bill by ID
  const getBillById = (id) => {
    return bills.find(bill => bill.id === id);
  };

  // Update bill status
  const updateBillStatus = (id, status) => {
    updateBill(id, { status });
  };

  // Get bills by status
  const getBillsByStatus = (status) => {
    return bills.filter(bill => bill.status === status);
  };

  // Get bills by sponsor
  const getBillsBySponsor = (sponsorId) => {
    return bills.filter(bill => bill.sponsorId === sponsorId);
  };

  // Get today's bills
  const getTodaysBills = () => {
    const today = new Date().toDateString();
    return bills.filter(bill => {
      const billDate = new Date(bill.scheduledDate).toDateString();
      return billDate === today;
    });
  };

  return (
    <BillsContext.Provider
      value={{
        bills,
        addBill,
        updateBill,
        deleteBill,
        getBillById,
        updateBillStatus,
        getBillsByStatus,
        getBillsBySponsor,
        getTodaysBills
      }}
    >
      {children}
    </BillsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBills = () => {
  const context = useContext(BillsContext);
  if (!context) {
    throw new Error("useBills must be used within BillsProvider");
  }
  return context;
};