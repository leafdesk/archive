import React, { useState, useRef } from 'react';

const Counter = () => {
  // useState, useRef, variable 의 차이점 ?
  console.log('⚠️ rendering (init variable to 0)');

  const [state, setState] = useState(0);
  const ref = useRef(0);
  let variable = 0;

  const handleState = () => {
    // setState(state + 1);
    setState((prev) => prev + 1);
    console.log('👉 state: ', state + 1);
  };

  const handleRef = () => {
    ref.current = ref.current + 1;
    console.log('👉 ref: ', ref.current);
  };

  const handleVar = () => {
    variable++;
    console.log('👉 var: ', variable);
  };

  const log = () => {
    console.log('💬 state: ', state, ', ref: ', ref, ', var: ', variable);
  };

  return (
    <div>
      <p>useState: {state}</p>
      <p>useRef: {ref.current}</p>
      <p>variable: {variable}</p>

      <div>
        <button onClick={handleState}>state++</button>
        <span> : 렌더링 O : 화면 변동 있음</span>
      </div>

      <div>
        <button onClick={handleRef}>ref++</button>
        <span> : 렌더링 X : 화면 변동 없음</span>
      </div>

      <div>
        <button onClick={handleVar}>var++</button>
        <span> : 렌더링 X : 화면 변동 없음</span>
      </div>

      <div>
        <button onClick={log}>console.log</button>
        <span> : 렌더링 X : 화면 변동 없음</span>
      </div>
    </div>
  );
};

export default Counter;
