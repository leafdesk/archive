import { useState } from 'react';
import FlexBox from './core/FlexBox/FlexBox';
import Navbar from './components/Navbar/Navbar';
import ContentView from './components/Container/ContentView/ContentView';
import MobileHeader from './components/MobileHeader/MobileHeader';
import MobileDesigns from './pages/MobileDesigns';

import { MdPalette, MdArticle } from 'react-icons/md';

import styles from './App.module.css';
import classNames from 'classnames/bind';
import AppContainer from './components/Container/AppContainer/AppContainer';

const cx = classNames.bind(styles);

const App = () => {
  const [index, setIndex] = useState(0);
  // console.log(index);

  const tabs = [
    {
      name: 'Mobile Designs',
      content: <MobileDesigns />,
      isFocused: false,
      icon: <MdPalette />,
    },
    {
      name: 'Category 1',
      content: 'category 1',
      isFocused: false,
      icon: <MdArticle />,
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
        <Navbar tabs={tabs} setIndex={setIndex} />
        <ContentView>
          <MobileHeader />
          <div className={cx('blank')} />
          <FlexBox justifyContent='center'>{tabs[index].content}</FlexBox>
        </ContentView>
      </AppContainer>
    </div>
  );
};

export default App;
