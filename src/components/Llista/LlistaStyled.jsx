import styled from "styled-components";

export const Contenidor = styled.div`
  width: 70rem;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;

  ul {
    height: 72rem;
    list-style: none;
    display: flex;
    flex-direction: column;

    div {
      margin: 0.8rem;
      padding: 1.2rem 1.5rem;
      background-color: ${({ theme }) => theme.colors.fons};

      li:nth-child(1) {
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-size: 1.3rem;
      }
    }
  }
`;

export const ContenidorBotons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;

  button {
    width: 14rem;
    background-color: ${({ theme }) => theme.colors.fons};
    padding: 1rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.lletraGlobal};
    border: 0.1rem solid transparent;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  button:hover {
    border-color: ${({ theme }) => theme.colors.vora};
  }

  span {
    font-size: 1.5rem;
    width: 1rem;
  }

  button[disabled] {
    color: ${({ theme }) => theme.colors.deshabilitat};
  }

  button[disabled]:hover {
    pointer-events: none;
  }
`;
