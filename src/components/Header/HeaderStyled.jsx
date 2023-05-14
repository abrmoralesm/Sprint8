import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.fonsFosc};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  div:nth-child(1) {
    width: 100%;
    display: block;
    text-align: center;
  }

  .div2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-left: -18rem;
    margin-right: 2rem;
  }

  img {
    max-height: 8rem;
    min-height: 5rem;
    max-width: 40%;
    height: auto;
  }

  .link {
    width: auto;
    margin: 0;
    padding: 0;
  }

  button {
    width: 8rem;
    background-color: ${({ theme }) => theme.colors.fonsFosc};
    padding: 1rem;
    font-size: 1.3rem;
    border: none;
    color: ${({ theme }) => theme.colors.lletraGlobal};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      outline: 0.1rem solid ${({ theme }) => theme.colors.vora};
      border-radius: 0.5rem;
    }
    &[disabled] {
      color: ${({ theme }) => theme.colors.deshabilitat};
    }
    &[disabled]:hover {
      pointer-events: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    flex-direction: column;
    gap: 2rem;

    .div2 {
      margin: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.amplada.movil}) {
    button {
      width: 6rem;
      font-size: 1rem;
      padding: 0.75rem;
    }
  }
`;
