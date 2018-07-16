import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Text from '../Text';

const ResetButtons = ({ resetCounter }) => (
  <div>
    <Text center color="white" background="danger" space>
      Has llegado al límite
    </Text>
    <ButtonGroup center>
      <Button type="button" onClick={resetCounter}>
        Reiniciar
      </Button>
    </ButtonGroup>
  </div>
);

ResetButtons.propTypes = {
  resetCounter: PropTypes.func.isRequired,
};

export default ResetButtons;
