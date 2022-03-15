const loginForm = document.querySelector("#login");

// 로그인 폼이 제출될 때 수행할 함수
const onLoginSubmit = function (event) {
  /**
   * preventDefault() : 기본 동작 방지
   *
   * input 폼에서 엔터 시 자동 submit 방지
   * 로그인 버튼 눌러도 아무 동작도 하지 않음
   */
  event.preventDefault();
};

/**
 * addEventListener() 함수
 *
 * 대상(EventTarget)이 특정 이벤트를 수신할 때 실행할 함수를 설정
 * loginForm에서 submit 수행을 감지하면 onLoginSubmit 함수를 실행
 */
loginForm.addEventListener("submit", onLoginSubmit);
