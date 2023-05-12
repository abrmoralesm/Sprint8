import { createContext, useContext, useState } from "react";
import { loginF } from "../lib/utils/login";
import { signUpF } from "../lib/utils/singUp";
import { logoutF } from "../lib/utils/logout";

export const AutenticacioContext = createContext();
export const useAutenticacioContext = () => useContext(AutenticacioContext);

const AutenticacioContextProvider = ({ children }) => {
  const [dadesUsuaris, setDadesUsuaris] = useState({
    usuariLoguejat: JSON.parse(localStorage.getItem("usuariLoguejat")) ?? null,
    usuaris: JSON.parse(localStorage.getItem("usuaris")) ?? [],
  });
  const { usuaris, usuariLoguejat } = dadesUsuaris;

  const login = (usuari, claudePas) =>
    loginF(usuari, claudePas, usuaris, setDadesUsuaris);
  const signUp = (usuari, claudePas) =>
    signUpF(usuari, claudePas, usuaris, setDadesUsuaris);
  const logout = (usuariLoguejat, usuaris) =>
    logoutF(usuariLoguejat, usuaris, setDadesUsuaris);

  const value = {
    login,
    signUp,
    logout,
    usuaris,
    usuariLoguejat,
  };

  return (
    <AutenticacioContext.Provider value={value}>
      {children}
    </AutenticacioContext.Provider>
  );
};

export default AutenticacioContextProvider;
