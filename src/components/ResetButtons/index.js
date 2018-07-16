import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Text from '../Text';

const StyledText = styled(Text)`
  font-size: 28px;
  background: #ff0000;
  padding: 20px;
`;

const ResetButtons = () => (
  <div>
    <StyledText center color="#fff">
      Has llegado al límite
    </StyledText>
    <ButtonGroup>
      <Button type="button">
Reiniciar
      </Button>
    </ButtonGroup>
  </div>
);

export default ResetButtons;
