import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Recipes from 'pages/Recipes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="recipes" />
        <Route exact path="/recipes">
          <Recipes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
