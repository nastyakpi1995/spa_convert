import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const Root = () => (
  <Provider store={store}>
    <HashRouter>
    <App />
  </HashRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));