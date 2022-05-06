import React from 'react';
import styles from './List.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const List = ({ children }) => {
  return (
    <>
      <ul className={cx('List')}>{children}</ul>
    </>
  );
};

export default List;
