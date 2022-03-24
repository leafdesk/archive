const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const activeNum = document.querySelector('#active-num');
const clearButton = document.querySelector('#clear-completed');
const xMark = document.querySelector('.fa-xmark');

const TASKS = 'tasks';
let _tasks = [];

const handleListBorder = () => {
  if (_tasks.length === 0) {
    toDoList.classList.add('hidden');
  } else {
    toDoList.classList.remove('hidden');
  }
};

const showActiveNum = () => {
  const activeItems = _tasks.filter((item) => item.isChecked === false);
  activeNum.innerText = `${activeItems.length} items left`;
  handleListBorder();
};

const saveTasks = () => {
  localStorage.setItem(TASKS, JSON.stringify(_tasks));
  showActiveNum();
};

const handleCheckbox = (event) => {
  const li = event.target.parentElement;
  const isChecked = li.className;

  if (isChecked) {
    // console.log("checked -> no checked");
    li.classList.remove('checked');
    for (let i in _tasks) {
      if (_tasks[i].id === parseInt(li.id)) {
        _tasks[i].isChecked = false;
      }
    }
    // console.log(_tasks);
  } else {
    // console.log("no checked -> checked");
    li.classList.add('checked');
    for (let i in _tasks) {
      if (_tasks[i].id === parseInt(li.id)) {
        _tasks[i].isChecked = true;
      }
    }
    // console.log(_tasks);
  }
  saveTasks();
  // console.log(JSON.parse(localStorage.getItem(TASKS)));
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
  checkIcon.addEventListener('click', handleCheckbox);

  const span = document.createElement('span');
  span.innerText = item.val;

  // <i class="fas fa-trash"></i> (Font Awesome Icon)
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('fas');
  trashIcon.classList.add('fa-trash');
  if (item.isChecked) {
    li.classList.add('checked');
  }
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
    isChecked: false,
  };
  _tasks.push(item);
  paintItem(item);

  saveTasks();
};

const handleClearButton = () => {
  for (let i in _tasks) {
    if (_tasks[i].isChecked) {
      const li = document.getElementById(_tasks[i].id);
      li.remove();
    }
  }

  _tasks = _tasks.filter((item) => item.isChecked === false);
  saveTasks();
};

toDoForm.addEventListener('submit', handleSubmit);
clearButton.addEventListener('click', handleClearButton);
xMark.addEventListener('click', (event) => (toDoInput.value = ''));

const savedTasks = localStorage.getItem(TASKS);

if (savedTasks) {
  const parsedTasks = JSON.parse(savedTasks);
  _tasks = parsedTasks;

  parsedTasks.forEach((item) => {
    paintItem(item);
    // paintCheckbox(item);
  });
}
showActiveNum();
handleListBorder();
