import styled, {keyframes} from 'styled-components';

import theme from '../../styles/theme';
import image from '../../assets/vs.jpg';

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
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  animation: ${animationContent} 1s;

  section {
    display: flex;
    justify-content: space-between;
    height: 100%;

    > div {
      display: flex;
      width: 250px;
      height: 100%;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      background: ${theme.colors.light}55;

      h1 {
        margin-top: 16px;
        font-size: 32px;
        color: ${theme.colors.light};

        span {
          background: ${theme.colors.secondary};
          padding: 0 7px;
          border-radius: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    max-width: 100%;
    height: 90%;
    max-height: 100%;
    border-radius: 4px;
    padding: 0px;

    section {
      width: 100%;

      > div {
        display: flex;
        width: 180px;
        height: 90vh;
        align-items: center;
        border-radius: 4px;
        background: transparent;

        h1 {
          margin-top: 16px;
          font-size: 24px;
          color: ${theme.colors.light};
        }
      }
    }
  }
`;

export const Scoreboard = styled.article`
  flex: 1;
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  article {
    background: ${theme.colors.tertiary}88;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    animation: ${animationContent} 1s;

    > h4 {
      font-size: 72px;
      font-weight: bold;
      color: ${theme.colors.light};
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const YouWin = styled.div`
  position: fixed;
  top: 40%;
  right: 30%;
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.secondary};
  border-radius: 4px;
  text-align: center;
  border: 2px solid ${theme.colors.light};

  h3 {
    font-size: 72px;
    color: ${theme.colors.light};
    z-index: 30;
  }

  button {
    margin-left: 32px;
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 2px solid ${theme.colors.light};
    font-size: 24px;
    color: ${theme.colors.light};
    background: ${theme.colors.dark};
  }

  transition: all 0.3s;

  animation: ${animationContent} 1s;

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 32px;
      color: ${theme.colors.light};
      z-index: 30;
    }

    button {
      width: 100px;
      height: 150px;
      margin-left: 0px;
      border-radius: 4px;
      font-size: 18px;
    }
  }
`;

export const YouLose = styled.div`
  position: fixed;
  top: 40%;
  right: 30%;
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};
  border-radius: 4px;
  text-align: center;
  border: 2px solid ${theme.colors.light};

  h3 {
    font-size: 72px;
    color: ${theme.colors.light};
    z-index: 30;
  }

  button {
    margin-left: 32px;
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 2px solid ${theme.colors.light};
    font-size: 24px;
    color: ${theme.colors.light};
    background: ${theme.colors.dark};
  }

  transition: all 0.3s;

  animation: ${animationContent} 1s;

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 32px;
      color: ${theme.colors.light};
      z-index: 30;
    }

    button {
      width: 100px;
      height: 150px;
      margin-left: 0px;
      border-radius: 4px;
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  color: ${theme.colors.light};
  width: 50px;
  height: 50px;
  font-size: 24px;
  opacity: 0.8;
  margin: 32px;
  transition: opacity 0.3s;
  border: none;
  background: ${theme.colors.dark};
  border-radius: 100px;

  &:hover {
    opacity: 1;
  }
`;
