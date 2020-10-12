import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../pages/Home";
import Dashboard from "../../pages/Dashboard";
import Subject from "../../pages/Subject";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/subject" component={Subject} />
      </Switch>
    </Router>
  );
}

export default App;
