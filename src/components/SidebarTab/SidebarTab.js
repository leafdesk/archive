import styles from './SidebarTab.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SidebarTab = ({ name }) => {
  return (
    <div className={cx('SidebarTab')}>
      <div className={cx('icon')}>◎</div>
      <span>{name}</span>
    </div>
  );
};

export default SidebarTab;
