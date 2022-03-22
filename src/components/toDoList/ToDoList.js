const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TASKS = 'tasks';
let _tasks = [];

const saveTasks = () => {
  localStorage.setItem(TASKS, JSON.stringify(_tasks));
};

const handleCheckBox = (event) => {
  //
};

const handleDeleteButton = (event) => {
  const li = event.target.parentElement;
  li.remove();

  // _tasks 배열을 수정해서 local storage에 반영
  _tasks = _tasks.filter((item) => item.id !== parseInt(li.id));
  saveTasks();
};

const paintItem = (item) => {
  const li = document.createElement('li');
  li.id = item.id;

  // <i class="fa-solid fa-square-check"></i>
  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fa-solid');
  checkIcon.classList.add('fa-square-check');
  checkIcon.addEventListener('click', handleCheckBox);

  const span = document.createElement('span');
  span.innerText = item.val;

  // <i class="fas fa-trash"></i> (Font Awesome Icon)
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('fas');
  trashIcon.classList.add('fa-trash');
  trashIcon.addEventListener('click', handleDeleteButton);

  li.appendChild(checkIcon);
  li.appendChild(span);
  li.appendChild(trashIcon);
  toDoList.appendChild(li);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const _val = toDoInput.value;
  toDoInput.value = '';

  const item = {
    id: Date.now(),
    val: _val,
  };
  _tasks.push(item);
  paintItem(item);

  saveTasks();
};

toDoForm.addEventListener('submit', handleSubmit);

const savedTasks = localStorage.getItem(TASKS);
if (savedTasks) {
  const parsedTasks = JSON.parse(savedTasks);
  _tasks = parsedTasks;
  parsedTasks.forEach((item) => paintItem(item));
}
