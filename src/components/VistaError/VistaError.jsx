import { Container, ContainerImg, Img } from "./VistaErrorStyled";
import error404 from "../../assets/img/starWars_404.webp";
import { useNavigate } from "react-router-dom";

const VistaError = () => {
  const navega = useNavigate();

  return (
    <Container>
      <ContainerImg>
        <Img src={error404} alt='error 404' />
      </ContainerImg>
      <button onClick={() => navega(process.env.PUBLIC_URL + "/")}>Home</button>
    </Container>
  );
};

export default VistaError;
