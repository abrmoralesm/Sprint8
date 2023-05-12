import { getStarshipId } from "../../lib/utils/getStarshipId";
import EnvLink from "../common/EnvLink";
import { Contenidor } from "./LlistaItemStyled";
import { publish } from "../../lib/utils/customEvents";

const LlistaItem = ({ starship }) => {
  const handleStarship = () => {
    publish("starShipClick");
  };

  return (
    <EnvLink
      to={`/starships/${getStarshipId(starship.url)}`}
      onClick={handleStarship}
      className='link'
    >
      <Contenidor>
        <li>{starship.name}</li>
        <li>{starship.model}</li>
      </Contenidor>
    </EnvLink>
  );
};

export default LlistaItem;
