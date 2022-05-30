import FlexBox from './core/FlexBox/FlexBox';
import Sidebar from './components/Sidebar/Sidebar';
import MobileDesigns from './components/Tabs/MobileDesigns';

import styles from './App.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={cx('App')}>
      <FlexBox>
        <Sidebar />

        <FlexBox justifyContent='center'>
          <MobileDesigns />
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default App;
