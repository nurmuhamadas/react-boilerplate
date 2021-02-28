import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

const OtherRouter = () => {
  let { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/nesting-path`}>
          <h1>Render nesting page here</h1>
        </Route>
        <Route exact path={`${path}/`}>
          <h1>Render home nesting page here</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default OtherRouter;
