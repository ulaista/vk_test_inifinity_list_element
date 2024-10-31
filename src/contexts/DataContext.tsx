import React, { createContext, useContext } from "react";
import dataStore from "../stores/DataStore";

const DataContext = createContext(dataStore);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);