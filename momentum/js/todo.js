const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const toDos = [];

const saveToDos = function () {
  localStorage.setItem('todos', toDos);
};

const deleteToDo = function (event) {
  const li = event.target.parentElement; // 삭제하고 싶은 li
  li.remove();
};

const paintToDo = function (newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = function (event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(newTodo);
  paintToDo(newTodo);
};

toDoForm.addEventListener('submit', handleToDoSubmit);
