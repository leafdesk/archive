import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import styles from './NavbarToggle.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavbarToggle = ({ setMenuState }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={cx('NavbarToggle')}
      onClick={() => {
        setMenuState(!isOpened);
        setIsOpened(!isOpened);
      }}
    >
      {isOpened ? <MdClose /> : <HiMenu />}
    </div>
  );
};

export default NavbarToggle;
