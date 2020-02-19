import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Task from '../../pages/Task';
import './App.sass';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/task" component={Task} />
      </Switch>
    </Router>
  );
}

export default App;
