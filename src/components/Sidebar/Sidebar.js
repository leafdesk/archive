import useTabs from '../../hooks/useTabs.js';
import SidebarTab from '../SidebarTab/SidebarTab.js';

import styles from './Sidebar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Sidebar = ({ tabs, setIndex }) => {
  const { currentTab, setCurrentIndex } = useTabs(0, tabs);
  currentTab.isFocused = true;

  return (
    <div className={cx('Sidebar')}>
      {tabs.map((tab, index) => (
        <SidebarTab
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
    </div>
  );
};

export default Sidebar;
