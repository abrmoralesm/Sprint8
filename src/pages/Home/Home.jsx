import { Contenidor } from "../common/ContenidorPageStyled";
import Benvinguda from "../../components/Benvinguda/Benvinguda";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const Home = () => {
  useEffect(() => publish("homeClick"), []);

  return (
    <Contenidor>
      <Benvinguda />
    </Contenidor>
  );
};

export default Home;
