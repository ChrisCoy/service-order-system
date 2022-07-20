import React, { createContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextData {
  isAuth: boolean;
  authenticate: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState(false);

  function authenticate() {
    setIsAuth(true);
  }

  return (
    <AuthContext.Provider value={{ isAuth, authenticate }}>{children}</AuthContext.Provider>
  );
}
