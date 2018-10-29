import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path = "/" component = {App}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    root
  );
}
