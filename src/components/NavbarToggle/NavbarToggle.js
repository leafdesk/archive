import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import styles from './NavbarToggle.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavbarToggle = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onClick = () => {
    setIsOpened(() => !isOpened);
  };

  return (
    <div className={cx('NavbarToggle')} onClick={onClick}>
      {isOpened ? <MdClose /> : <HiMenu />}
    </div>
  );
};

export default NavbarToggle;
