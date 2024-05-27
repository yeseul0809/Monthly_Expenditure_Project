import React, { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState("");
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider
      value={{ activeIndex, setActiveIndex, data, setData }}
    >
      {children}
    </DataContext.Provider>
  );
};
