import logo from "../../assets/img/logo-starwars.png";
import { Container } from "./HeaderStyled";
import { useAutenticacioContext } from "../../context/autentitcacioContext";
import EnvLink from "../common/EnvLink";

const Header = () => {
  const { usuariLoguejat } = useAutenticacioContext();

  return (
    <Container>
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
    </Container>
  );
};
export default Header;
