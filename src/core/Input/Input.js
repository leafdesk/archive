import React, { useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({ name, label, type, placeholder, setParentState }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(() => event.target.value);
    if (setParentState) {
      setParentState(event.target.value);
    }
  };

  return (
    <div className={cx('Input')}>
      {label ? <label>{label}</label> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
