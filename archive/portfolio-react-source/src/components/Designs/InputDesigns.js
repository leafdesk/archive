import React from 'react';
import Input from '../../core/Input/Input.js';
import Dropdown from '../../core/Dropdown/Dropdown.js';

const optionList = ['option A', 'option B', 'option C'];

const InputDesigns = () => {
  return (
    <>
      <Input label='Username' placeholder='Your name...' />
      <br />
      <Input label='Email Address' type='email' placeholder='Email' />
      <br />
      <Dropdown
        label='Dropdown'
        placeholder='Selece option'
        optionList={optionList}
      />
      <br />
    </>
  );
};

export default InputDesigns;
