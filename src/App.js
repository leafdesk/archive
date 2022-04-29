import React, { useState } from 'react';
import Dropdown from './core/Dropdown/Dropdown.js';
import Designs from './components/Designs/Designs.js';

const menu = ['Designs'];

function App() {
  return (
    <div
      style={{
        width: 360,
      }}
    >
      <Dropdown name='MENU' placeholder='Select MENU' optionList={menu} />
      <br />
      <div
        style={{
          height: 1,
          backgroundColor: '#c7cad1',
        }}
      />
      <br />

      <Designs />
    </div>
  );
}

export default App;
