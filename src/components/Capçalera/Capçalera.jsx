import logo from "../../assets/img/logo-starwars.png";
import { Contenidor } from "./CapçaleraStyled";
import { useAutenticacioContext } from "../../context/autentitcacioContext";
import EnvLink from "../common/EnvLink";

const Capçalera = () => {
  const { usuariLoguejat } = useAutenticacioContext();

  return (
    <Contenidor>
      <div>
        <img src={logo} alt='logo Star Wars' />
      </div>
      <div className='div2'>
        <EnvLink
          className='link'
          to={
            usuariLoguejat === null ? "/auth/login" : "/starships/auth/logout"
          }
        >
          <button>{usuariLoguejat === null ? "log in" : "log out"}</button>
        </EnvLink>
        <EnvLink className='link' to={"/auth/signup"}>
          <button>sign up</button>
        </EnvLink>
      </div>
    </Contenidor>
  );
        };
export default Capçalera;
