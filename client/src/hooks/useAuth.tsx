import { useContext } from "react";
import { AuthContext,AuthContextData } from "../providers/AuthProvider";

export default function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
