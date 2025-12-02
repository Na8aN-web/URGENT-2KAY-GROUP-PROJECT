import React, { useState } from "react";
import { UserContext } from "./UserContext";


// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
   // Login function - saves user data
    const login = (userData) => {
      setUser(userData);
    };
  
    // Logout function - clears user data
    const logout = () => {
      setUser(null);
    };
  
    // Update user function - for updating profile info
    const updateUser = (updatedData) => {
      const newUserData = { ...user, ...updatedData };
      setUser(newUserData);
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout, updateUser }}>
        {children}
      </UserContext.Provider>
    );
  };