import React, { useState } from 'react';

function Counter() {
  const style = {
    margin: 8,
  };

  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((item) => item + 1);
  };

  const onDecrease = () => {
    setNumber((item) => item - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button style={style} onClick={onDecrease}>
        -1
      </button>
      <button style={style} onClick={onIncrease}>
        +1
      </button>
    </div>
  );
}

export default Counter;
