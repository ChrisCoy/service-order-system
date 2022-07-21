import React, { createContext, useEffect, useState } from "react";
import useToast from "../hooks/useToast";
import Api from "../services/api";
import { IUser } from "../types/UserTypes";
import JwtDecode from "jwt-decode";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextData {
  isAuth: boolean;
  user: IUser;
  login: (username: string, password: string) => void;
  validateSession: () => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const Toast = useToast();

  function login(email: string, password: string) {
    Api.post("login", { email, password })
      .then(() => {
        const userDecoded: IUser = JwtDecode(document.cookie);
        setUser({
          name: userDecoded.name,
          _id: userDecoded._id,
          isAdmin: userDecoded.isAdmin,
          role: user.role,
        });
        setIsAuth(true);
      })
      .catch((err) => {
        setIsAuth(false);
        setUser({} as IUser);
        Toast.error(JSON.stringify(err.response.data?.err) || "Connection error.");
      });
  }

  function validateSession() {
    Api.post("validate")
      .then(() => {
        const userDecoded: IUser = JwtDecode(document.cookie);
        setUser({
          name: userDecoded.name,
          _id: userDecoded._id,
          isAdmin: userDecoded.isAdmin,
          role: user.role,
        });

        if (!isAuth) {
          setIsAuth(true);
        }
      })
      .catch((err) => {
        setIsAuth(false);
        setUser({} as IUser);
        Toast.error(JSON.stringify(err.response.data?.err) || "Connection error.");
      });
  }

  function logOut() {
    const date = Date.now().valueOf();
    document.cookie = "access-token=";
    setIsAuth(false);
    setUser({} as IUser);
    Toast.info("Success When Leaving");
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, user, validateSession, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
