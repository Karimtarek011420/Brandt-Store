import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
export default function AuthContextProvider({ children }) {
  const [token, settoken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("tkn");
    if (token) {
      settoken(token);
    }
  }, []);
  return (
    <authContext.Provider value={{ token, settoken }}>
      {children}
    </authContext.Provider>
  );
}
