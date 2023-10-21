import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const url = "https://api.adviceslip.com/advice";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [advice, setAdvice] = useState("random dad joke");
  const [adviceId, setAdviceId] = useState();

  const fetchAdvice = async () => {
    try {
      const { data } = await axios(url);
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

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
