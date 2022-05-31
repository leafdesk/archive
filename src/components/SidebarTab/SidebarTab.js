import styles from './SidebarTab.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SidebarTab = ({ name, onClick, isFocused, icon }) => {
  return (
    <div
      className={isFocused ? cx('SidebarTabFocused') : cx('SidebarTab')}
      onClick={onClick}
    >
      <div className={cx('icon')}>{icon}</div>
      <span>{name}</span>
    </div>
  );
};

export default SidebarTab;
