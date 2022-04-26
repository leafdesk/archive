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
}
