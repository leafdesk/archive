import React, { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const onChange = (event) => setInput(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (input === '') return;
    setInput('');
    setTasks((current) => [input, ...current]);
  };

  return (
    <>
      <p>Todolist w/ React ({tasks.length})</p>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onChange}
          type='text'
          placeholder='Write your todos...'
        />
        <button>Add</button>
      </form>
      <br />
      <hr />
      <br />
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
