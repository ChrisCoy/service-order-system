import React, { createContext, useState } from "react";
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
      .then(({ data }) => {
        localStorage.setItem("@SO-System:accessToken", JSON.stringify(data.accessToken));
        const userDecoded: IUser = JwtDecode(data.accessToken);
        setUser({
          name: userDecoded.name,
          _id: userDecoded._id,
          isAdmin: userDecoded.isAdmin,
          role: user.role,
        });
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
        setIsAuth(false);
        setUser({} as IUser);
        if (err.response?.data) {
          Toast.error(JSON.stringify(err.response.data?.err));
        } else {
          Toast.error("Connection error.");
        }
      });
  }

  function validateSession() {
    const token = localStorage.getItem("@SO-System:accessToken") as string;
    try {
      Api.post("validate", {
        accessToken: JSON.parse(token),
      })
        .then(() => {
          const userDecoded: IUser = JwtDecode(
            localStorage.getItem("@SO-System:accessToken") || ""
          );
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
          console.log(err);
          setIsAuth(false);
          setUser({} as IUser);
          if (err.response?.data) {
            Toast.error(JSON.stringify(err.response.data?.err));
          } else {
            Toast.error("Connection error.");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function logOut() {
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
