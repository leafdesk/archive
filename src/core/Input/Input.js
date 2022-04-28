import React, { useState } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({ name, type, placeholder }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(() => event.target.value);
  };

  return (
    <div className={cx('Input')}>
      <label>{name}</label>
      <input
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
