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
      .join('\n');

    return `
      <ul>
        ${listElement}
      </ul>
      <button class='addBtn'>추가</button>
    `;
  }

  setEvent() {
    this.target.onclick = ({ target }) => {
      const list = [...this.state.list];

      if (target.classList.contains('addBtn')) {
        const newItem = `item${list.length + 1}`;
        this.setState({
          list: [...list, newItem],
        });
      }

      if (target.classList.contains('delBtn')) {
        list.splice(target.dataset.index, 1);
        this.setState({ list });
      }
    };
  }
}
