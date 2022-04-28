import React from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({ name, type, placeholder }) => {
  return (
    <div className={cx('Input')}>
      <label>{name}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
