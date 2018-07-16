import styled from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px 15px;
  margin-top: 15px;
  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.primary)};
  }
`;

export default StyledButton;
