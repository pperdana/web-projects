import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

interface AppContextType {
  fetchAdvice: () => Promise<void>;
  advice: string;
  adviceId: number | undefined;
}

const url = "https://api.adviceslip.com/advice";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC = ({ children }) => {
  const [advice, setAdvice] = useState<string>("random dad joke");
  const [adviceId, setAdviceId] = useState<number | undefined>(undefined);

  const fetchAdvice = async () => {
    try {
      const { data } = await axios.get<AdviceData>(url);
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <AppContext.Provider
      value={{
        fetchAdvice,
        advice,
        adviceId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider };
