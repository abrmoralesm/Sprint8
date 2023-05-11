import { endPointsAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPI } from "../../lib/hooks/useFetchAPI";
import { Contenidor, ContenidorBotons } from "./LlistaStyled";
import { useState } from 'react';
import EnvLink from '../common/EnvLink';

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
                <li>{starship.name}</li>
                <li>{starship.model}</li>
              </div>
            ))}
          </ul>
          <ContenidorBotons ContenidorBotons>
            <button
              onClick={() => setPagina((prev) => Math.max(prev - 1, 1))}
              disabled={pagina === 1}>
              Previous page
            </button>
            <span>{pagina}</span>
            <button
              onClick={() => {
                if (next) setPagina((prev) => prev + 1);
              }}
              disabled={!next}>
              Next page
            </button>
          </ContenidorBotons>
        </>
      )}
    </Contenidor>
  );
};

export default Llista;
