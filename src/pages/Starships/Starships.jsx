import { Contenidor } from "../common/ContenidorPageStyled";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";
import LlistaStarships from "../../components/LlistaStarships/LlistaStarships";

const StarShips = () => {
  useEffect(() => publish("starShipsClick"), []);

  return (
    <Contenidor>
      <LlistaStarships />
    </Contenidor>
  );
};
export default StarShips;
