import { Contenidor } from "./PaginacioBotonsStyled";

const Paginacio = ({ pagina, setPagina }) => (
  <Contenidor>
    <button
      onClick={() => {
        if (pagina < 4) setPagina((prev) => prev + 1);
      }}
      disabled={pagina >= 4}
    >
      {pagina >= 4 ? "No more data..." : "View more..."}
    </button>
  </Contenidor>
);

export default Paginacio;
