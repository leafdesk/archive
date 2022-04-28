import React from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({ name, placeholder }) => {
  return (
    <div className={cx('Input')}>
      <label>{name}</label>
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
