import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: linear-gradient(#333, #000);
  flex: 1;
`;

const Body = ({ counterValue }) => (
  <StyledWrapper>
    <div>
      <p>
        El valor del contador es
        {' '}
        <b>
          {counterValue}
        </b>
      </p>
      {counterValue > -10 && counterValue < 10 ? (
        <div>
          <button type="button">
-1
          </button>
          <button type="button">
+1
          </button>
        </div>
      ) : (
        <div>
          <p>
Has llegado al límite
          </p>
          <div>
            <button type="button">
Reiniciar
            </button>
          </div>
        </div>
      )}
    </div>
  </StyledWrapper>
);

export default Body;
