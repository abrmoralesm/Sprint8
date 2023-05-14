import { Container } from "../common/ContainerPageStyled";
import Wellcome from "../../components/Wellcome/Wellcome";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const Home = () => {
  useEffect(() => publish("homeClick"), []);

  return (
    <Container>
      <Wellcome />
    </Container>
  );
};

export default Home;
