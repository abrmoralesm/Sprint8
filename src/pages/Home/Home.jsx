import { Contenidor } from "../common/ContenidorPageStyled";
import Wellcome from "../../components/Wellcome/Wellcome";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const Home = () => {
  useEffect(() => publish("homeClick"), []);

  return (
    <Contenidor>
      <Wellcome/>
    </Contenidor>
  );
};

export default Home;
