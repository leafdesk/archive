import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home.js';
import Agent from './routes/Agent.js';
import Manager from './routes/Manager.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/agent'>
          <Agent />
        </Route>

        <Route path='/manager'>
          <Manager />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
