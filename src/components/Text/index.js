import styled from 'styled-components';
import styledMap from 'styled-map';
import PropTypes from 'prop-types';

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${styledMap({
    center: 'center',
    default: 'left',
  })};
  color: ${styledMap('color', {
    white: '#fff',
    danger: '#ff0000',
    primary: '#0066cc',
    success: 'green',
    default: '#333',
  })};
  background: ${styledMap('background', {
    white: '#fff',
    danger: '#ff0000',
    primary: '#0066cc',
    success: 'green',
    black: '#333',
    default: 'transparent',
  })};
  padding: ${styledMap({
    space: '10px 20px',
    default: '5px 10px',
  })};
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
