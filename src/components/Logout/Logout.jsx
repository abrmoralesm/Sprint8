import { useAutenticacioContext } from "../../context/autentitcacioContext";
import { useEffect } from "react";
import { Contenidor } from "./LogoutStyled";

const Logout = () => {
  const { logout, usuaris, usuariLoguejat } = useAutenticacioContext();
  useEffect(() => {
    if (usuariLoguejat !== null) logout(usuariLoguejat, usuaris);
    localStorage.setItem("usuaris", JSON.stringify(usuaris));
    localStorage.setItem("usuariLoguejat", JSON.stringify(usuariLoguejat));
  }, [logout, usuaris, usuariLoguejat]);

  return (
    <Contenidor>
      <p>User logged out...</p>
    </Contenidor>
  );
};

export default Logout;
