import React from 'react';
import Input from '../../core/Input/Input.js';
import Dropdown from '../../core/Dropdown/Dropdown.js';

const optionList = ['option A', 'option B', 'option C'];

const Designs = () => {
  return (
    <>
      <Input name='Username' placeholder='Your name...' />
      <br />
      <Input name='Email Address' type='email' placeholder='Email' />
      <br />
      <Dropdown name='Dropdown' optionList={optionList} />
      <br />
    </>
  );
};

export default Designs;
