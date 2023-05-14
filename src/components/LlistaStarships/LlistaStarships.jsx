import { useEffect, useState } from "react";
import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPI } from "../../lib/hooks/useFetchAPI";
import { publish } from "../../lib/utils/cutomEvents";
import { Contenidor } from "./LlistaStarshipsStyled";
import LlistaItem from "../LlistaItem/LlistaItem";
import Paginacio from "../Paginacio/PaginacioBotoMore";
import Missatge from "../common/Missatge";

const LlistaStarships = () => {
  const [pagina, setPagina] = useState(1);
  const url = ENDPOINTSAPI.starships;
  const { dades, loading, error } = useFetchAPI(url, pagina);

  useEffect(() => publish("starShipsClick"), [dades]);

  return (
    <div>
      {loading && <Missatge text={"loading data..."} />}
      {error && <Missatge text={"Error loading data:"} error={error} />}
      {dades && !loading && !error && (
        <Contenidor>
          <ul>
            {dades.map((starship, index) => (
              <LlistaItem key={index} starship={starship} />
            ))}
          </ul>
          <Paginacio pagina={pagina} setPagina={setPagina} />
        </Contenidor>
      )}
    </div>
  );
};

export default LlistaStarships;
