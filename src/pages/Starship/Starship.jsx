import { useParams } from "react-router-dom";
import { Contenidor } from "../Starships/StarshipsStyled.jsx";
import LlistaItem from "../../components/LlistaItem/LlistaItem";

const Starship = () => {
  const { starshipId } = useParams();

  return (
    <Contenidor>
      <LlistaItem starshipId={starshipId} />
    </Contenidor>
  );
};

export default Starship;
