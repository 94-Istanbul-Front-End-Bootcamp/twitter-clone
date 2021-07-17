import 'bootstrap/dist/css/bootstrap.min.css';
import { TheLayout } from './container';
import { Login } from './view';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './app.css';

const App = () => {
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  return (
    <Router>
      <Switch>
        <Route exact path="/404">
          <div>404</div>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <TheLayout />
        </Route>
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
