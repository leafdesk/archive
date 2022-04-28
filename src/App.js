import React from 'react';
import Input from './core/Input/Input.js';

function App() {
  return (
    <div
      style={{
        width: 360,
      }}
    >
      <form>
        <Input name='Username' placeholder='Your name...' />
        <br />
        <Input name='Email Address' type='email' placeholder='Email' />
        <br />
      </form>
    </div>
  );
}

export default App;
