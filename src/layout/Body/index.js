import React from 'react';

import Wrapper from './Wrapper';
import Box from './Box';

const Body = ({ children }) => (
  <Wrapper>
    <Box>
      {children}
    </Box>
  </Wrapper>
);

export default Body;
