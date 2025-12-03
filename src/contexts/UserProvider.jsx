import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";


// Provider component
// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
  
//    // Login function - saves user data
//     const login = (userData) => {
//       setUser(userData);
//     };
  
//     // Logout function - clears user data
//     const logout = () => {
//       setUser(null);
//     };
  
//     // Update user function - for updating profile info
//     const updateUser = (updatedData) => {
//       const newUserData = { ...user, ...updatedData };
//       setUser(newUserData);
//     };
  
//     return (
//       <UserContext.Provider value={{ user, login, logout, updateUser }}>
//         {children}
//       </UserContext.Provider>
//     );
//   };

export const UserProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("urgent2kay_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("urgent2kay_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("urgent2kay_user");
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    // localStorage is automatically saved by useEffect above
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("urgent2kay_user");
  };

  const updateUser = (updatedData) => {
    const newUserData = { ...user, ...updatedData };
    setUser(newUserData);
    // localStorage is automatically saved by useEffect above
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};