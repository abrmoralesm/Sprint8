import styled from "styled-components";

export const Contenidor = styled.div`
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

`;
