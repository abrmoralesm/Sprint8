import { useFetchAPI } from "../../lib/hooks/useFetchAPI";
import { Contenidor } from "./LlistaStyled";
import LlistaItem from "../LlistaItem/LlistaItem";
import { useState } from "react";
import { endPointsAPI } from "../../lib/constants/endPointsAPI";
import Paginacio from "../Paginacio/PaginacioBotoMore";
import Missatge from "../common/Missatge";

const Llista = () => {
  const [pagina, setPagina] = useState(1);
  const url = endPointsAPI.starships;
  const { dades, next, loading, error } = useFetchAPI(url, pagina);
  console.log(dades, loading, error, pagina);

  return (
    <div>
      {loading && <Missatge text={"loading data..."} />}
      {error && <Missatge text={"Error loading data:"} error={error} />}
      <Contenidor>
        {dades && !loading && !error && (
          <>
            <ul>
              {dades.map((starship, index) => (
                <LlistaItem key={index} starship={starship} />
              ))}
            </ul>
            <Paginacio pagina={pagina} setPagina={setPagina} next={next} />
          </>
        )}
      </Contenidor>
    </div>
  );
};

export default Llista;