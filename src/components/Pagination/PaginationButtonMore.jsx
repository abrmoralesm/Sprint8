import { Container } from "./PaginationButtonStyled";

const Pagination = ({ page, setPage }) => (
  <Container>
    <button
      onClick={() => {
        if (page < 4) setPage((prev) => prev + 1);
      }}
      disabled={page >= 4}
    >
      {page >= 4 ? "No more data..." : "View more..."}
    </button>
  </Container>
);

export default Pagination;
