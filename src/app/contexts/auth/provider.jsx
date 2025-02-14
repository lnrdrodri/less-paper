import { useCallback, useState } from "react";
import { localstorageKeys } from "../../config/localstorageKeys";
import { AuthContext } from "./context";
import { httpClient } from "../../services/httpClient";

export function AuthProvider({ children }) {
  const [loggedIn, setloggedIn] = useState(() => {
    return !!localStorage.getItem(localstorageKeys.TOKEN);
  });

  if(loggedIn) {
    const user = httpClient.get("/users/me");
    console.log(user);
  }
  
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