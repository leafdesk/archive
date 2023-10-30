import useTabs from '../../hooks/useTabs.js';
import NavbarTab from '../NavbarTab/NavbarTab.js';
import NavbarInfo from '../NavbarInfo/NavbarInfo.js';

import styles from './Navbar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Navbar = ({ tabs, setIndex, isOpened }) => {
  const { currentTab, setCurrentIndex } = useTabs(0, tabs);
  currentTab.isFocused = true;

  return (
    <div className={isOpened ? cx('NavbarOpened') : cx('NavbarClosed')}>
      {tabs.map((tab, index) => (
        <NavbarTab
          key={index}
          name={tab.name}
          onClick={() => {
            setCurrentIndex(index);
            setIndex(index);
          }}
          isFocused={tab.isFocused}
          icon={tab.icon}
        />
      ))}
      <NavbarInfo />
    </div>
  );
};

export default Navbar;
