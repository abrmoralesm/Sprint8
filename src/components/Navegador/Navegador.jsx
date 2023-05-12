import { Contenidor } from "./NavegadorStyled";
import EnvLink from "../common/EnvLink";
import { useReducer } from 'react';
import { switchLinkNav } from '../../lib/utils/switchLinkNav';

const Navegador = () => {

  const [state, dispatch] = useReducer(switchLinkNav, { home: true, starShips: false });
  const { home, starShips } = state;

  return (
    <Contenidor>
      <ul>
        <li
          onClick={() => dispatch({type: "homeClick"})}
          className={home ? "actiu" : ""}>
          <EnvLink className="link" to="">Home</EnvLink>
        </li>
        <li
          onClick={() => dispatch({type: "starShipsClick"})}
          className={starShips ? "actiu" : ""}>
          <EnvLink className="link" to="/starships">Starships</EnvLink>
        </li>
      </ul>
    </Contenidor>
  );
};
export default Navegador;
