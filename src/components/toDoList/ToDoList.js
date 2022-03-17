const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TASKS = "tasks";
let _tasks = [];

const saveTasks = () => {
  localStorage.setItem(TASKS, JSON.stringify(_tasks));
};

const handleDeleteButton = (event) => {
  const li = event.target.parentElement;
  li.remove();

  // _tasks 배열을 수정해서 local storage에 반영
  _tasks = _tasks.filter((item) => item.id !== parseInt(li.id));
  saveTasks();
};

const paintItem = (item) => {
  const li = document.createElement("li");
  li.id = item.id;

  const span = document.createElement("span");
  span.innerText = item.val;

  const button = document.createElement("button");
  button.innerText = "❎";
  button.addEventListener("click", handleDeleteButton);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const _val = toDoInput.value;
  toDoInput.value = "";

  const item = {
    id: Date.now(),
    val: _val,
  };
  _tasks.push(item);
  paintItem(item);

  saveTasks();
};

toDoForm.addEventListener("submit", handleSubmit);

const savedTasks = localStorage.getItem(TASKS);
if (savedTasks) {
  const parsedTasks = JSON.parse(savedTasks);
  _tasks = parsedTasks;
  parsedTasks.forEach((item) => paintItem(item));
}
