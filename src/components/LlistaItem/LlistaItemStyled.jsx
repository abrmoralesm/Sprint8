import styled from "styled-components";

export const Contenidor = styled.div`
  width: 70rem;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div:nth-child(1) {
    border-bottom: 0.3rem solid #582e37;
    position: relative;

    img {
      min-width: 100%;
      height: 40rem;
      object-fit: cover;
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
      height: 13.45rem;
      gap: 0.5rem 2rem;

      p {
        text-transform: uppercase;
      }
    }

    li {
      list-style: none;
      max-width: 50%;
      display: flex;
      justify-content: space-between;

      span:nth-child(1) {
        flex: 1;
        font-size: 1.25rem;
        font-weight: 600;
      }

      span:nth-child(2) {
        text-align: right;
      }
    }
  }
`;
