import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import configureStore from './store';
import "normalize.css";

const root = document.getElementById("root");

if (root != null) {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    root
  );
}
