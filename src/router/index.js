import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import OtherRouter from './otherRouter';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Render page here</h1>
        </Route>
        <Route path="/others">
          <OtherRouter />
        </Route>
        <Route path="/route-with-params/:id">
          <h1>Render page with param id</h1>
        </Route>
        <Route path="*">
          <h1>404 page</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter;
