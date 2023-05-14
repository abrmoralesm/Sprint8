import InfoPilots from "../InfoPilots/InfoPilots";
import { Container } from "./ListPilotsStyled";

const ListPilots = ({ urlPilots }) => (
  <Container>
    <h2 className='title-pilot'>Pilots</h2>
    {urlPilots &&
      (urlPilots.length === 0 ? (
        <p className='missatge'>no pilots available...</p>
      ) : (
        <ul className='llista-pilots'>
          {urlPilots.map((urlPilot, index) => (
            <InfoPilots key={index} urlPilot={urlPilot} />
          ))}
        </ul>
      ))}
  </Container>
);

export default ListPilots;
