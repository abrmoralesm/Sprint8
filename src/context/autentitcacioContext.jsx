import { createContext, useContext, useState } from "react";
import { loginF } from "../lib/utils/login";
import { signUpF } from "../lib/utils/singUp";
import { logoutF } from "../lib/utils/logout";
import { useNavigate } from "react-router-dom";

export const AutenticacioContext = createContext();
export const useAutenticacioContext = () => useContext(AutenticacioContext);

const AutenticacioContextProvider = ({ children }) => {
  const [datesUsers, setDatesUsers] = useState({
    usuariLoguejat: JSON.parse(localStorage.getItem("usuariLoguejat")) ?? null,
    usuaris: JSON.parse(localStorage.getItem("usuaris")) ?? [],
  });
  const { usuaris, usuariLoguejat } = datesUsers;
  const navega = useNavigate();

  const login = (user, keyPass) =>
    loginF(user, keyPass, datesUsers, setDatesUsers, navega);
  const signUp = (user, keyPass) =>
    signUpF(user, keyPass, datesUsers, setDatesUsers, navega);
  const logout = (usuariLoguejat) =>
    logoutF(usuariLoguejat, datesUsers, setDatesUsers);

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
