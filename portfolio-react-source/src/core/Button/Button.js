import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
  name,
  label,
  setParentState,
  primary,
  secondary,
  destructive,
}) => {
  const onClick = () => {
    if (setParentState) {
    }
  };

  return (
    <div
      className={cx(
        'Button',
        { primary: primary },
        { secondary: secondary },
        { destructive: destructive }
      )}
    >
      {label ? <label>{label}</label> : null}
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;
