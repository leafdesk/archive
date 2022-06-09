import { useState } from 'react';
import FlexBox from './core/FlexBox/FlexBox';
import Navbar from './components/Navbar/Navbar';
import ContentView from './components/Container/ContentView/ContentView';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Laboratory from './pages/Laboratory';
import Dashboard from './pages/Dashboard';

import { MdDashboard, MdPalette, MdArticle } from 'react-icons/md';
import { RiFlaskFill } from 'react-icons/ri';

import styles from './App.module.css';
import classNames from 'classnames/bind';
import AppContainer from './components/Container/AppContainer/AppContainer';

const cx = classNames.bind(styles);

const App = () => {
  const [index, setIndex] = useState(0);
  const [menuState, setMenuState] = useState(false);

  const tabs = [
    {
      name: 'Dashboard',
      content: <Dashboard />,
      isFocused: false,
      icon: <MdDashboard />,
    },
    {
      name: 'Laboratory',
      content: <Laboratory />,
      isFocused: false,
      icon: <RiFlaskFill />,
    },
    {
      name: 'Design Guide',
      content: 'category 1',
      isFocused: false,
      icon: <MdPalette />,
    },
    {
      name: 'Category 2',
      content: 'category 2',
      isFocused: false,
      icon: <MdArticle />,
    },
  ];

  return (
    <div className={cx('App')}>
      <AppContainer>
        <Navbar tabs={tabs} setIndex={setIndex} isOpened={menuState} />
        <ContentView>
          <MobileHeader setMenuState={setMenuState} />
          <div className={cx('blank')} />
          <FlexBox justifyContent='center'>{tabs[index].content}</FlexBox>
        </ContentView>
      </AppContainer>
    </div>
  );
};

export default App;
