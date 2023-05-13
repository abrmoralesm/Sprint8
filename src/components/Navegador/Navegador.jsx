import { Contenidor } from "./NavegadorStyled";
import EnvLink from "../common/EnvLink";
import { useReducer, useEffect } from 'react';
import { switchLinkNav } from '../../lib/utils/switchLinkNav';
import { subscribe, unsubscribe } from "../../lib/utils/cutomEvents";

const Navegador = () => {

   const [state, dispatch] = useReducer(switchLinkNav, {
     home: true,
     starShips: false,
   });
  const { home, starShips } = state;

  useEffect(() => {
    subscribe("starShipsClick", () => dispatch({ type: "starShipsClick" }));
    subscribe("none", () => dispatch({ type: "none" }));
    subscribe("homeClick", () => dispatch({ type: "homeClick" }));

    return () => {
      unsubscribe("starShipsClick", () => dispatch({ type: "default" }));
      unsubscribe("none", () => dispatch({ type: "default" }));
      unsubscribe("homeClick", () => dispatch({ type: "default" }));
    };
  }, [state]);


  return (
    <Contenidor>
      <ul>
        <li
          onClick={() => dispatch({  type: "homeClick" })}
          className={home ? "actiu" : ""}>
          <EnvLink className="link" to="">
             Home
          </EnvLink>
        </li>
        <li
          onClick={() => dispatch({  type: "starShipsClick"})}
          className={starShips ? "actiu" : ""}>
          <EnvLink className="link" to="/starships">
            Starships
          </EnvLink>
        </li>
      </ul>
    </Contenidor>
  );
};
export default Navegador;
