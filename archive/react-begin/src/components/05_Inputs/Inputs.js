import React, { useState } from 'react';

const Inputs = () => {
  const [inputs, setInputs] = useState({
    input_1: '',
    input_2: '',
    input_3: '',
  });

  // 비구조화 할당
  const { input_1, input_2, input_3 } = inputs;

  const printLog = () => {
    console.log(inputs);
  };

  const onChange = (event) => {
    // 비구조화 할당
    const { value, name } = event.target;

    setInputs({
      // ... 이 없으면 새로운 객체 생성이 없고, '자동 렌더링'이 없다.
      ...inputs,
      [name]: value,
    });

    printLog();
  };

  const onReset = (event) => {
    setInputs({
      input_1: '',
      input_2: '',
      input_3: '',
    });
  };

  return (
    <>
      <input
        name='input_1'
        placeholder=''
        onChange={onChange}
        value={input_1}
      />
      <input
        name='input_2'
        placeholder=''
        onChange={onChange}
        value={input_2}
      />
      <input
        name='input_3'
        placeholder=''
        onChange={onChange}
        value={input_3}
      />

      {/**
       * value={변수}를 통해 변수의 변동이 있을 때
       * 즉시 input창 안의 내용도 수정할 수 있다.
       * 그래서 reset을 통해 input 변수가 수정이 되면
       * 즉시 input창 안의 내용도 비워지는 것이다.
       */}

      <button onClick={onReset}>Reset</button>
    </>
  );
};

export default Inputs;
