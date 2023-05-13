import { getStarshipId } from "../../lib/utils/getStarshipId";
import EnvLink from "../common/EnvLink";
import { Contenidor } from "./LlistaItemStyled";

const LlistaItem = ({ starship }) => {
  

  return (
    <EnvLink
      to={"/starships/starship/" + getStarshipId(starship.url)}
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
