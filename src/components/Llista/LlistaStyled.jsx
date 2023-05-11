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

      &:hover {
        outline: 0.1rem solid ${({ theme }) => theme.colors.vora};
        border-radius: 0.5rem;
      }

      li:nth-child(1) {
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-size: 1.3rem;
      }
    }
  }

  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.lletraGlobal};
  }
`;
