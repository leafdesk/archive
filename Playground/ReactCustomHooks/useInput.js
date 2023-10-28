// codesandbox.io
import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => !value.includes('@');
  const name = useInput('init', maxLength);

  return (
    <>
      <input placeholder='Name' {...name} />
    </>
  );
};

export default App;
