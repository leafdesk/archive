import React, { useState } from 'react';
import Dropdown from './core/Dropdown/Dropdown.js';
import InputDesigns from './components/Designs/InputDesigns';
import ButtonDesigns from './components/Designs/ButtonDesigns.js';
import Laboratory from './components/Laboratory/Laboratory.js';

const menuList = ['Input Designs', 'Button Designs', 'Laboratory'];

function App() {
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
        name='MENU'
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
      {menu === 'Laboratory' ? <Laboratory /> : null}
    </div>
  );
}

export default App;
