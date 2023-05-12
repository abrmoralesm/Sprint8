import styled from "styled-components";

export const Contenidor = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  div {
    background-color: ${({ theme }) => theme.colors.fons};
    width: 70rem;
    padding: 4rem 3.25rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.25rem;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    div {
      border: none;
      width: 100%;
      padding: 1rem 0 0;
      img {
        max-width: 100%;
        object-fit: cover;
        height: 24rem;
      }
    }
    p {
      font-size: 1.5rem;
      line-height: 1.25;
      line-height: 1.25;
      text-align: justify;
      margin: -1.25rem 1rem 0.5rem;
    }
  }
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
