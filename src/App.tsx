import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ProjectDetailPage, ProjectPage } from "./Products"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProjectPage} />
        <Route path="/detail/:id" component={ProjectDetailPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
