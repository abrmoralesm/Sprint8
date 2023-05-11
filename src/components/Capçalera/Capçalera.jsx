import logo from "../../assets/img/logo-starwars.png";
import { Contenidor } from "./CapçaleraStyled";

const Capçalera = () => (
  <Contenidor>
    <div>
      <img src={logo} alt="logo Star Wars" />
    </div>
    <div>
      <button>log in</button>
      <button>sign up</button>
    </div>
  </Contenidor>
);

export default Capçalera;
