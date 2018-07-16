import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  color: ${({ color }) => (color == 'white'
    ? '#fff'
    : color == 'danger'
      ? '#ff0000'
      : color == 'primary'
        ? '#0066cc'
        : color == 'success'
          ? 'green'
          : '#333')};
`;

StyledText.defaultProps = {
  color: 'black',
  background: 'transparent',
};

StyledText.propTypes = {
  color: PropTypes.oneOf(['white', 'danger', 'primary', 'success', 'black']),
  background: PropTypes.oneOf(['white', 'danger', 'primary', 'success', 'black', 'transparent']),
};

export default StyledText;
