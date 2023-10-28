// [ 5. To-do List ]

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TASKS = "tasks";

// to-do 항목을 담을 빈 배열(Array) 생성 -> 로컬 스토리지 저장을 위해
let tasks = [];

const saveTasks = function () {
  // tasks 배열을 통째로 문자열로 변환하여 로컬 스토리지에 저장
  localStorage.setItem(TASKS, JSON.stringify(tasks));
};

const deleteTodo = function (event) {
  /**
   * event가 발생한 target은 li > button
   * target의 부모 요소는 li -> li 변수에 가져옴
   */
  const li = event.target.parentElement;

  // 해당 리스트 요소 삭제
  li.remove();

  // filter를 통해 요소를 삭제한 새로운 배열으로 교체
  tasks = tasks.filter((item) => item.id !== parseInt(li.id));

  // tasks 배열을 로컬 스토리지에 저장
  saveTasks();
};

const paintTodo = function (newTodoObj) {
  // <li><li> 생성 및 아이디 붙이기
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  // <span>newTodo<span> 생성
  const span = document.createElement("span");
  span.innerText = newTodoObj.task;

  // <button>❎<button> 생성
  const button = document.createElement("button");
  button.innerText = "❎";
  button.addEventListener("click", deleteTodo);

  /**
   * span, button 순으로 li에 붙임
   * appendChild 코드는 항상 뒤에서 (순서 때문)
   *
   * <li>
   *   <span>newTodo</span>
   *   <button>❎</button>
   * </li>
   */
  li.appendChild(span);
  li.appendChild(button);

  /**
   * todoList: <ul id="todo-list"></ul>
   * 위에서 만든 <li>를 자식으로 삽입
   */
  todoList.appendChild(li);
};

const onTodoSubmit = function (event) {
  // 기본 동작 방지
  event.preventDefault();

  // input 값을 newTodo에 저장하고 input 폼 비우기
  const newTodo = todoInput.value;
  todoInput.value = "";

  // id:task 객체 생성해서 tasks 배열에 push
  const newTodoObj = {
    task: newTodo,
    id: Date.now(),
  };
  tasks.push(newTodoObj);

  // newTodo, 즉 input 값을 화면에 그리기
  paintTodo(newTodoObj);

  // tasks 배열을 로컬 스토리지에 저장
  saveTasks();
};

// todoForm에 submit 수신 시 onTodoSubmit 실행
todoForm.addEventListener("submit", onTodoSubmit);

// JSON.stringify로 로컬 스토리지에 저장된 tasks 문자열을 가져옴
const savedTasks = localStorage.getItem(TASKS);

if (savedTasks) {
  // 로컬 스토리지에 이미 저장된 문자열을 해석해서 parsedTasks에 저장
  const parsedTasks = JSON.parse(savedTasks);

  // 해석된 기존의 내용(parsedTasks)을 tasks 배열에 복원
  tasks = parsedTasks;

  /**
   * forEach 함수는 실행할 때 배열의 각 item을 자동으로 넘겨줌
   * 로컬 스토리지의 각 항목을 화면에 그리기
   */
  parsedTasks.forEach((item) => paintTodo(item));
}
