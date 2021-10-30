import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useTours from "../hooks/useTours";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseData = useFirebase();
  const toursData = useTours();

  const data = { firebaseData, toursData };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
