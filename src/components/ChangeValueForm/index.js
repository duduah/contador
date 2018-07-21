import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const StyledForm = styled.form`
  display: flex;
  margin: 20px 0;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 20px;
  padding: 10px;
  text-align: center;
`;

const StyledButton = Button.extend`
  margin-top: 0;
`;

const ChangeValueForm = () => (
  <StyledForm>
    <StyledInput type="text" value="4" />
    <StyledButton>
Guardar
    </StyledButton>
  </StyledForm>
);

export default ChangeValueForm;
