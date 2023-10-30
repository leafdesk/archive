export default class Component {
  target;
  state;

  constructor(target) {
    this.target = target;
    this.init();
    this.setEvent();
    this.render();
  }

  init() {}

  template() {
    return '';
  }

  render() {
    this.target.innerHTML = this.template();
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // addEvent(eventType, selector, callback) {
  //   // selector를 가진 모든 DOM 요소를 모은 children 배열
  //   const children = [...this.target.querySelectorAll(selector)];

  //   // target을 매개변수로 받아서, 해당 target을 가진 children이 있는지 검사
  //   const isTarget = (target) =>
  //     children.includes(target) || target.closest(selector);

  //   // 해당 target을 가진 children이 있다면, 이벤트 리스너 추가
  //   this.target.addEventListener(eventType, (event) => {
  //     if (!isTarget(event.target)) return false;

  //     // 콜백 함수란? 다른 함수에 인수로 전달된 함수
  //     callback(event);
  //   });
  // }
}
