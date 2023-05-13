import { useParams } from "react-router-dom";
import { Contenidor } from "../common/ContenidorPageStyled";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";
import DetallsStarship from "../../components/DetallsStarship/DetallsStarship.jsx";

const Starship = () => {
  const { starshipId } = useParams();
  useEffect(() => publish("none"), []);

  return (
    <Contenidor>
      <DetallsStarship starshipId={starshipId} />
    </Contenidor>
  );
};

export default Starship;
