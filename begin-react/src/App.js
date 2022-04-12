import React from 'react';
import List from './06_ArrayEx/ArrayEx';

const _arr = [
  {
    id: 1,
    content: 'a',
  },
  {
    id: 2,
    content: 'b',
  },
  {
    id: 3,
    content: 'c',
  },
];

const App = () => {
  return (
    <>
      <List array={_arr} />
    </>
  );
};

export default App;
