import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { connect } from 'react-redux';
import "./App.less";
import styles from "../../../style/globals.less";


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <h2> Hello, World! </h2>
        <h3> Hello, World! </h3>
        <h4> Hello, World! </h4>
        <h5> Hello, World! </h5>
        <p> Hello, World! </p>
        <button class="custom-btn">Test</button>
      </div>
    );
  }
}

if (module.hot) {
  module.hot.accept()
}

export default hot(module)(connect()(App));
