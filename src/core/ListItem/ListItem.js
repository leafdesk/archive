import React from 'react';
import styles from './ListItem.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListItem = ({ value, id, setParentState }) => {
  const onClick = (event) => {
    setParentState(id);
  };

  return (
    <li className={cx('ListItem')}>
      <span>{value}</span>
      <button onClick={onClick}>Delete</button>
    </li>
  );
};

export default ListItem;
