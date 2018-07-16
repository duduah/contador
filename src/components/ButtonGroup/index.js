import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';

const StyledFlex = Flex.extend`
  border: 1px solid red;
`;

const ButtonGroup = ({ center, ...props }) => (
  <StyledFlex justifyContent={center ? 'center' : 'space-between'} {...props} />
);

ButtonGroup.defaultProps = {
  center: false,
};

ButtonGroup.propTypes = {
  center: PropTypes.bool,
};

export default ButtonGroup;
