import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//auth stuff
import {Provider} from 'react-redux';
import store from "./auth/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
