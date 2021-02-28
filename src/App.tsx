import AppRouter from "components/AppRouter";
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
