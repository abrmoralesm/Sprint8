import styled from "styled-components";

export const Container = styled.div`
  margin: 1.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    letter-spacing: 0.1rem;
    font-size: 1.15rem;
    text-transform: uppercase;
    padding: 1rem 5rem;
    border: 0.15rem solid ${({ theme }) => theme.colors.divisor};
    border-radius: 0.25rem;
  }
`;
