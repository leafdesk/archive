import { useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter(++counter)}>+</button>
    </div>
  );
};

export default Home;
