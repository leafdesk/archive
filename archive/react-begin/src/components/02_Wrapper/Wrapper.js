import React from 'react';

function Wrapper({ children }) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
