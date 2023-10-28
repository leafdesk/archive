import React, { useRef } from 'react';
import './InputEx.css';

const InputEx = () => {
  const firstNum = useRef();
  const secondNum = useRef();

  const onFirstChange = (event) => {
    if (event.target.value.length >= 4) firstNum.current.focus();
    console.log(firstNum);
  };

  const onSecondChange = (event) => {
    if (event.target.value.length >= 4) secondNum.current.focus();
  };

  return (
    <form className='tel'>
      <select>
        <option>010</option>
        <option>070</option>
      </select>

      <span>-</span>

      <input maxLength={4} required onChange={onFirstChange} />

      <span>-</span>

      <input maxLength={4} required onChange={onSecondChange} ref={firstNum} />

      <button ref={secondNum}>Submit</button>
    </form>
  );
};

export default InputEx;
