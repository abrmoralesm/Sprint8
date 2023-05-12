import { Contenidor } from "./PaginacioBotonsStyled";

const Paginacio = ({ pagina, setPagina, next }) => {
  return (
    <Contenidor>
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
    </Contenidor>
  );
};

export default Paginacio;
