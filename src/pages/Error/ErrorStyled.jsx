import styled from "styled-components";

export const Contenidor = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 12rem;
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
`;

export const ContenidorImg = styled.div`
  margin: 30px;
  height: auto;
  width: 70rem;
  border: 0.25rem solid ${({ theme }) => theme.colors.vora};
  border-radius: 10%;
  overflow: hidden;
`;

export const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
