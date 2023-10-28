import styles from './AppContainer.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AppContainer = ({ children }) => {
  return <div className={cx('AppContainer')}>{children}</div>;
};

export default AppContainer;
