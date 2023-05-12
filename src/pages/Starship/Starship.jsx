import { useParams } from "react-router-dom";
import Detalls from "../../components/Detalls/Detalls.jsx";
import { Contenidor } from "../Starships/StarshipsStyled.jsx";


const Starship = () => {
  const { starshipId } = useParams();

  return (
    <Contenidor>
      <Detalls starshipId={starshipId} />
    </Contenidor>
  );
};

export default Starship;
