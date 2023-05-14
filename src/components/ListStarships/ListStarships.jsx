import { useEffect, useState } from "react";
import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPI } from "../../lib/hooks/useFetchAPI";
import { publish } from "../../lib/utils/cutomEvents";
import { Container } from "./ListStarshipsStyled";
import ListItem from "../ListItem/ListItem";
import Pagination from "../Pagination/PaginationButtonMore";
import Message from "../common/Message";

const ListStarships = () => {
  const [page, setPage] = useState(1);
  const url = ENDPOINTSAPI.starships;
  const { dates, loading, error } = useFetchAPI(url, page);

  useEffect(() => publish("starShipsClick"), [dates]);

  return (
    <div>
      {loading && <Message text={"loading data..."} />}
      {error && <Message text={"Error loading data:"} error={error} />}
      {dates && !loading && !error && (
        <Container>
          <ul>
            {dates.map((starship, index) => (
              <ListItem key={index} starship={starship} />
            ))}
          </ul>
          <Pagination page={page} setPage={setPage} />
        </Container>
      )}
    </div>
  );
};

export default ListStarships;
