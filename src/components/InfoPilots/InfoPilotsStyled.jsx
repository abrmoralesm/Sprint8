import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 18rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.voraVermella};
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .nom-pilot {
    text-align: center;
    padding: 1rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .container-imatge-pilot {
    padding: 0 1.5rem;
    .imatge-pilot {
      width: 100%;
      max-height: auto;
      object-fit: fill;
      padding: 0;
    }
  }
  .llista-detalls-pilots {
    width: 100%;
    padding: 0 1.5rem 0.5rem;
    font-size: 1.2rem;
    .bloc-llista-detalls-pilots {
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      li {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: end;
        span:nth-child(1) {
          flex: 1;
          font-weight: 600;
        }
        span:nth-child(2) {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    width: 16rem;
  }
  @media (max-width: ${({ theme }) => theme.amplada.movil}) {
    width: 14rem;
  }
  @media (max-width: ${({ theme }) => theme.amplada.movilPetit}) {
    width: 12rem;
    .nom-pilot {
      font-size: 1rem;
    }
    li {
      flex-direction: column;
      gap: 0.25rem;
      span {
        flex: 1;
        align-self: start;
        font-size: 1.15rem;
      }
      span:nth-child(2) {
        padding-left: 0.5rem;
      }
    }
  }
`;
