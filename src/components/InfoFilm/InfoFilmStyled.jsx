import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: start;
  gap: 2rem;

  .container-nom-peli {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.voraVermella};
    flex: 1 1 100%;
    display: flex;
    justify-content: space-between;
    .nom-peli {
      text-align: center;
      padding-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
    }
    .episode {
      font-size: 1rem;
    }
  }
  .container-image-film {
    flex: 1;
    border: 0.3rem solid ${({ theme }) => theme.colors.voraVermella};
    border-radius: 0.5rem;
    padding: 1rem;
    .image-film {
      width: 100%;
      max-height: auto;
      object-fit: fill;
    }
  }
  .llista-detalls-pelis {
    padding-top: 1rem;
    flex: 1 1 18rem;
    width: 100%;
    font-size: 1.2rem;
    .bloc-llista-detalls-pelis {
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
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
      li:nth-child(4) {
        align-self: end;
        padding-top: 1rem;
      }
      .sinopsi {
        padding: 0.5rem 0 0 1rem;
        text-align: justify;
        line-height: 1.25;
        letter-spacing: 0.15rem;
        font-weight: 200;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    .container-image-film {
      flex: 1 1 100%;
      max-width: 22rem;
    }
    .llista-detalls-pelis {
      flex: 1 1 100%;
      padding-top: 0;
    }
    @media (max-width: ${({ theme }) => theme.amplada.movil}) {
      .container-nom-peli {
        flex-direction: column;
        align-items: center;
      }
      .container-image-film {
        max-width: 18rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.amplada.movilPetit}) {
      li {
        flex-direction: column;
        gap: 0.25rem;
        span {
          flex: 1;
          align-self: start;
          font-size: 1.15rem;
        }
        span:nth-child(2) {
          padding-left: 1rem;
        }
      }
    }
  }
`;
