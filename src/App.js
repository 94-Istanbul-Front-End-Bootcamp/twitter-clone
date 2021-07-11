import 'bootstrap/dist/css/bootstrap.min.css';
import { TheLayout } from './container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './app.css';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/404">
          <div>404</div>
        </Route>
        <Route path="/">
          <TheLayout />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
