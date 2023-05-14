import styled from "styled-components";

export const Contenidor = styled.div`
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.colors.fonsFosc};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  font-size: 1.3rem;
  padding: 4rem 4rem 3rem;

  a {
    text-decoration: none;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.lletraGlobal};
  }

  p:nth-of-type(1) {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }

  ul:nth-of-type(1) {
    gap: 3rem;
    margin-bottom: 4rem;

    li:nth-child(5) {
      padding-left: 2rem;
      border-left: 0.1rem solid ${({ theme }) => theme.colors.divisor};
    }
  }

  ul:nth-of-type(2) {
    gap: 2rem;

    li {
      padding-right: 2rem;
      border-right: 0.1rem solid ${({ theme }) => theme.colors.divisor};
    }

    li:last-child {
      border-right: none;
    }

    a {
      height: 100%;
      font-size: 1.1rem;
      padding-bottom: 0.15rem;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.vora};
    }

    a:hover {
      border-bottom: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    ul:nth-of-type(2) {
      width: 40rem;
      margin-top: 0.75rem;

      li:nth-child(3) {
        border-right: none;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.amplada.movil}) {
    ul:nth-of-type(1) {
      gap: 2rem;
      margin-bottom: 3rem;
    }

    ul:nth-of-type(2) {
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;

      li {
        border-right: none;
      }
    }
  }
`;
