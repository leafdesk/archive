import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import styles from './SidebarToggle.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SidebarToggle = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onClick = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <div className={cx('SidebarToggle')} onClick={onClick}>
      {isOpened ? <MdClose /> : <HiMenu />}
    </div>
  );
};

export default SidebarToggle;
