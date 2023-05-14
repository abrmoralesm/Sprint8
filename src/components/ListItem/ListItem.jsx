import { getItemId } from "../../lib/utils/getItemId";
import { Container } from "./ListItemStyled";
import EnvLink from "../common/EnvLink";

const ListItem = ({ starship }) => (
  <EnvLink
    to={"/starships/starship/" + getItemId(starship.url)}
    className='link'
  >
    <Container>
      <li>{starship.name}</li>
      <li>{starship.model}</li>
    </Container>
  </EnvLink>
);

export default ListItem;
