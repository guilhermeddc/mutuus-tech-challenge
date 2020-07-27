import styled, {css} from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  margin: 8px;
  border-radius: 4px;
  border: 2px solid ${theme.colors.primary};
  padding: 2px;
  width: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.primary};

  ${(props) =>
    props.points < 100 &&
    css`
      border: 2px solid ${theme.colors.bronze};
      background: ${theme.colors.bronze};
    `}

  ${(props) =>
    props.points >= 100 &&
    props.points < 500 &&
    css`
      border: 2px solid ${theme.colors.silver};
      background: ${theme.colors.silver};
    `}

  ${(props) =>
    props.points >= 500 &&
    props.points < 1000 &&
    css`
      border: 2px solid ${theme.colors.gold};
      background: ${theme.colors.gold};
    `}

  ${(props) =>
    props.points > 1000 &&
    css`
      border: 2px solid ${theme.colors.secondary};
      background: ${theme.colors.secondary};
    `}

  img {
    width: 156px;
    height: 156px;
    image-rendering: optimizeSpeed;
    border-radius: 4px;
  }

  > div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
      margin-top: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${theme.colors.primary};
      color: ${theme.colors.light};
      border-radius: 50px;
      height: 35px;
      width: 35px;

      position: absolute;
      top: -160px;
      right: -10px;
    }

    p {
      font-weight: bold;
      padding: 2px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 450px) {
    width: 124px;

    img {
      width: 116px;
      height: 116px;
    }

    > div {
      span {
        top: -120px;
      }
    }
  }
`;
