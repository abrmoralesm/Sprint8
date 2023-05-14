import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 35rem;
  margin: 6rem auto;

  div:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.fons};
    margin: 0 3rem;
    padding: 2rem 2.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-size: 2rem;
      text-transform: uppercase;
    }

    button {
      width: 12rem;
      background-color: ${({ theme }) => theme.colors.fons};
      margin-top: 1rem;
      padding: 1rem;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.lletraGlobal};
      border: 0.1rem solid ${({ theme }) => theme.colors.voraBlava};
      border-radius: 0.5rem;
      text-transform: uppercase;
      cursor: pointer;
    }

    button:hover {
      border-color: ${({ theme }) => theme.colors.vora};
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      label {
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
      }

      input {
        margin-top: 0.5rem;
        background-color: ${({ theme }) => theme.colors.fons};
        padding: 1rem;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.lletraGlobal};
        border: 0.1rem solid ${({ theme }) => theme.colors.voraBlava};
        border-radius: 0.5rem;
        text-transform: uppercase;
      }

      input:hover {
        border-color: ${({ theme }) => theme.colors.vora};
      }
    }

    div:nth-child(3) {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1rem;

      p {
        font-size: 1rem;
      }

      button {
        width: 6.5rem;
        margin-top: 0;
        padding: 1rem;
        font-size: 1.1rem;
      }
    }
    .missatge {
      color: ${({ theme }) => theme.colors.missatge};
    }
  }
`;
