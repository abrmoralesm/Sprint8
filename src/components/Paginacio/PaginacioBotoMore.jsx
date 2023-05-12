import { Contenidor } from "./PaginacioBotonsStyled";

const Paginacio = ({ pagina, setPagina }) => {
  return (
    <Contenidor>
      <button
        onClick={() => {
          if (pagina < 4) setPagina((prev) => prev + 1);
        }}
        disabled={pagina >= 4}>
        View more...
      </button>
    </Contenidor>
  );
};

export default Paginacio;
