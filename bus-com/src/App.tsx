import './App.css';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/redux/store";
import routes from './routes/routes';
import { history } from './utils/history';


function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
    </Provider>
  );
}

export default App;
