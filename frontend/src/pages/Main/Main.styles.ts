import { styled } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
  }
`;