import { Provider } from 'react-redux';
import './App.css';
import Router from './router';
import store from './store';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
