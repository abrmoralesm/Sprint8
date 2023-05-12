import { useParams } from "react-router-dom";
import Detalls from "../../components/Detalls/Detalls.jsx";
import { Contenidor } from "../common/ContenidorPageStyled";


const Starship = () => {
  const { starshipId } = useParams();

  return (
    <Contenidor>
      <Detalls starshipId={starshipId} />
    </Contenidor>
  );
};

export default Starship;
