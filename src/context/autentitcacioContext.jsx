import { createContext, useContext, useState } from "react";
import { loginF } from "../lib/utils/login";
import { signUpF } from "../lib/utils/singUp";
import { logoutF } from "../lib/utils/logout";
import { useNavigate } from "react-router-dom";


export const AutenticacioContext = createContext();
export const useAutenticacioContext = () => useContext(AutenticacioContext);

const AutenticacioContextProvider = ({ children }) => {
  const [dadesUsuaris, setDadesUsuaris] = useState({
    usuariLoguejat: JSON.parse(localStorage.getItem("usuariLoguejat")) ?? null,
    usuaris: JSON.parse(localStorage.getItem("usuaris")) ?? [],
  });
  const { usuaris, usuariLoguejat } = dadesUsuaris;
  const navega = useNavigate();

  const login = (usuari, claudePas) =>
    loginF(usuari, claudePas, dadesUsuaris, setDadesUsuaris, navega);
  const signUp = (usuari, claudePas) =>
    signUpF(usuari, claudePas, dadesUsuaris, setDadesUsuaris, navega);
  const logout = (usuariLoguejat) =>
    logoutF(usuariLoguejat, dadesUsuaris, setDadesUsuaris);

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
