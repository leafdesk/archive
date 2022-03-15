## 로그인 폼 & 인사말 그리기

0. 문자열 상수 설정

1. 인사말 그리기 기능

   - `greeting` 요소 선택해서 가져옴
   - [함수 표현: `paintGreeting`]
     - `username`을 받아서 `greeting`에 적용
     - `greeting` **활성화**

2. 로그인 기능

   - `loginForm`, `loginInput` 요소 선택해서 가져옴
   - [함수 표현: `onLoginSubmit`]
     - 기본 동작 방지
     - 입력된 값을 `username`에 저장
     - 입력된 값을 `localStorage`에 저장
     - [함수 실행: `paintGreeting`]
     - 로그인 폼 **숨김**

3. 메인 동작: `localStorage`에 따라 조건 분기

   - 저장된 `username` 없으면
     - 로그인 폼 **활성화**
     - [함수 실행: `onLoginSubmit`]
   - 저장된 `username` 있으면
     - [함수 실행: `paintGreeting`]

4. `hidden`과 활성화 workflow

   - 기본적으로 `loginForm`, `greeting` 모두 **숨김** 상태

     - `username` 없는 경우 (사용자의 첫 로그인) [3: 메인 동작]
       - 로그인 폼 활성화
       - 로그인 함수 실행 (`onLoginSubmit`) [2: 로그인 기능]
       - 그리기 함수 실행 (`paintGreeting`) [1: 그리기 기능]
         - `greeting` 활성화
       - 로그인 폼 숨김 [2: 로그인 기능]

     > 로그인 활성화 -> 인사 활성화 -> 로그인 숨김

     - `username` 있는 경우 (이전에 로그인한 적 있음) [3: 메인 동작]
       -> 그리기 함수 실행 (`paintGreeting`) [1: 그리기 기능]
       -> `greeting` 활성화

     > 인사 활성화

   - 다시 정리하면,
     - 로그인, `greeting` 숨김 -> 로그인 활성화 -> `greeting` 활성화 -> 로그인 숨김
     - 로그인, `greeting` 숨김 -> `greeting` 활성화

5. 총 정리

- 백지 상태에서, 로그인을 잠깐 활성화하여 `username`을 받은 다음, `greeting` 활성화 즉시 로그인을 숨김으로, 결국 화면에 `greeting`만 보이게 할 것이냐,
- 백지 상태에서, 바로 기존의 `username`을 가져와 `greeting`을 활성화할 것이냐 하는 차이다.
- 결국 목표는 `greeting` 활성화다.
