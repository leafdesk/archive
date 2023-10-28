import List from './components/List.js';

class App {
  constructor() {
    const root = document.getElementById('root');
    new List(root);
  }
}

new App();
