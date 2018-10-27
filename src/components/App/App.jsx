import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { connect } from 'react-redux';
import "./App.less";


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

if (module.hot) {
  module.hot.accept()
}

export default hot(module)(connect()(App));
