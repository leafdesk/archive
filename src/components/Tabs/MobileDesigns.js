import React, { useState } from 'react';
import Dropdown from '../../core/Dropdown/Dropdown.js';
import InputDesigns from '../Designs/InputDesigns';
import ButtonDesigns from '../Designs/ButtonDesigns.js';
import TodoList from '../TodoList/TodoList.js';
import Laboratory from '../Laboratory/Laboratory.js';
import CoinTracker from '../CoinTracker/CoinTracker';

const menuList = [
  'Input Designs',
  'Button Designs',
  'Todo List',
  'Coin Tracker',
  'Laboratory',
];

const MobileDesigns = () => {
  const [menu, setMenu] = useState();

  const onChange = (menu) => {
    setMenu(menu);
  };

  return (
    <div
      style={{
        width: 360,
      }}
    >
      <Dropdown
        label='MENU'
        placeholder='Select MENU'
        optionList={menuList}
        setParentState={onChange}
      />
      <br />
      {/* hr 대신 아래 div 사용 */}
      <div
        style={{
          height: 1,
          backgroundColor: '#c7cad1',
        }}
      />
      <br />

      {menu === 'Input Designs' ? <InputDesigns /> : null}
      {menu === 'Button Designs' ? <ButtonDesigns /> : null}
      {menu === 'Todo List' ? <TodoList /> : null}
      {menu === 'Laboratory' ? <Laboratory /> : null}
      {menu === 'Coin Tracker' ? <CoinTracker /> : null}
    </div>
  );
};

export default MobileDesigns;
