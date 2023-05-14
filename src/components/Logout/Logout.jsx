import { useAutenticacioContext } from "../../context/autentitcacioContext";
import { useEffect } from "react";
import { Container } from "./LogoutStyled";
import { publish } from "../../lib/utils/cutomEvents";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout, usuariLoguejat } = useAutenticacioContext();
  const navega = useNavigate();

  useEffect(() => publish("none"), []);

  useEffect(() => {
    setTimeout(() => {
      if (usuariLoguejat !== null) {
        logout(usuariLoguejat);
        navega(process.env.PUBLIC_URL + "/");
      }
    }, 2000);
  }, [logout, usuariLoguejat, navega]);

  return (
    <Container>
      <p>User has logged out...</p>
      <p>Make the force be with you!</p>
    </Container>
  );
};

export default Logout;
