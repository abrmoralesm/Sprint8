import { Container } from "./PaginationButtonStyled";

const Pagination = ({ page, setPage, next }) => (
  <Container>
    <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1}
    >
      Previous page
    </button>
    <span>{page}</span>
    <button
      onClick={() => {
        if (next) setPage((prev) => prev + 1);
      }}
      disabled={!next}
    >
      Next page
    </button>
  </Container>
);

export default Pagination;
