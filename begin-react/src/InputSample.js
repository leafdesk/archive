import React, { useState, useRef } from 'react';

function InputSample() {
  const style = {
    margin: 4,
  };

  // inputs = { name: '', nickname: '' } 으로 초기화
  const [inputs, setInputs] = useState({
    _name: '',
    _nickname: '',
  });
  const nameInput = useRef();

  // inputs 안의 name, nickname 키워드도 비구조화 할당으로 추출
  const { _name, _nickname } = inputs;

  const onChange = (event) => {
    // 변화 이벤트 타겟, 곧 input의 수많은 속성 중 value, name 추출
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      _name: '',
      _nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        style={style}
        name='_name'
        placeholder='Name'
        onChange={onChange}
        value={_name}
        ref={nameInput}
      />
      <input
        style={style}
        name='_nickname'
        placeholder='Nickname'
        onChange={onChange}
        value={_nickname}
      />

      <button style={style} onClick={onReset}>
        Initialize
      </button>
      <div>
        <p>Value: </p>
        <p>
          {_name} ({_nickname})
        </p>
      </div>
    </div>
  );
}

export default InputSample;
