import styled from 'styled-components';

import theme from '../../styles/theme';

export const InputStyled = styled.input`
  background: ${theme.colors.light};
  border: 2px solid
    ${(props) => (props.isErrored ? theme.colors.primary : theme.colors.gray)};
  border-radius: 4px;
  height: 44px;
  padding: 0 12px;
  color: ${theme.colors.dark};
  margin: 0 0 10px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 16px;

  &:focus {
    border: 2px solid ${theme.colors.secondary};
  }

  &::placeholder {
    color: ${theme.colors.gray};
    background: ${theme.colors.light};
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export const Span = styled.span``;
