import styled from "styled-components";

export const Contenidor = styled.div`
  margin: 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div:nth-child(1) {
    border-bottom: 0.3rem solid #582e37;
    position: relative;

    img {
      width: 100%;
      max-height: 40rem;
      object-fit: fill;
    }

    p {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      position: absolute;
      bottom: 2.5rem;
      right: 3rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.3rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    div {
      display: flex;
      flex-flow: column wrap;
      height: 20rem;
      gap: 1rem 4rem;

      li {
        list-style: none;
        width: calc(50% - 2rem);
        display: flex;
        justify-content: space-between;

        span:nth-child(1) {
          flex: 1;
          font-size: 1.25rem;
          font-weight: 600;
        }

        span:nth-child(2) {
          flex: 2;
          text-align: right;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    ul {
      align-items: center;
    }

    div:nth-child(2) {
      width: 100%;
      height: auto;
      align-items: center;
      flex-wrap: nowrap;

      li {
        width: 60%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
