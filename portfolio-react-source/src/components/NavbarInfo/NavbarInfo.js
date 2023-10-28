import styles from './NavbarInfo.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavbarInfo = () => {
  return (
    <div className={cx('NavbarInfo')}>
      <h3>Sanggeon Lee</h3>
      <a href='mailto:lsg001008@gmail.com'>lsg001008@gmail.com</a>
    </div>
  );
};

export default NavbarInfo;
