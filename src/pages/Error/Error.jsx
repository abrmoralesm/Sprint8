import { useNavigate } from "react-router-dom";
import { Contenidor, ContenidorImg, Img } from "./ErrorStyled";
import error404 from "../../assets/img/starWars_404.webp";

const Error = () => {
  const navega = useNavigate();
  return (
    <Contenidor>
      <ContenidorImg>
        <Img src={error404} alt="error 404" />
      </ContenidorImg>
      <button onClick={() => navega(process.env.PUBLIC_URL + "/")}>
        Home
      </button>
    </Contenidor>
  );
};

export default Error;
