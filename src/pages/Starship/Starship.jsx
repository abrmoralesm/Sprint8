import { useParams } from "react-router-dom";
import { Container } from "../common/ContainerPageStyled";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";
import ConfigStarship from "../../components/ConfigStarship/ConfigStarship.jsx";

const Starship = () => {
  const { starshipId } = useParams();
  useEffect(() => publish("none"), []);

  return (
    <Container>
      <ConfigStarship starshipId={starshipId} />
    </Container>
  );
};

export default Starship;
