import styled, {keyframes} from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
  }
`;

const animationContent = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 95%;
  height: 100%;
  max-height: 90%;
  border-radius: 4px;
  padding: 32px;
  background: ${theme.colors.light};

  animation: ${animationContent} 1s;

  h1 {
    font-size: 40px;
  }

  table {
    width: 100%;
    margin-top: 32px;

    #table-title {
      font-family: 'Marvel', sans-serif;
      font-size: 32px;
      background: ${theme.colors.secondary};
    }

    #table-items {
      height: 40px;
      font-family: 'Marvel', sans-serif;
      font-size: 24px;
      :nth-child(even) {
        background: ${theme.colors.gold};
      }
      :nth-child(odd) {
        background: ${theme.colors.silver};
      }
    }
  }

  @media screen and (max-width: 450px) {
    table {
      #table-title {
        font-size: 18px;
      }

      #table-items {
        font-size: 18px;
      }
    }
  }
`;
