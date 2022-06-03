import styles from './NavbarTab.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavbarTab = ({ name, onClick, isFocused, icon }) => {
  return (
    <div
      className={isFocused ? cx('NavbarTabFocused') : cx('NavbarTab')}
      onClick={onClick}
    >
      <div className={cx('icon')}>{icon}</div>
      <span>{name}</span>
    </div>
  );
};

export default NavbarTab;
