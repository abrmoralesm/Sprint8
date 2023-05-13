import styled from "styled-components";

export const Contenidor = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.voraVermella};
  .titol-pilot {
    margin-left: 1.5rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .missatge {
    background-color: ${({ theme }) => theme.colors.fons};
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 3rem;
    padding-left: 1.5rem;
    text-transform: uppercase;
  }
  .llista-pilots {
    background-color: ${({ theme }) => theme.colors.fons};
    padding: 2rem 1.5rem;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fill, 18rem);
    gap: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.amplada.tauleta}) {
    .titol-pilot {
      align-self: center;
    }
  }
`;
