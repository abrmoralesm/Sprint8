import logo from "../../assets/img/logo-starwars.png";
import { Contenidor } from "./CapçaleraStyled";
import { useNavigate } from "react-router-dom";
import { useAutenticacioContext } from "../../context/autentitcacioContext";

const Capçalera = () => {
  const navega = useNavigate();
  const { usuariLoguejat } = useAutenticacioContext();

  return (
    <Contenidor>
      <div>
        <img src={logo} alt="logo Star Wars" />
      </div>
      <div>
        <button
          onClick={() =>
            usuariLoguejat === null
              ? navega(process.env.PUBLIC_URL + "/login")
              : navega(process.env.PUBLIC_URL + "/logout")
          }>
          {usuariLoguejat === null ? "log in" : "log out"}
        </button>
        <button onClick={() => navega(process.env.PUBLIC_URL + "/signup")}>
          sign up
        </button>
      </div>
    </Contenidor>
  );
        };
export default Capçalera;
