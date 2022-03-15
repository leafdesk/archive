/**
 * html 요소를 선택해서 변수에 할당
 *
 * 1. document 전체에서 "id=login" 태그를 찾아 loginForm에 저장
 * 2. loginForm의 자식 요소 중에서 <input> 태그를 찾아 loginInput에 저장
 */
const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");

// 반복되는 문자열(String)은 오타 방지를 위해 상수로 설정
const USERNAME_KEY = "username";

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
  localStorage.setItem(USERNAME_KEY, username);
};

/**
 * addEventListener() 함수
 *
 * 대상(EventTarget)이 특정 이벤트를 수신할 때 실행할 함수를 설정
 * loginForm에서 submit 수행을 감지하면 onLoginSubmit 함수를 실행
 */
loginForm.addEventListener("submit", onLoginSubmit);
