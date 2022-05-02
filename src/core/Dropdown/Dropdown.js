import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import classNames from 'classnames/bind';
import { MdKeyboardArrowDown } from 'react-icons/md';

const cx = classNames.bind(styles);
let key = 0;

const Option = ({ option, value }) => {
  return <option value={value}>{option}</option>;
};

const Dropdown = ({ name, placeholder, optionList }) => {
  const [value, setValue] = useState('init');

  const onChange = (event) => {
    setValue(() => event.target.value);
  };

  return (
    <div className={cx('Dropdown')}>
      <label>{name}</label>

      <select value={value} onChange={onChange}>
        <option value='init' disabled>
          {placeholder}
        </option>

        {/* value={option} : option text와 value 일치 */}
        {optionList.map((option) => (
          <Option option={option} value={option} key={key++} />
        ))}
      </select>

      <MdKeyboardArrowDown className={cx('arrow')} size='25' />
    </div>
  );
};

Dropdown.defaultProps = {
  optionList: ['defaultProps'],
};

export default Dropdown;
