import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const StyledForm = styled.form``;

const StyledInput = styled.input``;

const ChangeValueForm = () => (
  <StyledForm>
    <StyledInput type="text" value="4" />
    <Button>
Guardar
    </Button>
  </StyledForm>
);

export default ChangeValueForm;
