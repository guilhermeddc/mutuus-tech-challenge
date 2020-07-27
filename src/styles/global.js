import {createGlobalStyle} from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${theme.colors.dark};
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong, button {
    font-family: 'Marvel', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
