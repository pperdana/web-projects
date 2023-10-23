import axios, { AxiosError } from "axios";
import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
} from "react";

interface AdviceData {
  slip: {
    id: number;
    advice: string;
  };
}

interface AppContextType {
  fetchAdvice: () => Promise<void>;
  advice: string;
  adviceId?: number;
  error: AxiosError | null; // Define AxiosError for the error property
}

const url = "https://api.adviceslip.com/advice";

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [advice, setAdvice] = useState<string>("random dad joke");
  const [adviceId, setAdviceId] = useState<number | undefined>(undefined);
  const [error, setError] = useState<AxiosError | null>(null); // Initialize with AxiosError

  const fetchAdvice = async () => {
    try {
      const { data } = await axios.get<AdviceData>(url);
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
      setError(null); // Clear any previous errors on success
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
        console.error(error.response);
      } else {
        console.error(error);
      }
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
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider };
