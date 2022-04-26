import Component from '../core/Component.js';

export default class List extends Component {
  init() {
    this.state = {
      // list: ['item1', 'item2'],
      list: [],
    };
  }

  template() {
    const { list } = this.state;
    const listElement = list
      .map(
        (item, key) => `
        <li>
          ${item}
          <button class="delBtn" data-index='${key}'>삭제</button>
        </li>`
      )
      // 콤마(,) 지우기 위해 join 사용
      .join('');

    return `
      <ul>
        ${listElement}
      </ul>
      <button class='addBtn'>추가</button>
    `;
  }

  setEvent() {
    const addBtn = this.target.querySelector('.addBtn');
    const delBtns = this.target.querySelectorAll('.delBtn');

    addBtn.onclick = () => {
      const { list } = this.state;
      const newItem = `item${list.length + 1}`;
      this.setState({ list: [...list, newItem] });
    };

    delBtns.forEach((btn) => {
      // 비구조화 할당으로 event 객체에서 바로 target을 뽑아낸 것 = event.target
      btn.onclick = ({ target }) => {
        const list = [...this.state.list];
        // list 배열 요소 중, target의 data-index 값 위치에 있는 1개를 삭제
        list.splice(target.dataset.index, 1);
        this.setState({ list });
      };
    });
  }
}
