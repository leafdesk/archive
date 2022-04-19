const projectList = [
  {
    title: 'TodoList',
    startDate: 220317,
    pageUrl: '',
  },
  {
    title: 'Progress Steps',
    startDate: 220324,
    pageUrl: '',
  },
  {
    title: 'RWD: AppLab',
    startDate: 220330,
    pageUrl: '',
  },
];

class Project extends HTMLElement {
  constructor(projectObject) {
    this.project = projectObject;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const item = document.createElement('li');
    const a = document.createElement('a');

    const startDate = document.createElement('p');
    startDate.innerText = this.project.startDate;
    const title = document.createElement('p');
    title.innerText = this.project.title;

    a.appendChild(startDate);
    a.appendChild(title);
    item.appendChild(a);
  }
}

class ProjectList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const list = document.createElement('ul');
  }
}

customElements.define('Project', Project, { extends: 'li' });
customElements.define('ProjectList', ProjectList, { extends: 'ul' });
