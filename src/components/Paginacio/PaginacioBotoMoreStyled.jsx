
import styled from "styled-components";

export const Contenidor = styled.div`
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
