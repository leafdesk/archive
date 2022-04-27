import React from 'react';

const Input = ({ name, placeholder }) => {
  return (
    <div>
      <label>{name}</label>
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
