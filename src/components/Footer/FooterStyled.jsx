import styled from "styled-components";

export const Contenidor = styled.div`
  
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.fons};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  font-size: 1.4rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.divisor};

  p {
    text-transform: uppercase;
    font-weight: 500;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`;
