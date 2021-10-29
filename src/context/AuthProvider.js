import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useTours from "../hooks/useTours";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseData = useFirebase();
  const toursData = useTours();
  return <AuthContext.Provider value={{firebaseData, toursData}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
