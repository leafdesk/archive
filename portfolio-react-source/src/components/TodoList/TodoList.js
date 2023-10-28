import React, { useState } from 'react';
import Input from '../../core/Input/Input';
import Button from '../../core/Button/Button';
import List from '../../core/List/List';
import ListItem from '../../core/ListItem/ListItem';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const onChange = (value) => {
    setValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value === '') return;
    setTasks([
      ...tasks,
      {
        key: Date.now(),
        value: value,
      },
    ]);
    setValue('');
  };

  const onDelete = (id) => {
    setTasks([...tasks].filter((item) => item.key !== id));
  };

  return (
    <>
      <h3>TODOLIST</h3>
      <form onSubmit={onSubmit}>
        <Input parentValue={value} setParentState={onChange} />
        <Button name='Add' primary />
      </form>
      <br />
      <List>
        {tasks.map((item) => (
          <ListItem
            key={item.key}
            id={item.key}
            value={item.value}
            setParentState={onDelete}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
