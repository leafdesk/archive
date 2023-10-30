import styles from './Container.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Container = ({ children }) => {
  return <section className={cx('Container')}>{children}</section>;
};

export default Container;
