import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Root from './root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store/reducers';
import logger from 'redux-logger';

const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
