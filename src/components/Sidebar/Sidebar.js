import { useState } from 'react';
import SidebarTab from '../SidebarTab/SidebarTab.js';
import styles from './Sidebar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [index, setIndex] = useState('Laboratory');

  return (
    <div className={cx('Sidebar')}>
      <SidebarTab name='Laboratory' />
      <SidebarTab name='Category 1' />
      <SidebarTab name='Category 2' />
    </div>
  );
};

export default Sidebar;
