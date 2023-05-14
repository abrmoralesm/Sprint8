import styled from "styled-components";

export const Container = styled.div`
  margin: 6rem 3rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  .container-imatge-nau {
    width: 100%;
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.voraVermella};
    position: relative;

    .imatge-nau {
      width: 100%;
      max-height: 40rem;
      object-fit: fill;
    }

    .missatge {
      font-size: 1.3rem;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
      position: absolute;
      bottom: 2.5rem;
      right: 3rem;
    }
  }

  .llista-detalls-nau {
    width: 100%;
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.voraVermella};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.4rem;

    .nom-nau {
      margin-left: 1.5rem;
      font-size: 1.8rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .bloc-llista-detalls-nau {
      width: 100%;
      height: 22rem;
      background-color: ${({ theme }) => theme.colors.fons};
      padding: 1.5rem;
      padding-bottom: 0.25rem;
      display: flex;
      flex-flow: column wrap;
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

  .boto {
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

  .boto:hover {
    border-color: ${({ theme }) => theme.colors.vora};
  }

  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    .llista-detalls-nau {
      align-items: center;

      .bloc-llista-detalls-nau {
        height: auto;
        align-items: center;
        flex-wrap: nowrap;
        padding-bottom: 1.5rem;

        li {
          width: 60%;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.amplada.movilPetit}) {
    li {
      flex-direction: column;
      gap: 0.25rem;

      span:nth-child(2) {
        flex: 1;
        align-self: start;
        font-size: 1.15rem;
        padding-left: 0.5rem;
      }
    }
  }
`;
