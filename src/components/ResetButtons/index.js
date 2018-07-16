import React from 'react';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Text from '../Text';

const ResetButtons = () => (
  <div>
    <Text center color="#ff0000">
      Has llegado al límite
    </Text>
    <ButtonGroup>
      <Button type="button">
Reiniciar
      </Button>
    </ButtonGroup>
  </div>
);

export default ResetButtons;
