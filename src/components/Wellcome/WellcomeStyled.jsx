import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  div {
    background-color: ${({ theme }) => theme.colors.fons};
    margin: 0 3rem;
    padding: 4rem 3.25rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 2.25rem;
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

    .image-starship {
      border: none;
      border-radius: 0.75rem;
      margin: 0 1.5rem;
      padding: 0;

      img {
        max-width: 100%;
        object-fit: cover;
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 1.25;
      text-align: justify;
      margin: -1.25rem 1rem 0.5rem;
    }
  }

  .link {
    width: auto;
    margin: 0;
    padding: 0;
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
