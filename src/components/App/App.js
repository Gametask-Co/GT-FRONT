import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import './App.sass';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/dashboard" component={dashboard} /> */}
        {/* <Route path="/task" component={task} /> */}
      </Switch>
    </Router>
  );
}

export default App;
