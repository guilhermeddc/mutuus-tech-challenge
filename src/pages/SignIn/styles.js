import styled, {keyframes} from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(-90deg, #20232a, #282c34); */
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
  max-width: 370px;
  text-align: center;
  border: 1px solid ${theme.colors.gray};
  border-radius: 4px;
  padding: 32px;

  animation: ${animationContent} 1s;

  img {
    width: 100%;
    max-width: 315px;
    border-radius: 4px;
  }

  h1 {
    color: ${theme.colors.light};
    background: ${theme.colors.primary};
    border-radius: 4px;
    margin-bottom: 30px;
    font-size: 26px;
    margin-top: -8px;
    text-transform: uppercase;
    padding: 0 8px 4px;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      color: ${theme.colors.dark};
      font-size: 24px;
      opacity: 0.8;
      transition: opacity 0.3s;
      border: none;
      background: ${theme.colors.primary};
      border-radius: 4px;
      padding: 8px 16px;

      &:hover {
        opacity: 1;
      }
    }

    span {
      color: ${theme.colors.primary};
      font-size: 12px;
      align-self: flex-end;
      margin: 0 0 10px;
    }
  }
`;
