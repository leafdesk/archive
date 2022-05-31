import styles from './SidebarInfo.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SidebarInfo = () => {
  return (
    <div className={cx('SidebarInfo')}>
      <h3>Sanggeon Lee</h3>
      <a href='mailto:lsg001008@gmail.com'>lsg001008@gmail.com</a>
    </div>
  );
};

export default SidebarInfo;
