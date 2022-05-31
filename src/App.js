import { useState } from 'react';
import FlexBox from './core/FlexBox/FlexBox';
import Sidebar from './components/Sidebar/Sidebar';
import MobileDesigns from './pages/MobileDesigns';

import { MdPalette, MdArticle } from 'react-icons/md';

import styles from './App.module.css';
import classNames from 'classnames/bind';

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
      <FlexBox>
        <Sidebar tabs={tabs} setIndex={setIndex} />
        <FlexBox justifyContent='center'>{tabs[index].content}</FlexBox>
      </FlexBox>
    </div>
  );
};

export default App;
