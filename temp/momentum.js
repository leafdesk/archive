// 반복되는 문자열(String)은 오타 방지를 위해 상수로 설정
const USERNAME = "username";
const HIDDEN = "hidden";

// [ 1. Greeting Function ]

// document 전체에서 "id=greeting" 태그를 찾아 greeting에 저장
const greeting = document.querySelector("#greeting");

// username을 받아서 greeting을 화면에 그리는 함수
const paintGreeting = function (username) {
  // greeting의 텍스트를 다음과 같이 수정
  greeting.innerText = `Hi, ${username}`;

  // greeting의 hidden 클래스 삭제 -> greeting 활성화
  greeting.classList.remove(HIDDEN);
};

// [ 2. Login Function ]

/**
 * html 요소를 선택해서 변수에 할당
 *
 * 1. document 전체에서 "id=login" 태그를 찾아 loginForm에 저장
 * 2. loginForm의 자식 요소 중에서 <input> 태그를 찾아 loginInput에 저장
 */
const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");

// 로그인 폼이 제출(submit)될 때 수행할 함수
const onLoginSubmit = function (event) {
  /**
   * preventDefault() : 기본 동작 방지
   *
   * input 폼에서 엔터 시 자동 submit 방지
   * 로그인 버튼 눌러도 아무 동작도 하지 않음
   */
  event.preventDefault();

  // loginInput에 입력된 value를 username에 저장
  const username = loginInput.value;

  // 로컬 스토리지에 Key:Value 쌍을 저장
  localStorage.setItem(USERNAME, username);

  // username으로 인사말을 화면에 그림
  paintGreeting(username);

  // 로그인 폼에 hidden 클래스 추가 -> 로그인 폼 숨김
  loginForm.classList.add(HIDDEN);
};

// [ 3. Conditional Branch : Login & Greeting ]

// 로컬 스토리지에서 username을 가져와 savedUsername에 저장
const savedUsername = localStorage.getItem(USERNAME);

// 로컬 스토리지에 저장된 username 존재 여부에 따라 동작이 다름
if (savedUsername === null) {
  /**
   * 기존에 저장된 이름(savedUsername)이 없다면,
   * 로그인 폼의 hidden 클래스 삭제 -> 로그인 폼 활성화
   */
  loginForm.classList.remove(HIDDEN);

  /**
   * addEventListener() 함수
   *
   * 대상(EventTarget)이 특정 이벤트를 수신할 때 실행할 함수를 설정
   * loginForm에서 submit 수행을 감지하면 onLoginSubmit 함수를 실행
   */
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  /**
   * 기존에 저장된 이름(savedUsername)이 있다면,
   * 그 이름으로 인사말을 화면에 그림
   */
  paintGreeting(savedUsername);
}
