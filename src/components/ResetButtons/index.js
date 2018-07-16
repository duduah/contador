import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Text from '../Text';

const ResetButtons = () => (
  <div>
    <Text center color="white" background="danger">
      Has llegado al límite
    </Text>
    <ButtonGroup center>
      <Button type="button">
Reiniciar
      </Button>
    </ButtonGroup>
  </div>
);

export default ResetButtons;
