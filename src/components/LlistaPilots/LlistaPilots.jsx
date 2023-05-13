import DetallsPilot from "../DetallsPilot/DetallsPilot";
import { Contenidor } from "./LlistaPilotsStyled";

const LlistaPilots = ({ urlPilots }) => (
  <Contenidor>
    <h2 className='titol-pilot'>Pilots</h2>
    {urlPilots &&
      (urlPilots.length === 0 ? (
        <p className='missatge'>no pilots available...</p>
      ) : (
        <ul className='llista-pilots'>
          {urlPilots.map((urlPilot, index) => (
            <DetallsPilot key={index} urlPilot={urlPilot} />
          ))}
        </ul>
      ))}
  </Contenidor>
);

export default LlistaPilots;
