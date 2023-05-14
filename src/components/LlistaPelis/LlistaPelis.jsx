import DetallsPeli from "../DetallsPeli/DetallsPeli";
import { Contenidor } from "./LlistaPelisStyled";

const LlistaPelis = ({ urlPelis }) => (
  <Contenidor>
    <h2 className='titol-peli'>Movies</h2>
    {urlPelis &&
      (urlPelis.length === 0 ? (
        <p className='missatge'>no movies available...</p>
      ) : (
        <ul className='llista-pelis'>
          {urlPelis.map((urlPeli, index) => (
            <DetallsPeli key={index} urlPeli={urlPeli} />
          ))}
        </ul>
      ))}
  </Contenidor>
);

export default LlistaPelis;
