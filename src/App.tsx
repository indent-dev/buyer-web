import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ProjectPage } from "./Products"
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={ProjectPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
