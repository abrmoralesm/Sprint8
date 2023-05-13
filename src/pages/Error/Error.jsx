import { Contenidor } from "../common/ContenidorPageStyled";
import VistaError from "../../components/VistaError/VistaError";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const Error = () => {
    useEffect(() => publish("none"), []);

  return (
    <Contenidor style={{ justifyContent: "center" }}>
      <VistaError />
    </Contenidor>
  );
};

export default Error;
