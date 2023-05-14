import { Container } from "../common/ContainerPageStyled";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";
import ListStarships from "../../components/ListStarships/ListStarships";

const StarShips = () => {
  useEffect(() => publish("starShipsClick"), []);

  return (
    <Container>
      <ListStarships />
    </Container>
  );
};
export default StarShips;
