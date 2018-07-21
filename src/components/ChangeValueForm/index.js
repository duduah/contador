import React from 'react';
import PropTypes from 'prop-types';
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

const ChangeValueForm = ({ inputValue, updateInputValue }) => (
  <StyledForm>
    <StyledInput type="number" value={inputValue} onChange={updateInputValue} />
    <StyledButton>
Guardar
    </StyledButton>
  </StyledForm>
);

ChangeValueForm.defaultProps = {
  inputValue: '',
};

ChangeValueForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  updateInputValue: PropTypes.func.isRequired,
};

export default ChangeValueForm;
