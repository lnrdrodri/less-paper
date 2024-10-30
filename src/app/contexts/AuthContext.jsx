import { createContext, useCallback, useState } from "react";
import { localstorageKeys } from "../config/localstorageKeys";

export const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
});

export function AuthProvider({ children }) {
  const [loggedIn, setloggedIn] = useState(() => {
    return !!localStorage.getItem(localstorageKeys.TOKEN);
  });
  
  const login = useCallback((token) => {
    localStorage.setItem(localstorageKeys.TOKEN, token);
    setloggedIn(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(localstorageKeys.TOKEN);
    setloggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
