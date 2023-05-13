import { Contenidor, ContenidorImg, Img } from "./VistaErrorStyled";
import error404 from "../../assets/img/starWars_404.webp";
import { useNavigate } from "react-router-dom";

const VistaError = () => {
  const navega = useNavigate();
  
  return (
    <Contenidor>
      <ContenidorImg>
        <Img src={error404} alt='error 404' />
      </ContenidorImg>
      <button onClick={() => navega(process.env.PUBLIC_URL + "/")}>Home</button>
    </Contenidor>
  );
};

export default VistaError;
