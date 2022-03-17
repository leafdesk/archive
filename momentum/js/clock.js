// [ 4. Clock ]

const clock = document.querySelector("#clock");

const getClock = function () {
  /**
   * new Date()로 오늘 날짜와 시간을 가져옴 (console 테스트 가능)
   *
   * date에서 '시'를 가져옴 -> 문자열로 변경 -> 2자리로 앞을 채움
   * date에서 '분'을 가져옴 -> 문자열로 변경 -> 2자리로 앞을 채움
   * date에서 '초'를 가져옴 -> 문자열로 변경 -> 2자리로 앞을 채움
   *
   * clock의 innerText를 hours:minutes:seconds로 변경
   */
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

// 00:00:00이 보이지 않도록 즉시 함수 실행
getClock();

// 1000ms(1초)마다 getClock 실행 : 1초마다 갱긴
setInterval(getClock, 1000);
