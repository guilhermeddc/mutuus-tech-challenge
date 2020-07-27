import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 40%;
  position: fixed;
  top: 0;
  right: 30%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.3s;

  display: flex;

  :hover {
    opacity: 1;
  }

  > button {
    flex: 1;
    border: none;
    padding: 8px;
    margin: 0 1px;
    border-radius: 4px;
    opacity: 0.7;
    color: ${theme.colors.light};
    background: ${theme.colors.dark};
    transition: opacity 0.3s;
    font-size: 18px;

    :hover {
      opacity: 1;
      background: ${theme.colors.primary};
    }
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    right: 0;

    > button {
      font-size: 18px;
    }
  }
`;
