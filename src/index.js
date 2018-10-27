import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import { Provider } from 'react-redux'
import configureStore from './store';
import "normalize.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
