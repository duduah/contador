import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Header = ({ logo }) => (
  <StyledHeader>
    <img src={logo} alt="" />
    <h1>
Ejemplo de contador KeepCoding
    </h1>
  </StyledHeader>
);

export default Header;
