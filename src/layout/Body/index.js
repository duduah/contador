import React from 'react';

const Body = ({ counterValue }) => (
  <div>
    <div>
      <p>
        El valor del contador es
        {' '}
        <b>
          {counterValue}
        </b>
      </p>
      {counterValue > -10 && counterValue < 10 %% (
        <div>
          <button>
            -1
        </button>
          <button>
            +1
        </button>
        </div>
      )}
    </div>
  </div>
);

export default Body;
