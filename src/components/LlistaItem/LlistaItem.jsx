
import { getItemId } from "../../lib/utils/getItemId";
import { Contenidor } from "./LlistaItemStyled";
import EnvLink from "../common/EnvLink";

const LlistaItem = ({ starship }) => {
  

  return (
    <EnvLink
      to={"/starships/starship/" + getItemId(starship.url)}
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
