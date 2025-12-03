import React, { createContext, useContext, useState, useEffect } from "react";

const RelationshipsContext = createContext();

const STORAGE_KEY = 'urgent2kay_relationships';
const MAIN_SPONSOR_KEY = 'urgent2kay_main_sponsor';

export const RelationshipsProvider = ({ children }) => {
  // Initialize from localStorage
  const [relationships, setRelationships] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [mainSponsorId, setMainSponsorId] = useState(() => {
    return localStorage.getItem(MAIN_SPONSOR_KEY) || null;
  });

  // Save to localStorage whenever relationships change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(relationships));
  }, [relationships]);

  // Save main sponsor ID
  useEffect(() => {
    if (mainSponsorId) {
      localStorage.setItem(MAIN_SPONSOR_KEY, mainSponsorId);
    } else {
      localStorage.removeItem(MAIN_SPONSOR_KEY);
    }
  }, [mainSponsorId]);

  // Add new relationship
  const addRelationship = (relationshipData) => {
    const newRelationship = {
      id: Date.now().toString(), // Simple unique ID
      ...relationshipData,
      createdAt: new Date().toISOString()
    };
    setRelationships(prev => [...prev, newRelationship]);
    return newRelationship.id;
  };

  // Update existing relationship
  const updateRelationship = (id, updatedData) => {
    setRelationships(prev =>
      prev.map(rel =>
        rel.id === id ? { ...rel, ...updatedData, updatedAt: new Date().toISOString() } : rel
      )
    );
  };

  // Delete relationship
  const deleteRelationship = (id) => {
    setRelationships(prev => prev.filter(rel => rel.id !== id));
    // If deleted sponsor was main sponsor, clear main sponsor
    if (mainSponsorId === id) {
      setMainSponsorId(null);
    }
  };

  // Get relationship by ID
  const getRelationshipById = (id) => {
    return relationships.find(rel => rel.id === id);
  };

  // Set main sponsor
  const setMainSponsor = (id) => {
    setMainSponsorId(id);
  };

  // Remove main sponsor
  const removeMainSponsor = () => {
    setMainSponsorId(null);
  };

  // Get main sponsor
  const getMainSponsor = () => {
    if (!mainSponsorId) return null;
    return relationships.find(rel => rel.id === mainSponsorId);
  };

  // Check if sponsor is main
  const isMainSponsor = (id) => {
    return mainSponsorId === id;
  };

  return (
    <RelationshipsContext.Provider
      value={{
        relationships,
        addRelationship,
        updateRelationship,
        deleteRelationship,
        getRelationshipById,
        setMainSponsor,
        removeMainSponsor,
        getMainSponsor,
        isMainSponsor,
        mainSponsorId
      }}
    >
      {children}
    </RelationshipsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRelationships = () => {
  const context = useContext(RelationshipsContext);
  if (!context) {
    throw new Error("useRelationships must be used within RelationshipsProvider");
  }
  return context;
};