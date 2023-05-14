import { Container } from "../common/ContainerPageStyled";
import VistaError from "../../components/VistaError/VistaError";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const Error = () => {
  useEffect(() => publish("none"), []);

  return (
    <Container style={{ justifyContent: "center" }}>
      <VistaError />
    </Container>
  );
};

export default Error;
