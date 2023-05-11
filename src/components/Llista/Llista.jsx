import { endPointsAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPI } from "../../lib/hooks/useFetchAPI";
import { Contenidor } from "./LlistaStyled";
import { useState } from "react";
import { getStarshipId } from "../../lib/utils/getStarshipId";
import EnvLink from "../common/EnvLink";
import Paginacio from "../Paginacio/Paginacio";

const Llista = () => {
  const [pagina, setPagina] = useState(1);
  console.log(pagina);
  const url = endPointsAPI.starships;
  const { dades, next, loading, error } = useFetchAPI(url, pagina);
  console.log(dades, next, loading, error);

  return (
    <Contenidor>
      {loading && <div style={{ textAlign: "center" }}>loading data...</div>}
      {error && <div style={{ textAlign: "center" }}>Error: {error}</div>}
      {dades && (
        <>
          <ul>
            {dades.map((starship, index) => (
              <div key={index}>
                <EnvLink
                  to={`/starships/${getStarshipId(starship.url)}`}
                  className='link'
                >
                  <li>{starship.name}</li>
                  <li>{starship.model}</li>
                </EnvLink>
              </div>
            ))}
          </ul>
          <Paginacio pagina={pagina} setPagina={setPagina} next={next} />
        </>
      )}
    </Contenidor>
  );
};

export default Llista;
